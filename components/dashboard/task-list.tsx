// // "use client"

// // import { useState, useEffect } from "react"
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Checkbox } from "@/components/ui/checkbox"
// // import { MoreHorizontal, Clock, Plus } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { cn } from "@/lib/utils"
// // import axios from "@/lib/api"
// // import { Dispatch, SetStateAction } from "react";


// // type Task = {
// //   id: string
// //   title: string
// //   time: string
// //   completed: boolean
// //   category: string
// // }

// // const initialTasks: Task[] = [
// //   {
// //     id: "1",
// //     title: "Review Data Structures notes",
// //     time: "9:00 AM",
// //     completed: false,
// //     category: "Study",
// //   },
// //   {
// //     id: "2",
// //     title: "Complete LeetCode daily challenge",
// //     time: "10:30 AM",
// //     completed: true,
// //     category: "Practice",
// //   },
// //   {
// //     id: "3",
// //     title: "Watch System Design video",
// //     time: "2:00 PM",
// //     completed: false,
// //     category: "Learning",
// //   },
// //   {
// //     id: "4",
// //     title: "Work on portfolio project",
// //     time: "4:00 PM",
// //     completed: false,
// //     category: "Project",
// //   },
// //   {
// //     id: "5",
// //     title: "Review interview prep materials",
// //     time: "6:00 PM",
// //     completed: false,
// //     category: "Career",
// //   },
// // ]

// // interface Task {
// //   _id: string;
// //   title: string;
// //   priority: "low" | "medium" | "high";
// //   type: string;
// //   category?: string;
// // }


// // interface TaskListProps {
// //   tasks: Task[];
// //   setTasks?: (tasks: Task[]) => void;
// // }

// // // export function TaskList() {
// // export function TaskList({ tasks }: { tasks: any[] }) {
// //   // const [tasks, setTasks] = useState(initialTasks)

// //   // const toggleTask = (id: string) => {
// //   //   setTasks(
// //   //     tasks.map((task) =>
// //   //       task.id === id ? { ...task, completed: !task.completed } : task
// //   //     )
// //   //   )
// //   // }

// //   // const toggleTask = async (id: string) => {
// //   //   await axios.put(`/tasks/${id}`, {
// //   //     completed: true // or toggle logic
// //   //   })
// //   // }

// //   const [localTasks, setLocalTasks] = useState<any[]>([])

// //   useEffect(() => {
// //     // ✅ safety: always array bana do
// //     if (Array.isArray(tasks)) {
// //       setLocalTasks(tasks)
// //     } else {
// //       setLocalTasks([])
// //     }
// //   }, [tasks])

// //   const toggleTask = (id: string) => {
// //     setLocalTasks((prev) =>
// //       prev.map((task) =>
// //         task._id === id ? { ...task, completed: !task.completed } : task
// //       )
// //     )
// //   }

// //   const completedCount = tasks.filter((t) => t.completed).length

// //   return (
// //     <Card className="border-border bg-card shadow-sm">
// //       <CardHeader className="flex flex-row items-center justify-between pb-2">
// //         <div>
// //           <CardTitle className="text-base font-semibold text-card-foreground">
// //             {"Today's Tasks"}
// //           </CardTitle>
// //           <p className="text-xs text-muted-foreground">
// //             {completedCount} of {tasks.length} completed
// //           </p>
// //         </div>
// //         <Button variant="ghost" size="icon" className="h-8 w-8">
// //           <Plus className="h-4 w-4 text-muted-foreground" />
// //         </Button>
// //       </CardHeader>
// //       <CardContent className="px-4 pb-4 h-100 overflow-y-auto scroll-smooth">
// //         <div className="space-y-2">
// //           {localTasks.map((task) => (
// //             <div key={task._id}>
// //               <div
// //                 key={task.id}
// //                 className={cn(
// //                   "flex items-center gap-3 rounded-lg border border-border p-3 transition-colors",
// //                   task.completed && "bg-muted/50"
// //                 )}
// //               >
// //                 <Checkbox
// //                   checked={task.completed}
// //                   onCheckedChange={() => toggleTask(task.id)}
// //                   className="h-5 w-5 rounded-full border-2"
// //                 />
// //                 <div className="flex-1 min-w-0">
// //                   <p
// //                     className={cn(
// //                       "text-sm font-medium truncate text-card-foreground",
// //                       task.completed && "line-through text-muted-foreground"
// //                     )}
// //                   >
// //                     {task.title}
// //                   </p>
// //                   <div className="flex items-center gap-2 mt-0.5">
// //                     <Clock className="h-3 w-3 text-muted-foreground" />
// //                     <span className="text-xs text-muted-foreground">
// //                       {task.time}
// //                     </span>
// //                     <span className="text-xs text-primary">{task.category}</span>
// //                   </div>
// //                 </div>
// //                 <Button
// //                   variant="ghost"
// //                   size="icon"
// //                   className="h-7 w-7 opacity-0 group-hover:opacity-100"
// //                 >
// //                   <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
// //                 </Button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </CardContent>
// //     </Card>
// //   )
// // }

// "use client"

// import { useEffect, useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
// import { MoreHorizontal, Clock, Plus } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"

// export interface Task {
//   _id: string
//   title: string
//   completed: boolean
//   time?: string
//   category?: string
//   type?: string
//   priority?: "low" | "medium" | "high"
// }

// interface TaskListProps {
//   tasks: Task[]
//   setTasks?: (tasks: Task[]) => void
// }

// export function TaskList({ tasks, setTasks }: TaskListProps) {
//   const [localTasks, setLocalTasks] = useState<Task[]>([])

//   useEffect(() => {
//     setLocalTasks(Array.isArray(tasks) ? tasks : [])
//   }, [tasks])

//   const toggleTask = (id: string) => {
//     // Update local state
//     setLocalTasks(prev =>
//       prev.map(task =>
//         task._id === id ? { ...task, completed: !task.completed } : task
//       )
//     )
//     // Update parent state if setTasks exists
//     if (setTasks) {
//       setTasks(
//         tasks.map(task =>
//           task._id === id ? { ...task, completed: !task.completed } : task
//         )
//       )
//     }
//   }

//   const completedCount = tasks.filter(t => t.completed).length

//   return (
//     <Card className="border-border bg-card shadow-sm">
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <div>
//           <CardTitle className="text-base font-semibold text-card-foreground">
//             {"Today's Tasks"}
//           </CardTitle>
//           <p className="text-xs text-muted-foreground">
//             {completedCount} of {tasks.length} completed
//           </p>
//         </div>
//         <Button variant="ghost" size="icon" className="h-8 w-8">
//           <Plus className="h-4 w-4 text-muted-foreground" />
//         </Button>
//       </CardHeader>
//       <CardContent className="px-4 pb-4 h-100 overflow-y-auto scroll-smooth">
//         <div className="space-y-2">
//           {localTasks.map(task => (
//             <div key={task._id}>
//               <div
//                 className={cn(
//                   "group flex items-center gap-3 rounded-lg border border-border p-3 transition-colors",
//                   task.completed && "bg-muted/50"
//                 )}
//               >
//                 <Checkbox
//                   checked={task.completed}
//                   onCheckedChange={() => toggleTask(task._id)}
//                   className="h-5 w-5 rounded-full border-2"
//                 />
//                 <div className="flex-1 min-w-0">
//                   <p
//                     className={cn(
//                       "text-sm font-medium truncate text-card-foreground",
//                       task.completed && "line-through text-muted-foreground"
//                     )}
//                   >
//                     {task.title}
//                   </p>
//                   <div className="flex items-center gap-2 mt-0.5">
//                     {task.time && (
//                       <>
//                         <Clock className="h-3 w-3 text-muted-foreground" />
//                         <span className="text-xs text-muted-foreground">{task.time}</span>
//                       </>
//                     )}
//                     {task.category && (
//                       <span className="text-xs text-primary">{task.category}</span>
//                     )}
//                   </div>
//                 </div>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="h-7 w-7 opacity-0 group-hover:opacity-100"
//                 >
//                   <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }



// "use client"

// import { useEffect, useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
// import { MoreHorizontal, Clock, Plus, Edit2, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { cn } from "@/lib/utils"

// export interface Task {
//   _id: string
//   title: string
//   completed: boolean
//   time?: string
//   category?: string
//   type?: string
//   priority?: "low" | "medium" | "high"
// }

// interface TaskListProps {
//   tasks: Task[]
//   setTasks?: (tasks: Task[]) => void
// }

// export function TaskList({ tasks, setTasks }: TaskListProps) {
//   const [localTasks, setLocalTasks] = useState<Task[]>([])
//   const [editingId, setEditingId] = useState<string | null>(null)
//   const [editText, setEditText] = useState<string>("")

//   useEffect(() => {
//     setLocalTasks(Array.isArray(tasks) ? tasks : [])
//   }, [tasks])

//   // Toggle complete
//   const toggleTask = (id: string) => {
//     const updated = localTasks.map(task =>
//       task._id === id ? { ...task, completed: !task.completed } : task
//     )
//     setLocalTasks(updated)
//     setTasks?.(updated)
//   }

//   // Delete task
//   const deleteTask = (id: string) => {
//     const updated = localTasks.filter(task => task._id !== id)
//     setLocalTasks(updated)
//     setTasks?.(updated)
//   }

//   // Add new task
//   const addTask = () => {
//     const newTask: Task = {
//       _id: crypto.randomUUID(),
//       title: "New Task",
//       completed: false,
//     }
//     const updated = [...localTasks, newTask]
//     setLocalTasks(updated)
//     setTasks?.(updated)
//     setEditingId(newTask._id)
//     setEditText(newTask.title)
//   }

//   // Start editing
//   const startEdit = (task: Task) => {
//     setEditingId(task._id)
//     setEditText(task.title)
//   }

//   // Save edited title
//   const saveEdit = (id: string) => {
//     const updated = localTasks.map(task =>
//       task._id === id ? { ...task, title: editText } : task
//     )
//     setLocalTasks(updated)
//     setTasks?.(updated)
//     setEditingId(null)
//     setEditText("")
//   }

//   const completedCount = localTasks.filter(t => t.completed).length

//   return (
//     <Card className="border-border bg-card shadow-sm">
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <div>
//           <CardTitle className="text-base font-semibold text-card-foreground">
//             {"Today's Tasks"}
//           </CardTitle>
//           <p className="text-xs text-muted-foreground">
//             {completedCount} of {localTasks.length} completed
//           </p>
//         </div>
//         <Button variant="ghost" size="icon" className="h-8 w-8" onClick={addTask}>
//           <Plus className="h-4 w-4 text-muted-foreground" />
//         </Button>
//       </CardHeader>
//       <CardContent className="px-4 pb-4 h-100 overflow-y-auto scroll-smooth">
//         <div className="space-y-2">
//           {localTasks.map(task => (
//             <div key={task._id}>
//               <div
//                 className={cn(
//                   "group flex items-center gap-3 rounded-lg border border-border p-3 transition-colors",
//                   task.completed && "bg-muted/50"
//                 )}
//               >
//                 <Checkbox
//                   checked={task.completed}
//                   onCheckedChange={() => toggleTask(task._id)}
//                   className="h-5 w-5 rounded-full border-2"
//                 />
//                 <div className="flex-1 min-w-0">
//                   {editingId === task._id ? (
//                     <div className="flex gap-2">
//                       <Input
//                         value={editText}
//                         onChange={e => setEditText(e.target.value)}
//                         className="text-sm"
//                         autoFocus
//                         onKeyDown={e => {
//                           if (e.key === "Enter") saveEdit(task._id)
//                           if (e.key === "Escape") setEditingId(null)
//                         }}
//                       />
//                       <Button size="sm" onClick={() => saveEdit(task._id)}>
//                         Save
//                       </Button>
//                     </div>
//                   ) : (
//                     <p
//                       className={cn(
//                         "text-sm font-medium truncate text-card-foreground",
//                         task.completed && "line-through text-muted-foreground"
//                       )}
//                     >
//                       {task.title}
//                     </p>
//                   )}
//                   <div className="flex items-center gap-2 mt-0.5">
//                     {task.time && (
//                       <>
//                         <Clock className="h-3 w-3 text-muted-foreground" />
//                         <span className="text-xs text-muted-foreground">{task.time}</span>
//                       </>
//                     )}
//                     {task.category && (
//                       <span className="text-xs text-primary">{task.category}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex gap-1">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-7 w-7 opacity-0 group-hover:opacity-100"
//                     onClick={() => startEdit(task)}
//                   >
//                     <Edit2 className="h-4 w-4 text-muted-foreground" />
//                   </Button>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-7 w-7 opacity-0 group-hover:opacity-100 text-red-500"
//                     onClick={() => deleteTask(task._id)}
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


// "use client"

// import { useEffect, useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
// import { MoreHorizontal, Clock, Plus, Edit2, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { cn } from "@/lib/utils"
// import { Task } from "@/components/dashboard/types"

// // export interface Task {
// //   _id: string
// //   title: string
// //   completed: boolean
// //   time?: string
// //   category?: string
// //   type?: string
// //   priority?: "low" | "medium" | "high"
// // }

// interface TaskListProps {
//   tasks: Task[]
//   setTasks?: (tasks: Task[]) => void
// }

// export function TaskList({ tasks, setTasks }: TaskListProps) {
//   const [localTasks, setLocalTasks] = useState<Task[]>([])
//   const [editingId, setEditingId] = useState<string | null>(null)
//   const [editText, setEditText] = useState<string>("")

//   // ✅ Sync with parent tasks safely
//   useEffect(() => {
//     setLocalTasks(Array.isArray(tasks) ? tasks : [])
//   }, [tasks])

//   // Toggle complete
//   const toggleTask = (id: string) => {
//     const updated = localTasks.map(task =>
//       task._id === id ? { ...task, completed: !task.completed } : task
//     )
//     setLocalTasks(updated)
//     setTasks?.(updated)
//   }

//   // Delete task
//   const deleteTask = (id: string) => {
//     const updated = localTasks.filter(task => task._id !== id)
//     setLocalTasks(updated)
//     setTasks?.(updated)
//   }

//   // Add new task
//   const addTask = () => {
//     const newTask: Task = {
//       _id: crypto.randomUUID(),
//       title: "New Task",
//       completed: false,
//     }
//     const updated = [...localTasks, newTask]
//     setLocalTasks(updated)
//     setTasks?.(updated)
//     setEditingId(newTask._id)
//     setEditText(newTask.title)
//   }

//   // Start editing
//   const startEdit = (task: Task) => {
//     setEditingId(task._id)
//     setEditText(task.title)
//   }

//   // Save edited title
//   const saveEdit = (id: string) => {
//     const updated = localTasks.map(task =>
//       task._id === id ? { ...task, title: editText } : task
//     )
//     setLocalTasks(updated)
//     setTasks?.(updated)
//     setEditingId(null)
//     setEditText("")
//   }

//   const completedCount = localTasks.filter(t => t.completed).length

//   return (
//     <Card className="border-border bg-card shadow-sm">
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <div>
//           <CardTitle className="text-base font-semibold text-card-foreground">
//             {"Today's Tasks"}
//           </CardTitle>
//           <p className="text-xs text-muted-foreground">
//             {completedCount} of {localTasks.length} completed
//           </p>
//         </div>
//         <Button variant="ghost" size="icon" className="h-8 w-8" onClick={addTask}>
//           <Plus className="h-4 w-4 text-muted-foreground" />
//         </Button>
//       </CardHeader>
//       <CardContent className="px-4 pb-4 h-100 overflow-y-auto scroll-smooth">
//         <div className="space-y-2">
//           {localTasks.map(task => (
//             <div key={task._id}>
//               <div
//                 className={cn(
//                   "group flex items-center gap-3 rounded-lg border border-border p-3 transition-colors",
//                   task.completed && "bg-muted/50"
//                 )}
//               >
//                 <Checkbox
//                   checked={task.completed}
//                   onCheckedChange={() => toggleTask(task._id)}
//                   className="h-5 w-5 rounded-full border-2"
//                 />
//                 <div className="flex-1 min-w-0">
//                   {editingId === task._id ? (
//                     <div className="flex gap-2">
//                       <Input
//                         value={editText}
//                         onChange={e => setEditText(e.target.value)}
//                         className="text-sm"
//                         autoFocus
//                         onKeyDown={e => {
//                           if (e.key === "Enter") saveEdit(task._id)
//                           if (e.key === "Escape") setEditingId(null)
//                         }}
//                       />
//                       <Button size="sm" onClick={() => saveEdit(task._id)}>Save</Button>
//                     </div>
//                   ) : (
//                     <p
//                       className={cn(
//                         "text-sm font-medium truncate text-card-foreground",
//                         task.completed && "line-through text-muted-foreground"
//                       )}
//                     >
//                       {task.title}
//                     </p>
//                   )}
//                   <div className="flex items-center gap-2 mt-0.5">
//                     {task.time && (
//                       <>
//                         <Clock className="h-3 w-3 text-muted-foreground" />
//                         <span className="text-xs text-muted-foreground">{task.time}</span>
//                       </>
//                     )}
//                     {task.category && (
//                       <span className="text-xs text-primary">{task.category}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex gap-1">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-7 w-7 opacity-0 group-hover:opacity-100"
//                     onClick={() => startEdit(task)}
//                   >
//                     <Edit2 className="h-4 w-4 text-muted-foreground" />
//                   </Button>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-7 w-7 opacity-0 group-hover:opacity-100 text-red-500"
//                     onClick={() => deleteTask(task._id)}
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// "use client"

// import { useEffect, useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
// import { MoreHorizontal, Clock, Plus, Edit2, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { cn } from "@/lib/utils"
// import { Task } from "./types"

// // ✅ Export Task type
// // export interface Task {
// //   _id: string
// //   title: string
// //   completed: boolean
// //   time?: string
// //   category?: string
// //   type?: string
// //   priority?: "low" | "medium" | "high"
// // }

// interface TaskListProps {
//   tasks: Task[]
//   onToggle: (id: string) => void
//   onDelete: (id: string) => void
//   onAdd: () => void
//   onEdit: (id: string, title: string) => void
// }

// export function TaskList({ tasks, onToggle, onDelete, onAdd, onEdit }: TaskListProps) {
//   // const [localTasks, setLocalTasks] = useState<Task[]>([])
//   console.log("TASK LIST COMPONENT LOADED")
//   console.log("PROPS TASKS:", tasks)
//   const localTasks = tasks?.filter(t => t.type === "daily") || []
//   // const localTasks = tasks || []
//   const [editingId, setEditingId] = useState<string | null>(null)
//   const [editText, setEditText] = useState<string>("")
//   console.log("LOCAL TASKS:", localTasks)
//   console.log("ALL TASKS:", tasks)
//   // useEffect(() => {
//   //   setLocalTasks(Array.isArray(tasks) ? tasks : [])
//   // }, [tasks])

//   // const toggleTask = (id: string) => {
//   //   const updated = localTasks.map(task =>
//   //     task._id === id ? { ...task, completed: !task.completed } : task
//   //   )
//   //   // setLocalTasks(updated)
//   //   setTasks?.(updated)
//   // }

//   // const deleteTask = (id: string) => {
//   //   const updated = localTasks.filter(task => task._id !== id)
//   //   // setLocalTasks(updated)
//   //   setTasks?.(updated)
//   // }

//   // const addTask = () => {
//   //   const newTask: Task = {
//   //     _id: crypto.randomUUID(),
//   //     title: "New Task",
//   //     completed: false,
//   //     type: "daily",
//   //     status: "daily", // default value
//   //     priority: "medium"
//   //   }

//   // const updated = [...(tasks || []), newTask]
//   // // setLocalTasks(updated)
//   // setTasks?.(updated)
//   // setEditingId(newTask._id)
//   // setEditText(newTask.title)


//   const startEdit = (task: Task) => {
//     setEditingId(task._id)
//     setEditText(task.title)
//   }

//   const saveEdit = (id: string) => {
//     onEdit(id, editText)
//     setEditingId(null)
//     setEditText("")
//   }

//   // const saveEdit = (id: string) => {
//   //   const updated = localTasks.map(task =>
//   //     task._id === id ? { ...task, title: editText } : task
//   //   )
//   //   // setLocalTasks(updated)
//   //   setTasks?.(updated)
//   //   setEditingId(null)
//   //   setEditText("")


//   const completedCount = localTasks.filter(t => t.completed).length

//   return (
//     <Card className="border-border bg-card shadow-sm">
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <div>
//           <CardTitle className="text-base font-semibold text-card-foreground">
//             {"Today's Tasks"}
//           </CardTitle>
//           <p className="text-xs text-muted-foreground">
//             {completedCount} of {localTasks.length} completed
//           </p>
//         </div>
//         {/* <Button variant="ghost" size="icon" className="h-8 w-8" onClick={addTask}> */}
//         <Button onClick={onAdd}>
//           <Plus className="h-4 w-4 text-muted-foreground" />
//         </Button>
//       </CardHeader>
//       <CardContent className="px-4 pb-4 h-[400px] overflow-y-auto scroll-smooth">
//         <div className="space-y-2">
//           {localTasks.map(task => (
//             <div key={task._id}>
//               <div
//                 className={cn(
//                   "group flex items-center gap-3 rounded-lg border border-border p-3 transition-colors",
//                   task.completed && "bg-muted/50"
//                 )}

//               >
//                 <Checkbox
//                   checked={task.completed}
//                   onCheckedChange={() => onToggle(task._id)}
//                 />
//                 <div className="flex-1 min-w-0">
//                   {editingId === task._id ? (
//                     <div className="flex gap-2">
//                       <Input
//                         value={editText}
//                         onChange={e => setEditText(e.target.value)}
//                         className="text-sm"
//                         autoFocus
//                         onKeyDown={e => {
//                           if (e.key === "Enter") saveEdit(task._id)
//                           if (e.key === "Escape") setEditingId(null)
//                         }}
//                       />
//                       <Button size="sm" onClick={() => saveEdit(task._id)}>
//                         Save
//                       </Button>
//                     </div>
//                   ) : (
//                     <p
//                       className={cn(
//                         "text-sm font-medium truncate text-card-foreground",
//                         task.completed && "line-through text-muted-foreground"
//                       )}
//                     >
//                       {task.title}
//                     </p>
//                   )}
//                   <div className="flex items-center gap-2 mt-0.5">
//                     {task.time && (
//                       <>
//                         <Clock className="h-3 w-3 text-muted-foreground" />
//                         <span className="text-xs text-muted-foreground">{task.time}</span>
//                       </>
//                     )}
//                     {task.category && (
//                       <span className="text-xs text-primary">{task.category}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex gap-1">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-7 w-7 opacity-0 group-hover:opacity-100"
//                     onClick={() => startEdit(task)}
//                   >
//                     <Edit2 className="h-4 w-4 text-muted-foreground" />
//                   </Button>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-7 w-7 opacity-0 group-hover:opacity-100 text-red-500"
//                     onClick={() => onDelete(task._id)}
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Edit2, Trash2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Task } from "@/components/dashboard/types"


interface TaskListProps {
  tasks: Task[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onAdd: () => void
  onEdit: (id: string, title: string) => void
}

export function TaskList({ tasks, onToggle, onDelete, onAdd, onEdit }: TaskListProps) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState<string>("")

  const today = new Date().toDateString()

  const localTasks = tasks.filter(
    task =>
      task.type === "daily" &&
      task.dueDate &&
      new Date(task.dueDate).toDateString() === today
  )
  const completedCount = localTasks.filter(t => t.completed).length

  const startEdit = (task: Task) => {
    setEditingId(task._id)
    setEditText(task.title)
  }

  const saveEdit = (id: string) => {
    onEdit(id, editText)
    setEditingId(null)
    setEditText("")
  }

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="flex items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-semibold text-card-foreground">
            Today's Tasks
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            {completedCount} of {localTasks.length} completed
          </p>
        </div>
        <Button onClick={onAdd}>
          <Plus className="h-4 w-4 text-muted-foreground" />
        </Button>
      </CardHeader>

      <CardContent className="px-4 pb-4 h-100 overflow-y-auto scroll-smooth">
        <div className="space-y-2">
          {localTasks.map(task => (
            <div key={task._id}>
              <div
                className={cn(
                  "group flex items-center gap-3 rounded-lg border border-border p-3 transition-colors",
                  task.completed && "bg-muted/50"
                )}
              >
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => onToggle(task._id)}
                />
                <div className="flex-1 min-w-0">
                  {editingId === task._id ? (
                    <div className="flex gap-2">
                      <Input
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                        className="text-sm"
                        autoFocus
                        onKeyDown={e => {
                          if (e.key === "Enter") saveEdit(task._id)
                          if (e.key === "Escape") setEditingId(null)
                        }}
                      />
                      <Button size="sm" onClick={() => saveEdit(task._id)}>
                        Save
                      </Button>
                    </div>
                  ) : (
                    <p
                      className={cn(
                        "text-sm font-medium truncate text-card-foreground",
                        task.completed && "line-through text-muted-foreground"
                      )}
                    >
                      {task.title}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-0.5">
                    {task.time && (
                      <>
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{task.time}</span>
                      </>
                    )}
                    {task.category && (
                      <span className="text-xs text-primary">{task.category}</span>
                    )}
                  </div>
                </div>

                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 opacity-0 group-hover:opacity-100"
                    onClick={() => startEdit(task)}
                  >
                    <Edit2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 opacity-0 group-hover:opacity-100 text-red-500"
                    onClick={() => onDelete(task._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}