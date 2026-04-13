// // "use client";
// // import dynamic from "next/dynamic"
// // import { AIPanel } from "@/components/dashboard/ai-panel"
// // import { KanbanBoard } from "@/components/dashboard/kanban-board"
// // import { TaskList } from "@/components/dashboard/task-list"
// // import { ProgressChart } from "@/components/dashboard/progress-chart"
// // import { StatsCards } from "@/components/dashboard/stats-cards"
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// // // Dynamically import ConsistencyTracker with SSR disabled to prevent hydration issues
// // const ConsistencyTracker = dynamic(
// //   () => import("@/components/dashboard/consistency-tracker").then((mod) => mod.ConsistencyTracker),
// //   {
// //     ssr: false,
// //     loading: () => (
// //       <Card className="border-border bg-card shadow-sm">
// //         <CardHeader className="flex flex-row items-center justify-between pb-2">
// //           <CardTitle className="text-base font-semibold text-card-foreground">
// //             Monthly Consistency
// //           </CardTitle>
// //         </CardHeader>
// //         <CardContent className="px-4 pb-4">
// //           <div className="h-48 bg-muted/50 rounded-md animate-pulse" />
// //         </CardContent>
// //       </Card>
// //     ),
// //   }
// // )

// // export default function DashboardPage() {
// //   return (
// //     <>
// //       <div className="mb-6">
// //         <StatsCards />
// //       </div>

// //       <div className="grid grid-cols-12 gap-6">
// //         <div className="col-span-8 space-y-6">
// //           <AIPanel />
// //           <KanbanBoard />
// //         </div>

// //         <div className="col-span-4 space-y-6">
// //           <TaskList />
// //           <ProgressChart />
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <ConsistencyTracker />
// //       </div>
// //     </>
// //   )
// // }



// "use client";

// import { useEffect, useState } from "react"
// import axios from "axios"
// import dynamic from "next/dynamic"

// import { AIPanel } from "@/components/dashboard/ai-panel"
// import { KanbanBoard } from "@/components/dashboard/kanban-board"
// import { TaskList } from "@/components/dashboard/task-list"
// import { ProgressChart } from "@/components/dashboard/progress-chart"
// import { StatsCards } from "@/components/dashboard/stats-cards"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


// // ✅ Consistency Tracker (no change)
// const ConsistencyTracker = dynamic(
//   () => import("@/components/dashboard/consistency-tracker").then((mod) => mod.ConsistencyTracker),
//   {
//     ssr: false,
//     loading: () => (
//       <Card className="border-border bg-card shadow-sm">
//         <CardHeader className="flex flex-row items-center justify-between pb-2">
//           <CardTitle className="text-base font-semibold text-card-foreground">
//             Monthly Consistency
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="px-4 pb-4">
//           <div className="h-48 bg-muted/50 rounded-md animate-pulse" />
//         </CardContent>
//       </Card>
//     ),
//   }
// )

// export default function DashboardPage() {

//   const [tasks, setTasks] = useState<any[]>([])

//   useEffect(() => {
//     fetchTasks()
//   }, [])

//   // const fetchTasks = async () => {
//   //   try {
//   //     const res = await axios.get("/tasks")

//   //     // 🔥 IMPORTANT FIX
//   //     const data = Array.isArray(res.data) ? res.data : res.data.tasks || []

//   //     setTasks(data)
//   //   } catch (err) {
//   //     console.error(err)
//   //     setTasks([]) // fallback
//   //   }
//   // }

//   const fetchTasks = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/tasks") // ✅

//       console.log("🔥 API DATA:", res.data)

//       const data = Array.isArray(res.data)
//         ? res.data
//         : res.data.tasks || []

//       setTasks(data)
//     } catch (err) {
//       console.error(err)
//       setTasks([])
//     }
//   }

//   return (
// <>
//   <div className="mb-6">
//     <StatsCards tasks={tasks} />
//   </div>

//   <div className="grid grid-cols-12 gap-6">
//     <div className="col-span-8 space-y-6">
//       <AIPanel tasks={tasks} />
//       <KanbanBoard tasks={tasks} setTasks={setTasks} />
//     </div>

//     <div className="col-span-4 space-y-6">
//       <TaskList
//         tasks={tasks.filter((t) => t.type === "daily")}
//         setTasks={setTasks}
//       />
//       <ProgressChart tasks={tasks} />
//     </div>
//   </div>

//   <div className="mt-6">
//     <ConsistencyTracker tasks={tasks} setTasks={setTasks} />
//   </div>
// </>
//   )
// }

// final
// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "@hello-pangea/dnd";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// type TaskType = {
//   _id: string;
//   title: string;
//   status: string; // "todo" | "in-progress" | "done"
//   createdAt: string;
// };

// type GraphDataType = {
//   date: string;
//   done: number;
//   total: number;
// };

// export default function DashboardPage() {
//   // --- TASKS STATE ---
//   const [tasks, setTasks] = useState<TaskType[]>([]);

//   // --- GRAPH STATE ---
//   const [dailyProgress, setDailyProgress] = useState<GraphDataType[]>([]);

//   // --- FETCH TASKS FROM BACKEND ---
//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const res = await axios.get("/tasks"); // Make sure this endpoint exists
//         setTasks(res.data);
//       } catch (err) {
//         console.error("Failed to fetch tasks:", err);
//       }
//     };
//     fetchTasks();
//   }, []);

//   // --- GRAPH UPDATE ON TASK CHANGE ---
//   useEffect(() => {
//     const progressMap: { [date: string]: { done: number; total: number } } = {};

//     tasks.forEach((t) => {
//       const date = new Date(t.createdAt).toLocaleDateString();
//       if (!progressMap[date]) progressMap[date] = { done: 0, total: 0 };
//       progressMap[date].total += 1;
//       if (t.status === "done") progressMap[date].done += 1;
//     });

//     const progressArray = Object.entries(progressMap).map(([date, val]) => ({
//       date,
//       done: val.done,
//       total: val.total,
//     }));

//     setDailyProgress(progressArray);
//   }, [tasks]);

//   // --- HANDLE DRAG & DROP ---
//   const handleDragEnd = (result: DropResult) => {
//     if (!result.destination) return;

//     const { source, destination } = result;
//     const draggedTask = tasks[source.index];

//     // Determine new status based on destination droppableId
//     const newStatus = destination.droppableId;

//     // Update task status locally
//     setTasks((prev) =>
//       prev.map((t) =>
//         t._id === draggedTask._id ? { ...t, status: newStatus } : t
//       )
//     );

//     // Optionally, update backend
//     axios
//       .patch(`/tasks/${draggedTask._id}`, { status: newStatus })
//       .catch((err) => {
//         console.error("Failed to update task:", err);
//       });
//   };

//   // --- OPTIONAL: AI Suggestion ---
//   const generateAISuggestion = async () => {
//     const prompt = `Here are my tasks: ${tasks
//       .map((t) => t.title)
//       .join(", ")}. Suggest which ones I should prioritize today.`;
//     try {
//       const res = await axios.post("/api/gpt", { prompt }); // Your GPT API route
//       alert(res.data.suggestions);
//     } catch (err) {
//       console.error("AI suggestion failed:", err);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6 p-4">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <Button onClick={generateAISuggestion}>AI Suggest Tasks</Button>
//       </div>

//       {/* --- TASK DRAG & DROP LISTS --- */}
//       <div className="grid grid-cols-3 gap-4">
//         <DragDropContext onDragEnd={handleDragEnd}>
//           {["todo", "in-progress", "done"].map((status) => (
//             <Droppable droppableId={status} key={status}>
//               {(provided) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                   className="flex flex-col gap-2 p-2 border rounded min-h-50"
//                 >
//                   <h3 className="font-bold capitalize">
//                     {status.replace("-", " ")}
//                   </h3>
//                   {tasks
//                     .filter((t) => t.status === status)
//                     .map((task, index) => (
//                       <Draggable
//                         key={task._id}
//                         draggableId={task._id}
//                         index={index}
//                       >
//                         {(provided) => (
//                           <Card
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             className="cursor-pointer"
//                           >
//                             <CardContent>{task.title}</CardContent>
//                           </Card>
//                         )}
//                       </Draggable>
//                     ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </DragDropContext>
//       </div>

//       {/* --- DAILY PROGRESS GRAPH --- */}
//       <div className="w-full h-64 border p-4 rounded">
//         <h2 className="text-lg font-bold mb-2">Daily Progress</h2>
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={dailyProgress}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip
//               formatter={(value: number, name: string) =>
//                 name === "done" ? `${value} done` : `${value} total`
//               }
//             />
//             <Line
//               type="monotone"
//               dataKey="done"
//               stroke="#4ade80"
//               strokeWidth={2}
//               activeDot={{ r: 6 }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "@hello-pangea/dnd";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// type TaskType = {
//   _id: string;
//   title: string;
//   status: string; // "todo" | "in-progress" | "done"
//   createdAt?: string; // make it optional to avoid TS errors
// };

// type GraphDataType = {
//   date: string;
//   done: number;
//   total: number;
// };

// export default function DashboardPage() {
//   // --- TASKS STATE ---
//   const [tasks, setTasks] = useState<TaskType[]>([]);

//   // --- GRAPH STATE ---
//   const [dailyProgress, setDailyProgress] = useState<GraphDataType[]>([]);

//   // --- FETCH TASKS ---
//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const res = await axios.get("/tasks");
//         setTasks(res.data);
//       } catch (err) {
//         console.error("Failed to fetch tasks:", err);
//       }
//     };
//     fetchTasks();
//   }, []);

//   // --- UPDATE GRAPH ---
//   useEffect(() => {
//     const progressMap: { [date: string]: { done: number; total: number } } = {};

//     tasks.forEach((t) => {
//       // ✅ Handle undefined createdAt safely
//       const dateStr = t.createdAt
//         ? new Date(t.createdAt).toLocaleDateString()
//         : new Date().toLocaleDateString();

//       if (!progressMap[dateStr]) progressMap[dateStr] = { done: 0, total: 0 };
//       progressMap[dateStr].total += 1;
//       if (t.status === "done") progressMap[dateStr].done += 1;
//     });

//     const progressArray = Object.entries(progressMap)
//       .map(([date, val]) => ({
//         date,
//         done: val.done,
//         total: val.total,
//       }))
//       // Sort by date ascending
//       .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

//     setDailyProgress(progressArray);
//   }, [tasks]);

//   // --- DRAG & DROP ---
//   const handleDragEnd = (result: DropResult) => {
//     if (!result.destination) return;

//     const { source, destination } = result;
//     const draggedTask = tasks[source.index];

//     const newStatus = destination.droppableId;

//     setTasks((prev) =>
//       prev.map((t) =>
//         t._id === draggedTask._id ? { ...t, status: newStatus } : t
//       )
//     );

//     axios
//       .patch(`/tasks/${draggedTask._id}`, { status: newStatus })
//       .catch((err) => console.error("Failed to update task:", err));
//   };

//   // --- AI SUGGESTION ---
//   const generateAISuggestion = async () => {
//     const prompt = `Here are my tasks: ${tasks
//       .map((t) => t.title)
//       .join(", ")}. Suggest which ones I should prioritize today.`;

//     try {
//       const res = await axios.post("/api/gpt", { prompt });
//       alert(res.data.suggestions);
//     } catch (err) {
//       console.error("AI suggestion failed:", err);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6 p-4">
//       {/* HEADER */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <Button onClick={generateAISuggestion}>AI Suggest Tasks</Button>
//       </div>

//       {/* DRAG & DROP TASKS */}
//       <div className="grid grid-cols-3 gap-4">
//         <DragDropContext onDragEnd={handleDragEnd}>
//           {["todo", "in-progress", "done"].map((status) => (
//             <Droppable droppableId={status} key={status}>
//               {(provided) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                   className="flex flex-col gap-2 p-2 border rounded min-h-50"
//                 >
//                   <h3 className="font-bold capitalize">
//                     {status.replace("-", " ")}
//                   </h3>
//                   {tasks
//                     .filter((t) => t.status === status)
//                     .map((task, index) => (
//                       <Draggable
//                         key={task._id}
//                         draggableId={task._id}
//                         index={index}
//                       >
//                         {(provided) => (
//                           <Card
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             className="cursor-pointer"
//                           >
//                             <CardContent>{task.title}</CardContent>
//                           </Card>
//                         )}
//                       </Draggable>
//                     ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </DragDropContext>
//       </div>

//       {/* DAILY PROGRESS GRAPH */}
//       <div className="w-full h-64 border p-4 rounded">
//         <h2 className="text-lg font-bold mb-2">Daily Progress</h2>
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={dailyProgress}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip
//               formatter={(value: number, name: string) =>
//                 name === "done" ? `${value} done` : `${value} total`
//               }
//             />
//             <Line
//               type="monotone"
//               dataKey="done"
//               stroke="#4ade80"
//               strokeWidth={2}
//               activeDot={{ r: 6 }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }


// "use client"

// // import { Task } from "@/components/dashboard/types"
// import { useState } from "react"
// import { TaskList, Task } from "@/components/dashboard/task-list"
// import { KanbanBoard } from "@/components/dashboard/kanban-board"
// import { ProgressChart } from "@/components/dashboard/progress-chart"
// import { StatsCards } from "@/components/dashboard/stats-cards"

// export default function DashboardPage() {
//   // ✅ Single source of truth for all tasks
//   const [tasks, setTasks] = useState<Task[]>([])

//   return (
//     <div className="p-6 space-y-6">
//       {/* Stats Cards */}
//       <StatsCards tasks={tasks} />

//       {/* Progress Chart */}
//       <ProgressChart tasks={tasks} />

//       {/* Task List */}
//       <TaskList tasks={tasks} setTasks={setTasks} />

//       {/* Kanban Board */}
//       <KanbanBoard tasks={tasks} setTasks={setTasks} />
//     </div>
//   )
// } 

// app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { DropResult } from "@hello-pangea/dnd";
import { TaskList } from "@/components/dashboard/task-list";
import { KanbanBoard } from "@/components/dashboard/kanban-board";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { Task } from "@/components/dashboard/types";
import { Button } from "@/components/ui/button";
import { AIPanel } from "@/components/dashboard/ai-panel"
import { ConsistencyTracker } from "@/components/dashboard/consistency-tracker";
import { useDailyTasks } from "@/hooks/useDailyTasks"

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const {
    dailyTasks,
    addTask,
    toggleTask,
    deleteTask,
    editTask
  } = useDailyTasks()

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/tasks")

        const allTasks = Array.isArray(res.data)
          ? res.data
          : res.data.tasks ?? []

        const kanban = allTasks.filter((t: any) => t.type === "kanban")
        const daily = allTasks.filter((t: any) => t.type === "daily")

        setTasks(kanban)

      } catch (err) {
        console.error("Failed to fetch tasks:", err)
        setTasks([])
      }
    }

    fetchTasks()
  }, [])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const draggedTask = tasks[source.index];
    const newStatus = destination.droppableId as Task["status"];
    setTasks((prev) =>
      prev.map((t) =>
        t._id === draggedTask._id ? { ...t, status: newStatus } : t
      )
    );
    axios
      .patch(`/tasks/${draggedTask._id}`, { status: newStatus })
      .catch(console.error);
  };

  const generateAISuggestion = async () => {
    const prompt = `Here are my tasks: ${tasks
      .map((t) => t.title)
      .join(", ")}. Suggest priority tasks.`;
    try {
      const res = await axios.post("/api/gpt", { prompt });
      alert(res.data.suggestions);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks", {
      withCredentials: true
    })

    const allTasks = Array.isArray(res.data)
      ? res.data
      : res.data.tasks ?? []

    const kanban = allTasks.filter((t: any) => t.type === "kanban")
    const daily = allTasks.filter((t: any) => t.type === "daily")

    setTasks(kanban)
  }

  return (

    <>
      <div className="mb-6">
        <StatsCards tasks={tasks} />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <AIPanel tasks={tasks} setTasks={setTasks} ></AIPanel>
          <KanbanBoard tasks={tasks} setTasks={setTasks} />
        </div>

        <div className="col-span-4 space-y-6">
          <TaskList
            tasks={dailyTasks}
            onAdd={addTask}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
          <ProgressChart tasks={tasks} />
        </div>
      </div>

      <div className="mt-6">
        <ConsistencyTracker tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}



//     // <div className="p-6 space-y-6">
// <>
//     {/* ── STATS ROW ── */ }
//     < div className = "mb-6" >
//       <StatsCards tasks={tasks} />
//          </div >

//     {/* ── MID ROW: AI Assistant + Today's Tasks ── */ }
//     < div className = "grid grid-cols-[70%_30%] gap-2" >

//       {/* AI Assistant Card */ }
//   {/* <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center max-w-[90%] justify-center gap-4">
//           <div className="w-9 h-9 rounded-full bg-[#E1F5EE] flex items-center justify-center">
//           <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#1D9E75" strokeWidth="1.5">
//           <circle cx="8" cy="8" r="5" />
//           <path d="M6 8h4M8 6v4" />
//           </svg>
//           </div>
//           <div className="text-center">
//             <p className="text-sm font-medium text-gray-800">How can I help you?</p>
//             <p className="text-xs text-gray-400 mt-1">
//             Ask me anything about your goals, tasks, or career planning
//             </p>
//             </div>
//             <div className="flex items-center gap-2 w-full max-w-md bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
//             <input
//             type="text"
//             placeholder="Type your question or goal..."
//             className="bg-transparent text-xs text-gray-500 outline-none flex-1"
//             />
//             </div>
//             <div className="flex gap-2 flex-wrap justify-center">
//             {[
//               "Help me plan my week",
//               "Track my learning goals",
//               "Suggest career paths",
//               "Review my progress",
//               ].map((chip) => (
//                 <button
//                 key={chip}
//                 onClick={generateAISuggestion}
//                 className="text-[11px] px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-[#E1F5EE] hover:text-[#0F6E56] hover:border-[#9FE1CB] transition-colors cursor-pointer"
//                 >
//                 {chip}
//                 </button>
//                 ))}
//                 </div>
//                 </div> */}
//   <AIPanel tasks={tasks} setTasks={setTasks}></AIPanel>

//   {/* Today's Tasks Card */ }
//   <TaskList tasks={tasks}></TaskList>

//   {/* <div className="bg-white rounded-xl border border-gray-100 p-4">
//           <div className="flex items-center justify-between mb-3">
//           <TaskList tasks={tasks} setTasks={setTasks} /> */}
//   {/* <div>
//               <p className="text-sm font-medium text-gray-800">Today's Tasks</p>
//               <p className="text-[11px] text-gray-400">
//               {tasks.filter((t) => t.status === "done").length} of {tasks.length} completed
//               </p>
//               </div>
//               <button className="w-6 h-6 rounded-full border border-gray-200 text-gray-400 flex items-center justify-center hover:bg-gray-50 text-base">
//               +
//               </button> */}
//   {/* </div> */ }
//   {/* </div> */ }
//       </div >

//     {/* ── KANBAN BOARD ── */ }
//   {/* <div className="bg-white rounded-xl border border-gray-100 p-4"> */ }
//   {/* <p className="text-sm font-medium text-gray-800 mb-4">Goal Board</p> */ }
//   <KanbanBoard
//     tasks={tasks}
//     setTasks={setTasks}
//     onDragEnd={handleDragEnd}
//     />
//   {/* </div> */ }

//   {/* ── PROGRESS CHART + MONTHLY CALENDAR ── */ }
//   <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-4">
//     <div className="bg-white rounded-xl border border-gray-100 p-4">
//       {/* <p className="text-sm font-medium text-gray-800 mb-3">Progress Overview</p> */}
//       <ProgressChart tasks={tasks} />
//     </div>

//     <div className="bg-white rounded-xl border border-gray-100 p-4">
//       <div className="flex items-center justify-between mb-3">
//         {/* <p className="text-sm font-medium text-gray-800">Monthly Consistency</p> */}
//         <span className="text-[10px] text-gray-400">March 2026</span>
//       </div>
//       {/* 7-col heatmap calendar */}
//       <div className="grid grid-cols-7 gap-1">
//         {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
//           <span key={d} className="text-[9px] text-gray-400 text-center pb-1">{d}</span>
//         ))}
//         {Array.from({ length: 31 }, (_, i) => {
//           const levels = [
//             "bg-[#0F6E56]", "bg-[#1D9E75]", "bg-[#1D9E75]", "bg-[#0F6E56]",
//             "bg-[#9FE1CB]", "bg-[#0F6E56]", "bg-[#E1F5EE]", "bg-[#1D9E75]",
//             "bg-[#0F6E56]", "bg-[#0F6E56]", "bg-[#1D9E75]", "bg-[#0F6E56]",
//             "bg-[#0F6E56]", "bg-[#9FE1CB]", "bg-[#E1F5EE]", "bg-[#0F6E56]",
//             "bg-[#1D9E75]", "bg-[#0F6E56]", "bg-[#0F6E56]", "bg-[#1D9E75]",
//             "bg-[#0F6E56]", "bg-[#9FE1CB]", "bg-[#0F6E56]", "bg-[#1D9E75]",
//             "bg-[#0F6E56]", "bg-gray-100", "bg-gray-100", "bg-[#0F6E56]",
//             "bg-[#1D9E75]", "bg-[#0F6E56]", "bg-[#0F6E56]",
//           ];
//           return (
//             <div
//               key={i}
//               className={`aspect-square rounded-lg flex items-center justify-center text-[9px] font-medium
//                 ${levels[i]}
//                 ${levels[i].includes("0F6E56") || levels[i].includes("1D9E75") ? "text-white" : "text-[#085041]"}
//                 `}
//                 >
//               {i + 1}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>

//   </>
//     // </div>