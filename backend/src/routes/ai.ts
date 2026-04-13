// import express from "express";
// import OpenAI from "openai";

// const router = express.Router();

// const openai = new OpenAI({
//     apiKey: process.env.GROQ_API_KEY,
//     baseURL: "https://api.groq.com/openai/v1",
// });

// router.post("/chat", async (req, res) => {
//     try {
//         const { message } = req.body;

//         const completion = await openai.chat.completions.create({
//             model: "llama-3.3-70b-versatile",
//             messages: [
//                 {
//                     role: "system",
//                     content: `
// You are an AI career planner.

// User will talk in natural language.

// Extract:
// - skills
// - goal
// - duration

// Return ONLY JSON:

// {
//   "kanban": [{ "title": "", "status": "todo" }],
//   "dailyTasks": [{ "title": "", "date": "YYYY-MM-DD" }],
//   "calendar": [{ "title": "", "date": "YYYY-MM-DD" }],
//   "roadmapText": ""
// }

// Rules:
// - max 6 kanban tasks
// - max 5 daily tasks
// - clear roadmap
// `
//                 },
//                 {
//                     role: "user",
//                     content: message
//                 }
//             ],
//         });

//         let content = completion.choices[0].message.content || "{}";

//         // remove ```json ``` wrappers
//         content = content.replace(/```json|```/g, "").trim();

//         let data;

//         try {
//             data = JSON.parse(content);
//         } catch (err) {
//             console.log("RAW AI RESPONSE ❌", content);

//             data = {
//                 kanban: [],
//                 dailyTasks: [],
//                 calendar: [],
//                 roadmapText: content,
//             };
//         }

//         res.json(data);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "AI failed" });
//     }
// });

// export default router;


import express from "express";
import OpenAI from "openai";
import AIResponse from "../models/AIResponse"; // 👈 ADD THIS
import Task from "../models/Task"; // 👈 ADD THIS

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

router.post("/chat", async (req, res) => {
    try {
        const { message, history = [] } = req.body;

        const completion = await openai.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: `
                        You are an AI placement preparation planner.

                        Return ONLY valid JSON.

                        Format:

                        {
                        "kanban": [
                            { "task": string, "status": "todo" }
                        ],
                        "dailyTasks": [
                            { "day": number, "tasks": string[] }
                        ],
                        "calendar": [
                            { "date": string, "task": string }
                        ],
                        "roadmapText": string
                        }

                        Rules:
                        - Do NOT ask questions
                        - Do NOT explain outside JSON
                        - Do NOT leave arrays empty
                        - Always include at least:
                        3 kanban tasks
                        5 dailyTasks entries
                        3 calendar milestones
                        `
                },
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
                kanban: [],
                dailyTasks: [],
                calendar: [],
                roadmapText: content,
            };
        }

        // 💥 SAVE TO DB
        const saved = await AIResponse.create({
            userInput: message,
            ...data,
        });
        if (!data.kanban?.length) {
            return res.json({
                reply: data.roadmapText || "Tell me more about your goal"
            });
        }

        // 💥 CREATE KANBAN TASKS
        if (data.kanban?.length) {
            const tasksToInsert = data.kanban.map((t: any) => ({
                title: t.task,
                status: t.status || "todo",
                priority: "medium",
                category: "AI Generated",
                type: "kanban",
            }));

            await Task.insertMany(tasksToInsert);
        }

        // 💥 CREATE DAILY TASKS
        const today = new Date()

        const dailyToInsert = data.dailyTasks.flatMap((t: any) =>
            (t.tasks || []).map((task: string) => {
                const dueDate = new Date(today)
                dueDate.setDate(today.getDate() + (t.day - 1))

                return {
                    title: `Day ${t.day}: ${task}`,
                    status: "todo",
                    priority: "medium",
                    category: "AI Daily",
                    type: "daily",
                    dueDate
                }
            })
        )

        await Task.insertMany(dailyToInsert)

        // 💥 CREATE CALENDAR TASKS

        if (data.calendar?.length) {
            const today = new Date()

            const calendarToInsert = data.calendar.map((t: any, index: number) => {
                const date = new Date(today)
                date.setDate(today.getDate() + index)

                return {
                    title: t.task,
                    status: "todo",
                    priority: "medium",
                    category: "AI Calendar",
                    type: "calendar",
                    dueDate: date,
                }
            })

            await Task.insertMany(calendarToInsert)
        }

        console.log("AI SAVED ✅", saved._id);

        res.json(data);

    } catch (err) {
        console.error("AI ERROR ❌", err);
        res.status(500).json({ error: "AI failed" });
    }
});

export default router;