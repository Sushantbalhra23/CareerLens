// "use client"
// type Task = {
//   _id: string;
//   title: string;
//   status: string;
//   priority: string;
//   tags?: string[];
// };

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Plus, MoreHorizontal, GripVertical } from "lucide-react"
// import { cn } from "@/lib/utils"

// import { useEffect, useState } from "react";
// import API from "@/lib/api";


// const [tasks, setTasks] = useState<Task[]>([]);

// const columns = [
//   { id: "todo", title: "To Do", color: "bg-chart-2/20" },
//   { id: "doing", title: "In Progress", color: "bg-primary/20" },
//   { id: "done", title: "Completed", color: "bg-chart-1/20" },
// ];


// const priorityColors = {
//   high: "bg-destructive/10 text-destructive border-destructive/20",
//   medium: "bg-chart-4/10 text-chart-4 border-chart-4/20",
//   low: "bg-chart-1/10 text-chart-1 border-chart-1/20",
// }



// export default function KanbanPage() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const res = await API.get("/tasks");
//       setTasks(res.data);
//     };

//     fetchTasks();
//   }, []);

//   const getTasksByStatus = (status: string) => {
//     return tasks.filter((t) => t.status === status);
//   };


//   const addTask = async () => {
//     const res = await API.post("/tasks", {
//       title: "New Task",
//       status: "todo",
//       priority: "medium"
//     });

//     setTasks(prev => [...prev, res.data]);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold text-foreground">Kanban Goals</h1>
//           <p className="text-sm text-muted-foreground">
//             Track your career and learning goals visually
//           </p>
//         </div>
//         <Button className="gap-2" onClick={addTask}>
//           <Plus className="h-4 w-4" />
//           Add Goal
//         </Button>
//       </div>

//       <div className="flex gap-4 overflow-x-auto pb-4">
//         {columns.map((column) => (
//           <div key={column.id} className="shrink-0 w-72">
//             <Card className="border-border/50">
//               <CardHeader className="pb-3">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className={cn("h-2 w-2 rounded-full", column.color.replace("/20", ""))} />
//                     <CardTitle className="text-sm font-medium">
//                       {column.title}
//                     </CardTitle>
//                     <Badge variant="secondary" className="text-xs">
//                       {getTasksByStatus(column.id).length}
//                     </Badge>
//                   </div>
//                   <Button variant="ghost" size="icon" className="h-6 w-6">
//                     <MoreHorizontal className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 {getTasksByStatus(column.id).map((task: any) => (
//                   <div
//                     key={task._id}
//                     className="group rounded-lg border border-border bg-card p-3 shadow-sm transition-shadow hover:shadow-md cursor-grab"
//                   >
//                     <div className="flex items-start gap-2">
//                       <GripVertical className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
//                       <div className="flex-1 space-y-2">
//                         <p className="text-sm font-medium text-card-foreground">
//                           {task.title}
//                         </p>
//                         <div className="flex items-center gap-2">
//                           <Badge
//                             variant="outline"
//                             className={cn("text-xs", priorityColors[task.priority as keyof typeof priorityColors])}
//                           >
//                             {task.priority}
//                           </Badge>
//                           {task.tags?.map((tag: string) => (
//                             <Badge key={tag} variant="secondary" className="text-xs">
//                               {tag}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 <Button
//                   variant="ghost"
//                   className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <Plus className="h-4 w-4" />
//                   Add task
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


// "use client";

// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
// } from "@hello-pangea/dnd";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Plus, MoreHorizontal, GripVertical } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";
// import API from "@/lib/api";

// // ✅ Task type
// type Task = {
//   _id: string;
//   title: string;
//   status: string;
//   priority: string;
//   tags?: string[];
// };

// // ✅ Columns
// const columns = [
//   { id: "todo", title: "To Do", color: "bg-chart-2/20" },
//   { id: "doing", title: "In Progress", color: "bg-primary/20" },
//   { id: "done", title: "Completed", color: "bg-chart-1/20" },
// ];

// // ✅ Priority colors
// const priorityColors = {
//   high: "bg-destructive/10 text-destructive border-destructive/20",
//   medium: "bg-chart-4/10 text-chart-4 border-chart-4/20",
//   low: "bg-chart-1/10 text-chart-1 border-chart-1/20",
// };

// export default function KanbanPage() {
//   // ✅ Correct state
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [newTask, setNewTask] = useState("");

//   // ✅ Fetch tasks
//   useEffect(() => {
//     const fetchTasks = async () => {
//       const res = await API.get("/tasks");
//       setTasks(res.data);
//     };

//     fetchTasks();
//   }, []);

//   // ✅ Filter tasks
//   const getTasksByStatus = (status: string) => {
//     return tasks.filter((t) => t.status === status);
//   };

//   // ✅ Add task
//   const addTask = async (status: string) => {
//     if (!newTask) return;

//     const res = await API.post("/tasks", {
//       title: newTask,
//       status: status, // dynamic now 🔥
//       priority: "medium",
//     });

//     setTasks((prev) => [...prev, res.data]);
//     setNewTask("");
//   };

//   const handleDragEnd = async (result: any) => {
//     if (!result.destination) return;

//     const taskId = result.draggableId;
//     const newStatus = result.destination.droppableId;

//     // update in DB
//     await API.put(`/tasks/${taskId}`, {
//       status: newStatus,
//     });

//     // update UI instantly
//     setTasks((prev) =>
//       prev.map((task) =>
//         task._id === taskId ? { ...task, status: newStatus } : task
//       )
//     );
//   };
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold text-foreground">
//             Kanban Goals
//           </h1>
//           <p className="text-sm text-muted-foreground">
//             Track your career and learning goals visually
//           </p>
//         </div>

//         <Button className="gap-2" onClick={() => addTask("todo")}>
//           <Plus className="h-4 w-4" />
//           Add Goal
//         </Button>
//       </div>

//       {/* ✅ CORRECT WRAP */}
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <div className="flex gap-4 overflow-x-auto pb-4">
//           {columns.map((column) => (
//             <Droppable droppableId={column.id} key={column.id}>
//               {(provided) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                   className="shrink-0 w-72"
//                 >
//                   <Card className="border-border/50">
//                     <CardHeader className="pb-3">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div
//                             className={cn(
//                               "h-2 w-2 rounded-full",
//                               column.color.replace("/20", "")
//                             )}
//                           />
//                           <CardTitle className="text-sm font-medium">
//                             {column.title}
//                           </CardTitle>

//                           <Badge variant="secondary" className="text-xs">
//                             {getTasksByStatus(column.id).length}
//                           </Badge>
//                         </div>

//                         <Button variant="ghost" size="icon" className="h-6 w-6">
//                           <MoreHorizontal className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </CardHeader>

//                     <CardContent className="space-y-2">
//                       {getTasksByStatus(column.id).map((task, index) => (
//                         <Draggable
//                           key={task._id}
//                           draggableId={task._id}
//                           index={index}
//                         >
//                           {(provided) => (
//                             <div
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               className="group rounded-lg border border-border bg-card p-3 shadow-sm hover:shadow-md cursor-grab"
//                             >
//                               <p className="text-sm font-medium">
//                                 {task.title}
//                               </p>
//                             </div>
//                           )}
//                         </Draggable>
//                       ))}

//                       {/* 🔥 REQUIRED */}
//                       {provided.placeholder}

//                       <Button
//                         onClick={() => addTask(column.id)}
//                         variant="ghost"
//                         className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
//                       >
//                         <Plus className="h-4 w-4" />
//                         Add task
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </div>
//       </DragDropContext>
//     </div>
//   );
// }



// "use client";

// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
// } from "@hello-pangea/dnd";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Plus, Trash2 } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";
// import API from "@/lib/api";

// // ✅ Task type (important for TS)
// type Task = {
//   _id: string;
//   title: string;
//   status: string;
//   skill: String;
//   priority: string;
//   tags?: string[];
// };

// // ✅ Columns config
// const columns = [
//   { id: "backlog", title: "Backlog", color: "bg-muted/40" },       // 🆕
//   { id: "todo", title: "To Do", color: "bg-chart-2/20" },
//   { id: "doing", title: "In Progress", color: "bg-primary/20" },
//   { id: "review", title: "Review", color: "bg-yellow-200/40" },    // 🆕
//   { id: "done", title: "Completed", color: "bg-chart-1/20" },
// ];

// // ✅ Priority colors
// const priorityColors = {
//   high: "bg-destructive/10 text-destructive border-destructive/20",
//   medium: "bg-chart-4/10 text-chart-4 border-chart-4/20",
//   low: "bg-chart-1/10 text-chart-1 border-chart-1/20",
// };

// export default function KanbanPage() {
//   // ✅ STATE
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [newTask, setNewTask] = useState("");
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editText, setEditText] = useState("");

//   // const updateTask = async (id: string) => {
//   //   if (!editText.trim()) return;

//   //   const res = await API.put(`/tasks/${id}`, {
//   //     title: editText,
//   //   });

//   //   setTasks((prev) =>
//   //     prev.map((task) =>
//   //       task._id === id ? { ...task, title: res.data.title } : task
//   //     )
//   //   );

//   //   setEditingId(null);
//   //   setEditText("");
//   // };

//   const updateTask = async (id: string) => {
//     try {
//       const updatedTitle = editText.trim();

//       if (!updatedTitle) {
//         setEditingId(null);
//         return;
//       }

//       // 🔥 Update DB
//       await API.put(`/tasks/${id}`, {
//         title: updatedTitle,
//       });

//       // 🔥 Update UI manually (IMPORTANT)
//       setTasks((prev) =>
//         prev.map((task) =>
//           task._id === id ? { ...task, title: updatedTitle } : task
//         )
//       );

//       setEditingId(null);
//       setEditText("");
//     } catch (err) {
//       console.error("UPDATE ERROR:", err);
//     }
//   };

//   // ✅ FETCH TASKS FROM BACKEND
//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const res = await API.get("/tasks");

//         // ✅ Ensure it's always an array
//         const tasksArray = Array.isArray(res.data) ? res.data : [];
//         setTasks(tasksArray);
//       } catch (err) {
//         console.error("FETCH TASKS ERROR:", err);
//         setTasks([]); // fallback to empty array
//       }
//     };

//     fetchTasks();
//   }, []);

//   // ✅ FILTER TASKS BY COLUMN
//   const getTasksByStatus = (status: string) => {
//     // ✅ Only filter if tasks is an array, otherwise return empty array
//     return Array.isArray(tasks) ? tasks.filter((t) => t.status === status) : [];
//   };

//   // ✅ ADD TASK (dynamic column)
//   const addTask = async (status: string) => {
//     try {
//       console.log("Adding task...");

//       const res = await API.post("/tasks", {
//         title: "New Task",
//         status: status,
//         priority: "medium",
//       });

//       console.log("Response:", res.data);

//       setTasks((prev) => [...prev, res.data]);
//     } catch (err) {
//       console.error("ADD ERROR:", err);
//     }
//   };
//   // ✅ DELETE TASK
//   const deleteTask = async (id: string) => {
//     await API.delete(`/tasks/${id}`);
//     setTasks((prev) => prev.filter((task) => task._id !== id));
//   };


//   //  SET PRIORITY
//   const updatePriority = async (id: string, priority: string) => {
//     await API.put(`/tasks/${id}`, { priority });

//     setTasks((prev) =>
//       prev.map((task) =>
//         task._id === id ? { ...task, priority } : task
//       )
//     );
//   };

//   // ✅ DRAG HANDLER
//   const handleDragEnd = async (result: any) => {
//     if (!result.destination) return;

//     const taskId = result.draggableId;
//     const newStatus = result.destination.droppableId;
//     console.log("SENDING:", taskId, newStatus);
//     // update DB
//     await API.put(`/tasks/${taskId}`, {
//       status: newStatus,
//     });

//     // update UI
//     setTasks((prev) =>
//       prev.map((task) =>
//         task._id === taskId ? { ...task, status: newStatus } : task
//       )
//     );
//   };

//   return (
//     <div className="space-y-6">
//       {/* 🔥 HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold">Kanban Goals</h1>
//           <p className="text-sm text-muted-foreground">
//             Track your goals visually
//           </p>
//         </div>

//         {/* ✅ INPUT + ADD BUTTON */}
//         <div className="flex gap-2">
//           <input
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//             placeholder="Enter task..."
//             className="border px-3 py-2 rounded-md text-sm"
//           />

//           <Button onClick={() => addTask("backlog")}>
//             <Plus className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       {/* 🔥 DRAG CONTEXT */}
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <div className="flex gap-4 overflow-x-auto pb-4">
//           {columns.map((column) => (
//             <Droppable droppableId={column.id} key={column.id}>
//               {(provided) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                   className="w-72 shrink-0"
//                 >
//                   <Card>
//                     {/* 🔹 COLUMN HEADER */}
//                     <CardHeader>
//                       <div className="flex justify-between items-center">
//                         <CardTitle>{column.title}</CardTitle>
//                         <Badge>
//                           {getTasksByStatus(column.id).length}
//                         </Badge>
//                       </div>
//                     </CardHeader>

//                     {/* 🔹 TASK LIST */}
//                     <CardContent className="space-y-2">
//                       {getTasksByStatus(column.id).map((task, index) => (
//                         <Draggable
//                           key={task._id}
//                           draggableId={task._id}
//                           index={index}
//                         >
//                           {(provided) => (
//                             <div
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               className="p-3 border rounded-lg bg-card flex justify-between items-center"
//                             >
//                               {/* Task title */}
//                               {editingId === task._id ? (
//                                 // <input
//                                 //   value={editText}
//                                 //   onChange={(e) => setEditText(e.target.value)}
//                                 //   onKeyDown={(e) => {
//                                 //     if (e.key === "Enter") updateTask(task._id);
//                                 //   }}
//                                 //   className="w-full text-sm border rounded px-2 py-1"
//                                 //   autoFocus
//                                 // />
//                                 <input
//                                   value={editText}
//                                   onChange={(e) => setEditText(e.target.value)}
//                                   onKeyDown={(e) => {
//                                     if (e.key === "Enter") {
//                                       e.preventDefault();
//                                       updateTask(task._id);
//                                     }
//                                     if (e.key === "Escape") {
//                                       setEditingId(null);
//                                       setEditText("");
//                                     }
//                                   }}
//                                   onBlur={() => {
//                                     if (editingId === task._id) updateTask(task._id);
//                                   }}
//                                   className="w-full text-sm border rounded px-2 py-1"
//                                   autoFocus
//                                 />
//                               ) : (
//                                 <p
//                                   className="text-sm font-medium cursor-pointer"
//                                   onClick={() => {
//                                     setEditingId(task._id);
//                                     setEditText(task.title);
//                                   }}
//                                 >
//                                   {task.title}
//                                 </p>
//                               )}
//                               <select
//                                 value={task.priority || "medium"}
//                                 onChange={(e) => updatePriority(task._id, e.target.value)}
//                                 className="text-xs border rounded px-1 py-0.5"
//                               >
//                                 <option value="low">Low</option>
//                                 <option value="medium">Medium</option>
//                                 <option value="high">High</option>
//                               </select>

//                               {/* Delete button */}
//                               <button
//                                 onClick={() => deleteTask(task._id)}
//                                 className="text-red-500"
//                               >
//                                 <Trash2 size={16} />
//                               </button>
//                             </div>
//                           )}
//                         </Draggable>
//                       ))}

//                       {/* REQUIRED for drag */}
//                       {provided.placeholder}

//                       {/* Add task to specific column */}
//                       <Button onClick={() => {
//                         console.log("CLICKED", column.id);
//                         addTask(column.id);
//                       }}>
//                         <Plus className="h-4 w-4" />
//                         Add task
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </div>
//       </DragDropContext>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2 } from "lucide-react";
import API from "@/lib/api";

// ✅ Task type
type Task = {
  _id: string;
  title: string;
  status: string;
  skill?: string;
  priority: "low" | "medium" | "high";
  tags?: string[];
};

// ✅ Columns config
const columns = [
  { id: "backlog", title: "Backlog", color: "bg-muted/40" },
  { id: "todo", title: "To Do", color: "bg-chart-2/20" },
  { id: "doing", title: "In Progress", color: "bg-primary/20" },
  { id: "review", title: "Review", color: "bg-yellow-200/40" },
  { id: "done", title: "Completed", color: "bg-chart-1/20" },
];

// ✅ Priority colors
const priorityColors = {
  high: "bg-destructive/10 text-destructive border-destructive/20",
  medium: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  low: "bg-chart-1/10 text-chart-1 border-chart-1/20",
};

export default function KanbanPage() {
  const [tasks, setTasks] = useState<Task[]>([]); // default empty array
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  // ✅ Fetch tasks safely
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await API.get("/tasks?type=kanban");
        // ✅ Ensure it's an array before setting
        setTasks(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("FETCH ERROR:", err);
        setTasks([]); // fallback
      }
    };
    fetchTasks();
  }, []);

  // ✅ Get tasks safely by column
  const getTasksByStatus = (status: string) => {
    // ✅ make sure tasks is an array before filter
    return Array.isArray(tasks) ? tasks.filter((t) => t.status === status) : [];
  };

  // ✅ Add task
  const addTask = async (status: string) => {
    try {
      const res = await API.post("/tasks", {
        title: "New Task",
        status,
        priority: "medium",
      });
      if (res.data) setTasks((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("ADD ERROR:", err);
    }
  };

  // ✅ Update task title
  const updateTask = async (id: string) => {
    try {
      const updatedTitle = editText.trim();
      if (!updatedTitle) {
        setEditingId(null);
        return;
      }
      await API.put(`/tasks/${id}`, { title: updatedTitle });
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? { ...task, title: updatedTitle } : task))
      );
      setEditingId(null);
      setEditText("");
    } catch (err) {
      console.error("UPDATE ERROR:", err);
    }
  };

  // ✅ Update priority
  const updatePriority = async (id: string, priority: string) => {
    try {
      await API.put(`/tasks/${id}`, { priority });
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? { ...task, priority: priority as Task["priority"] } : task))
      );
    } catch (err) {
      console.error("PRIORITY UPDATE ERROR:", err);
    }
  };

  // ✅ Delete task
  const deleteTask = async (id: string) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  // ✅ Drag handler
  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const taskId = result.draggableId;
    const newStatus = result.destination.droppableId;

    try {
      await API.put(`/tasks/${taskId}`, { status: newStatus });
      setTasks((prev) =>
        prev.map((task) => (task._id === taskId ? { ...task, status: newStatus } : task))
      );
    } catch (err) {
      console.error("DRAG ERROR:", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Kanban Goals</h1>
          <p className="text-sm text-muted-foreground">Track your goals visually</p>
        </div>

        {/* ADD TASK */}
        <div className="flex gap-2">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task..."
            className="border px-3 py-2 rounded-md text-sm"
          />
          <Button onClick={() => addTask("backlog")}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* DRAG AND DROP */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((column) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="w-72 shrink-0">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>{column.title}</CardTitle>
                        <Badge>{getTasksByStatus(column.id).length}</Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-2">
                      {getTasksByStatus(column.id).map((task, index) => (
                        <Draggable key={task._id} draggableId={task._id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="p-3 border rounded-lg bg-card flex justify-between items-center"
                            >
                              {/* Task title */}
                              {editingId === task._id ? (
                                <input
                                  value={editText}
                                  onChange={(e) => setEditText(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") updateTask(task._id);
                                    if (e.key === "Escape") {
                                      setEditingId(null);
                                      setEditText("");
                                    }
                                  }}
                                  onBlur={() => {
                                    if (editingId === task._id) updateTask(task._id);
                                  }}
                                  className="w-full text-sm border rounded px-2 py-1"
                                  autoFocus
                                />
                              ) : (
                                <p
                                  className="text-sm font-medium cursor-pointer"
                                  onClick={() => {
                                    setEditingId(task._id);
                                    setEditText(task.title);
                                  }}
                                >
                                  {task.title}
                                </p>
                              )}

                              {/* Priority */}
                              <select
                                value={task.priority || "medium"}
                                onChange={(e) => updatePriority(task._id, e.target.value)}
                                className="text-xs border rounded px-1 py-0.5"
                              >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                              </select>

                              {/* Delete */}
                              <button onClick={() => deleteTask(task._id)} className="text-red-500">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          )}
                        </Draggable>
                      ))}

                      {provided.placeholder}

                      {/* Add task to this column */}
                      <Button onClick={() => addTask(column.id)}>
                        <Plus className="h-4 w-4" />
                        Add task
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}