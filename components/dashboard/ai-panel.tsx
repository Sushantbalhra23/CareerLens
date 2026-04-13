// "use client"

// import axios from "axios"
// import { useState } from "react"
// import { Sparkles, Send, Mic } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Task } from "@/components/dashboard/types"

// const suggestions = [
//   "Help me plan my week",
//   "Track my learning goals",
//   "Suggest career paths",
//   "Review my progress",
// ]


// // export function AIPanel() {
// export function AIPanel({
//   tasks,
//   setTasks,
// }: {
//   tasks: any[];
//   setTasks: any;
// }) {
//   const [input, setInput] = useState("")

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     try {
//       const res = await axios.post("http://localhost:5000/ai/chat", {
//         message: input,
//       });

//       console.log("AI RESPONSE 👉", res.data);

//       // 👇 YAHI ADD KARNA HAI (IMPORTANT)
//       // setTasks(res.data.kanban);
//       setTasks(res.data.kanban)
//       localStorage.setItem("tasks", JSON.stringify(res.data.kanban))

//     } catch (err) {
//       console.error("AI ERROR ❌", err);
//     }
//   };

//   return (
//     <Card className="border-border bg-card shadow-sm">
//       <CardContent className="p-6">
//         <div className="flex flex-col items-center text-center">
//           <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
//             <Sparkles className="h-6 w-6 text-primary" />
//           </div>
//           <h2 className="mb-2 text-xl font-semibold text-card-foreground">
//             How can I help you?
//           </h2>
//           <p className="mb-6 text-sm text-muted-foreground">
//             Ask me anything about your goals, tasks, or career planning
//           </p>

//           {/* Input Area */}
//           <div className="relative mb-4 w-full">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your question or goal..."
//               className="h-12 w-full rounded-xl border border-input bg-background pl-4 pr-24 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") handleSend();
//               }}
//             />
//             <div className="absolute right-2 top-1/2 flex -translate-y-1/2 gap-1">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-8 w-8 text-muted-foreground hover:text-foreground"
//               >
//                 <Mic className="h-4 w-4" />
//               </Button>
//               <Button
//                 size="icon"
//                 onClick={handleSend}
//                 className="h-8 w-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
//               >
//                 <Send className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           {/* Quick Suggestions */}
//           <div className="flex flex-wrap justify-center gap-2">
//             {suggestions.map((suggestion) => (
//               <button
//                 key={suggestion}
//                 onClick={() => setInput(suggestion)}
//                 className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
//               >
//                 {suggestion}
//               </button>
//             ))}
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }



"use client"

import axios from "axios"
import { useState } from "react"
import { Sparkles, Send, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


const suggestions = [
  "Help me plan my week",
  "Track my learning goals",
  "Suggest career paths",
  "Review my progress",
]

export function AIPanel({
  tasks,
  setTasks,
}: {
  tasks: any[]
  setTasks: any
}) {
  const [input, setInput] = useState("")
  const [chatHistory, setChatHistory] = useState<any[]>([])
  const [aiReply, setAiReply] = useState("")

  const handleSend = async () => {
    if (!input.trim()) return

    try {

      const res = await axios.post("http://localhost:5000/ai/chat", {
        message: input,
        history: chatHistory

      })

      if (res.data.reply) {
        setAiReply(res.data.reply)

        // Try extracting JSON from reply text
        const jsonMatch = res.data.reply.match(/\{[\s\S]*\}/)

        if (jsonMatch) {
          try {
            const parsed = JSON.parse(jsonMatch[0])

            res.data.kanban = parsed.kanban
            res.data.dailyTasks = parsed.dailyTasks
            res.data.calendar = parsed.calendar
          } catch (err) {
            console.log("JSON parse failed")
            return
          }
        } else {
          return
        }
      }
      console.log("AI RESPONSE:", res.data)

      const dailyTasks = res.data.dailyTasks || []

      for (const plan of dailyTasks) {
        if (plan.tasks) {
          for (const task of plan.tasks) {
            await axios.post("http://localhost:5000/tasks", {
              title: `Day ${plan.day}: ${task}`,
              status: "todo",
              type: "daily"
            })
          }
        }
      }

      const phases = res.data.kanban || []

      for (const phase of phases) {
        // Case 1: old format → column + cards
        if (phase.cards && phase.column) {
          for (const card of phase.cards) {
            await axios.post("http://localhost:5000/tasks", {
              title: card,
              status: "todo",
              category: phase.column,
              type: "kanban"
            })
          }
        }

        // Case 2: new format → task + status
        else if (phase.task) {
          await axios.post("http://localhost:5000/tasks", {
            title: phase.task,
            status: phase.status?.toLowerCase() || "todo",
            type: "kanban"
          })
        }
      }

      const calendarTasks = res.data.calendar || []

      for (const task of calendarTasks) {
        await axios.post("http://localhost:5000/tasks", {
          title: task.task,
          dueDate: task.date,
          status: "todo",
          type: "calendar"
        })
      }

      console.log("AI structured plan saved ✅")

    } catch (err) {
      console.error("AI ERROR ❌", err)
    }
  }

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>

          <h2 className="mb-2 text-xl font-semibold text-card-foreground">
            How can I help you?
          </h2>

          <p className="mb-6 text-sm text-muted-foreground">
            Ask me anything about your goals, tasks, or career planning
          </p>

          {/* Input */}
          <div className="relative mb-4 w-full">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question or goal..."
              className="h-12 w-full rounded-xl border border-input bg-background pl-4 pr-24 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend()
              }}
            />

            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Mic className="h-4 w-4" />
              </Button>

              <Button
                size="icon"
                onClick={handleSend}
                className="h-8 w-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="flex flex-wrap justify-center gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInput(suggestion)}
                className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {suggestion}
              </button>
            ))}
          </div>
          {aiReply && (
            <p className="text-sm text-muted-foreground mt-3">
              {aiReply}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}