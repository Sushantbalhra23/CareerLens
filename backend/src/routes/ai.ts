import express from "express";
import OpenAI from "openai";
import AIResponse from "../models/AIResponse"; // 👈 ADD THIS
import Task from "../models/Task"; // 👈 ADD THIS
import User from "../models/Users";

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

router.post("/chat", async (req, res) => {
    try {
        const { message, history = [], userId } = req.body;
        const isRoadmapRequest =
            /roadmap|plan|schedule|study plan|learning path|job ready|learning roadmap/i.test(
                message
            );

        let userProfile = "";

        if (userId) {

            const user = await User.findById(userId);

            if (user) {
                userProfile = `
        USER PROFILE:

        Skill level: ${user.skillLevel}
        Target role: ${user.targetRole}
        Goal: ${user.goal}
        Preferred study time: ${user.preferredStudyTime?.start || "not set"} 
        to ${user.preferredStudyTime?.end || "not set"}
        `;
            }
        }

        const systemPrompt = `
You are CareerLens AI, a structured career mentor assistant.

If a user requests a roadmap or study plan:

FIRST check whether the user has provided:

- skill level
- target role
- roadmap duration
- working days per week
- study hours per day
- roadmap start date (YYYY-MM-DD)

If ANY of these are missing:

Return ONLY:

{
  "reply": "Ask the missing questions clearly in numbered format including roadmap start date in YYYY-MM-DD format"
}

DO NOT generate roadmap yet.

ONLY AFTER user provides ALL required inputs:

Return roadmap in this structure:

{
  "kanban": [
    { "title": "Phase 1: Foundations", "status": "todo" },
    { "title": "Phase 2: Core JavaScript", "status": "todo" },
    { "title": "Phase 3: React + APIs", "status": "todo" },
    { "title": "Phase 4: Production Projects", "status": "todo" },
    { "title": "Phase 5: Interview Preparation", "status": "todo" }
  ],

  "dailyTasks": [
    {
      "title": "task name",
      "date": "YYYY-MM-DD"
    }
  ],

  "calendar": [
    {
      "title": "task name",
      "date": "YYYY-MM-DD"
    }
  ],

  "roadmapText": "Explain roadmap phases clearly"
}

IMPORTANT:

You MUST generate dailyTasks covering the FULL roadmap duration.

Calculate:

duration_in_weeks × study_days_per_week = total_number_of_tasks

Example:

3 months ≈ 12 weeks
12 weeks × 5 days/week = 60 tasks

Generate EXACTLY total_number_of_tasks dailyTasks.

Do NOT generate partial schedules.
Do NOT generate sample schedules.
Generate the COMPLETE learning schedule from the provided start date until the roadmap ends.

RULES:

Kanban = roadmap phases ONLY (not individual learning topics)

Daily tasks = specific learning topics such as:
variables, arrays, functions, DOM manipulation, React hooks, APIs, projects, deployment, interview prep

Calendar = same tasks mapped to exact ISO dates

Always schedule tasks starting from the roadmap start date provided by the user

Schedule tasks ONLY on the number of study days per week specified by the user

Ensure the calendar spans the entire roadmap duration provided by the user

Ensure the number of generated dailyTasks matches the calculated total_number_of_tasks exactly

Never generate vague tasks like:

"learn javascript basics"

Instead generate precise tasks like:

"learn javascript variables"
"practice array problems"
"build todo app with React hooks"
"fetch data using REST API"
"deploy project on Vercel"
`;

        const completion = await openai.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content:
                        systemPrompt +
                        userProfile +
                        (isRoadmapRequest
                            ? `

                            IMPORTANT:
                            The user is requesting a roadmap.

                            If required details are missing, you MUST ask questions first.

                            Do NOT generate roadmap yet.
                            `
                            : "")
                },
                ...history,
                {
                    role: "user",
                    content: message
                }
            ]
        });

        let content = completion.choices[0].message.content || "{}";

        // remove ```json ```
        content = content.replace(/```json|```/gi, "").trim();

        let data;

        try {
            data = JSON.parse(content);
        } catch (err) {
            console.log("RAW AI RESPONSE ❌", content);

            data = {
                reply: content
            };
        }

        // 🚨 FORCE QUESTION-FIRST IF ROADMAP REQUEST BUT AI DIDN'T ASK
        if (isRoadmapRequest && !data.kanban && !data.reply) {
            return res.json({
                reply:
                    "Before I create your roadmap, tell me:\n" +
                    "1. Your current level?\n" +
                    "2. Target role?\n" +
                    "3. Study hours per day?\n" +
                    "4. Working days per week?\n" +
                    "5. Duration (e.g., 3 months)?\n" +
                    "6. Start date (YYYY-MM-DD)?"
            });
        }

        // 💥 SAVE TO DB

        if (data.reply) {

            await AIResponse.create({
                userInput: message,
                roadmapText: data.reply
            });

            return res.json({
                reply: data.reply
            });
        }

        // 🧹 Remove previous AI roadmap tasks
        await Task.deleteMany({
            category: "AI roadmap"
        });

        // 💥 CREATE KANBAN TASKS
        if (data.kanban?.length) {
            const tasksToInsert = data.kanban.map((t: any) => ({
                title: t.title,
                status: t.status || "todo",
                priority: "medium",
                category: "AI roadmap",
                type: "kanban",
            }));

            await Task.insertMany(tasksToInsert);
        }

        // 💥 CREATE DAILY TASKS
        // const today = new Date()

        if (data.dailyTasks?.length) {

            const dailyToInsert = data.dailyTasks.map((task: any) => ({
                title: task.title,
                status: "todo",
                priority: "medium",
                category: "AI roadmap",
                type: "daily",
                dueDate: new Date(task.date)
            }));

            await Task.insertMany(dailyToInsert);
        }


        // 💥 CREATE CALENDAR TASKS

        if (data.calendar?.length) {

            const calendarToInsert = data.calendar.map((event: any) => ({
                title: event.title,
                status: "todo",
                priority: "medium",
                category: "AI roadmap",
                type: "calendar",
                dueDate: event.date ? new Date(event.date) : new Date()
            }));

            await Task.insertMany(calendarToInsert);
        }

        await AIResponse.create({
            userInput: message,
            ...data,
        });
        console.log("AI SAVED ✅");

        res.json(data);

    } catch (err) {
        console.error("AI ERROR ❌", err);
        res.status(500).json({ error: "AI failed" });
    }
});

export default router;