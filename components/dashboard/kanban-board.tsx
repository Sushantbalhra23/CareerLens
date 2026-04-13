// // // "use client"
// // // import { useState, useEffect } from "react"
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { Badge } from "@/components/ui/badge"
// // // import { MoreHorizontal, Plus } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import axios from "axios"

// // // type Task = {
// // //   _id: string
// // //   title: string
// // //   priority: "low" | "medium" | "high"
// // //   category: string
// // // }

// // // type Column = {
// // //   id: string
// // //   title: string
// // //   tasks: Task[]
// // //   color: string
// // // }

// // // // const columns: Column[] = [
// // // //   {
// // // //     id: "todo",
// // // //     title: "To Do",
// // // //     color: "bg-muted-foreground/20",
// // // //     tasks: [
// // // //       {
// // // //         id: "1",
// // // //         title: "Research internship opportunities",
// // // //         priority: "high",
// // // //         category: "Career",
// // // //       },
// // // //       {
// // // //         id: "2",
// // // //         title: "Complete Python course module 5",
// // // //         priority: "medium",
// // // //         category: "Learning",
// // // //       },
// // // //       {
// // // //         id: "3",
// // // //         title: "Update resume with new projects",
// // // //         priority: "low",
// // // //         category: "Career",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: "in-progress",
// // // //     title: "In Progress",
// // // //     color: "bg-primary/20",
// // // //     tasks: [
// // // //       {
// // // //         id: "4",
// // // //         title: "Build portfolio website",
// // // //         priority: "high",
// // // //         category: "Project",
// // // //       },
// // // //       {
// // // //         id: "5",
// // // //         title: "Practice DSA problems",
// // // //         priority: "medium",
// // // //         category: "Learning",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: "completed",
// // // //     title: "Completed",
// // // //     color: "bg-chart-4/30",
// // // //     tasks: [
// // // //       {
// // // //         id: "6",
// // // //         title: "Finish React fundamentals",
// // // //         priority: "medium",
// // // //         category: "Learning",
// // // //       },
// // // //       {
// // // //         id: "7",
// // // //         title: "Network at career fair",
// // // //         priority: "high",
// // // //         category: "Career",
// // // //       },
// // // //     ],
// // // //   },
// // // // ]



// // // const priorityColors = {
// // //   low: "bg-chart-3/20 text-chart-3",
// // //   medium: "bg-chart-2/20 text-chart-2",
// // //   high: "bg-destructive/20 text-destructive",
// // // }

// // // // export function KanbanBoard() {
// // // export function KanbanBoard({
// // //   tasks,
// // //   setTasks
// // // }: {
// // //   tasks: any[],
// // //   setTasks: any
// // // }) {
// // //   const [localTasks, setLocalTasks] = useState<any[]>([])

// // //   useEffect(() => {
// // //     if (Array.isArray(tasks)) {
// // //       setLocalTasks(tasks)
// // //     } else {
// // //       setLocalTasks([])
// // //     }
// // //   }, [tasks])


// // //   const columns: Column[] = [
// // //     {
// // //       id: "todo",
// // //       title: "To Do",
// // //       color: "bg-muted-foreground/20",
// // //       tasks: tasks.filter((t) => t.status === "todo"),
// // //     },
// // //     {
// // //       id: "doing",
// // //       title: "In Progress",
// // //       color: "bg-primary/20",
// // //       tasks: tasks.filter((t) => t.status === "doing"),
// // //     },
// // //     {
// // //       id: "done",
// // //       title: "Completed",
// // //       color: "bg-chart-4/30",
// // //       tasks: tasks.filter((t) => t.status === "done"),
// // //     },
// // //   ]

// // //   // const addTask = async (status: string) => {
// // //   //   try {
// // //   //     const res = await axios.post("/tasks", {
// // //   //       title: "New Task",
// // //   //       status,
// // //   //       priority: "medium",
// // //   //     })

// // //   //     // UI update
// // //   //     setLocalTasks((prev) => [...prev, res.data])
// // //   //   } catch (err) {
// // //   //     console.error(err)
// // //   //   }
// // //   // }

// // //   const deleteTask = async (id: string) => {
// // //     try {
// // //       await axios.delete(`/tasks/${id}`);

// // //       setLocalTasks((prev) => prev.filter((t) => t._id !== id));
// // //       setTasks((prev: any[]) => prev.filter((t) => t._id !== id));
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const toggleTask = async (id: string, completed: boolean) => {
// // //     const newStatus = completed ? "done" : "todo";
// // //     try {
// // //       await axios.put(`/tasks/${id}`, { status: newStatus });

// // //       setTasks((prev: any[]) =>
// // //         prev.map((t) => (t._id === id ? { ...t, status: newStatus } : t))
// // //       );
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const updateTaskStatus = async (id: string, status: string) => {
// // //     try {
// // //       await axios.put(`/tasks/${id}`, { status });

// // //       setTasks((prev: any[]) =>
// // //         prev.map((t) => (t._id === id ? { ...t, status } : t))
// // //       );
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const addTask = async (status: string) => {
// // //     try {
// // //       const res = await axios.post("http://localhost:5000/tasks", {
// // //         title: "New Task",
// // //         status,
// // //         priority: "medium",
// // //         type: "kanban"
// // //       });

// // //       setTasks((prev: any[]) => [...prev, res.data]);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   return (
// // //     <Card className="border-border bg-card shadow-sm">
// // //       <CardHeader className="flex flex-row items-center justify-between pb-2">
// // //         <CardTitle className="text-base font-semibold text-card-foreground">
// // //           Goal Board
// // //         </CardTitle>
// // //         <Button variant="ghost" size="icon" className="h-8 w-8">
// // //           <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
// // //         </Button>
// // //       </CardHeader>
// // //       <CardContent className="h-100 overflow-y-auto scroll-smooth">
// // //         <div className="grid grid-cols-3 gap-3">
// // //           {columns.map((column) => (
// // //             <div key={column.id} className="space-y-3">
// // //               <div className="flex items-center justify-between">
// // //                 <div className="flex items-center gap-2">
// // //                   <div className={`h-2 w-2 rounded-full ${column.color}`} />
// // //                   <span className="text-sm font-medium text-card-foreground">
// // //                     {column.title}
// // //                   </span>
// // //                   <Badge
// // //                     variant="secondary"
// // //                     className="h-5 px-1.5 text-xs text-muted-foreground"
// // //                   >
// // //                     {column.tasks.length}
// // //                   </Badge>
// // //                 </div>
// // //                 <Button
// // //                   variant="ghost"
// // //                   size="icon"
// // //                   className="h-6 w-6 text-muted-foreground"
// // //                   onClick={() => addTask(column.id)}
// // //                 >
// // //                   <Plus className="h-3.5 w-3.5" />
// // //                 </Button>
// // //               </div>
// // //               <div className="space-y-2">
// // //                 {column.tasks.map((task) => (
// // //                   <div
// // //                     key={task._id}
// // //                     className="group cursor-pointer rounded-lg border border-border bg-background p-3 transition-shadow hover:shadow-sm"
// // //                   >
// // //                     <p className="mb-2 text-sm font-medium text-card-foreground">
// // //                       {task.title}
// // //                     </p>
// // //                     <div className="flex items-center justify-between">
// // //                       <span
// // //                         className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColors[task.priority]}`}
// // //                       >
// // //                         {task.priority}
// // //                       </span>
// // //                       <span className="text-xs text-muted-foreground">
// // //                         {task.category}
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   )
// // // }












// // "use client"
// // import { useState } from "react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { MoreHorizontal, Plus } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import axios from "axios";
// // import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

// // type Task = {
// //   _id: string;
// //   title: string;
// //   priority: "low" | "medium" | "high";
// //   category: string;
// //   status: string;
// // };

// // type Column = {
// //   id: string;
// //   title: string;
// //   tasks: Task[];
// //   color: string;
// // };

// // const priorityColors = {
// //   low: "bg-chart-3/20 text-chart-3",
// //   medium: "bg-chart-2/20 text-chart-2",
// //   high: "bg-destructive/20 text-destructive",
// // };

// // export function KanbanBoard({
// //   tasks,
// //   setTasks
// // }: { tasks: Task[]; setTasks: (tasks: Task[]) => void }) {

// //   const addTask = async (status: string) => {
// //     const res = await axios.post("http://localhost:5000/tasks", {
// //       title: "New Task",
// //       status,
// //       priority: "medium",
// //       type: "kanban"
// //     });
// //     setTasks([...tasks, res.data]);
// //   };

// //   const columns: Column[] = [
// //     {
// //       id: "todo",
// //       title: "To Do",
// //       color: "bg-muted-foreground/20",
// //       tasks: tasks.filter((t) => t.status === "todo"),
// //     },
// //     {
// //       id: "doing",
// //       title: "In Progress",
// //       color: "bg-primary/20",
// //       tasks: tasks.filter((t) => t.status === "doing"),
// //     },
// //     {
// //       id: "done",
// //       title: "Completed",
// //       color: "bg-chart-4/30",
// //       tasks: tasks.filter((t) => t.status === "done"),
// //     },
// //   ];

// //   // const addTask = async (status: string) => {
// //   //   try {
// //   //     const res = await axios.post("http://localhost:5000/tasks", {
// //   //       title: "New Task",
// //   //       status,
// //   //       priority: "medium",
// //   //       type: "kanban",
// //   //     });
// //   //     setTasks([...tasks, res.data]);
// //   //   } catch (err) {
// //   //     console.error(err);
// //   //   }
// //   // };

// //   const updateTaskStatus = async (id: string, status: string) => {
// //     try {
// //       await axios.put(`http://localhost:5000/tasks/${id}`, { status });
// //       setTasks(tasks.map((t) => (t._id === id ? { ...t, status } : t)));
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const toggleTask = async (id: string, completed: boolean) => {
// //     const newStatus = completed ? "done" : "todo";
// //     await updateTaskStatus(id, newStatus);
// //   };

// //   const onDragEnd = async (result: DropResult) => {
// //     const { destination, source, draggableId } = result;
// //     if (!destination) return;
// //     if (
// //       destination.droppableId === source.droppableId &&
// //       destination.index === source.index
// //     )
// //       return;

// //     const draggedTask = tasks.find((t) => t._id === draggableId);
// //     if (!draggedTask) return;

// //     const newStatus = destination.droppableId;
// //     await updateTaskStatus(draggedTask._id, newStatus);
// //   };

// //   const deleteTask = async (id: string) => {
// //     try {
// //       await axios.delete(`http://localhost:5000/tasks/${id}`);
// //       setTasks(tasks.filter((t) => t._id !== id));
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <Card className="border-border bg-card shadow-sm">
// //       <CardHeader className="flex flex-row items-center justify-between pb-2">
// //         <CardTitle className="text-base font-semibold text-card-foreground">
// //           Goal Board
// //         </CardTitle>
// //         <Button variant="ghost" size="icon" className="h-8 w-8">
// //           <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
// //         </Button>
// //       </CardHeader>
// //       <CardContent className="h-100 overflow-y-auto scroll-smooth">
// //         <DragDropContext onDragEnd={onDragEnd}>
// //           <div className="grid grid-cols-3 gap-3">
// //             {columns.map((column) => (
// //               <Droppable droppableId={column.id} key={column.id}>
// //                 {(provided) => (
// //                   <div
// //                     {...provided.droppableProps}
// //                     ref={provided.innerRef}
// //                     className="space-y-3"
// //                   >
// //                     <div className="flex items-center justify-between">
// //                       <div className="flex items-center gap-2">
// //                         <div className={`h-2 w-2 rounded-full ${column.color}`} />
// //                         <span className="text-sm font-medium text-card-foreground">
// //                           {column.title}
// //                         </span>
// //                         <Badge
// //                           variant="secondary"
// //                           className="h-5 px-1.5 text-xs text-muted-foreground"
// //                         >
// //                           {column.tasks.length}
// //                         </Badge>
// //                       </div>
// //                       <Button
// //                         variant="ghost"
// //                         size="icon"
// //                         className="h-6 w-6 text-muted-foreground"
// //                         onClick={() => addTask(column.id)}
// //                       >
// //                         <Plus className="h-3.5 w-3.5" />
// //                       </Button>
// //                     </div>
// //                     <div className="space-y-2">
// //                       {column.tasks.map((task, index) => (
// //                         <Draggable
// //                           draggableId={task._id}
// //                           index={index}
// //                           key={task._id}
// //                         >
// //                           {(provided) => (
// //                             <div
// //                               {...provided.draggableProps}
// //                               {...provided.dragHandleProps}
// //                               ref={provided.innerRef}
// //                               className="group cursor-pointer rounded-lg border border-border bg-background p-3 transition-shadow hover:shadow-sm"
// //                             >
// //                               <p className="mb-2 text-sm font-medium text-card-foreground">
// //                                 {task.title}
// //                               </p>
// //                               <div className="flex items-center justify-between">
// //                                 <span
// //                                   className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColors[task.priority]}`}
// //                                 >
// //                                   {task.priority}
// //                                 </span>
// //                                 <span className="text-xs text-muted-foreground">
// //                                   {task.category}
// //                                 </span>
// //                                 <Button
// //                                   variant="ghost"
// //                                   size="icon"
// //                                   className="h-6 w-6 text-red-500"
// //                                   onClick={() => deleteTask(task._id)}
// //                                 >
// //                                   🗑️
// //                                 </Button>
// //                               </div>
// //                             </div>
// //                           )}
// //                         </Draggable>
// //                       ))}
// //                       {provided.placeholder}
// //                     </div>
// //                   </div>
// //                 )}
// //               </Droppable>
// //             ))}
// //           </div>
// //         </DragDropContext>
// //       </CardContent>
// //     </Card>
// //   );
// // }





// // final
// "use client"
// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { MoreHorizontal, Plus, Edit2, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

// type Task = {
//   _id: string;
//   title: string;
//   priority: "low" | "medium" | "high";
//   category: string;
//   status: string;
// };

// type Column = {
//   id: string;
//   title: string;
//   tasks: Task[];
//   color: string;
// };

// const priorityColors = {
//   low: "bg-chart-3/20 text-chart-3",
//   medium: "bg-chart-2/20 text-chart-2",
//   high: "bg-destructive/20 text-destructive",
// };

// export function KanbanBoard({
//   tasks,
//   setTasks
// }: { tasks: Task[]; setTasks: (tasks: Task[]) => void }) {

//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editText, setEditText] = useState<string>("");

//   const addTask = async (status: string) => {
//     try {
//       const res = await axios.post("http://localhost:5000/tasks", {
//         title: "New Task",
//         status,
//         priority: "medium",
//         category: "General",
//         type: "kanban"
//       });
//       const newTask: Task = res.data;
//       setTasks([...tasks, newTask]);
//       setEditingId(newTask._id);
//       setEditText(newTask.title);
//     } catch (err) {
//       console.error("Add Task Error:", err);
//     }
//   };

//   const updateTaskStatus = async (id: string, status: string) => {
//     try {
//       await axios.put(`http://localhost:5000/tasks/${id}`, { status });
//       setTasks(prev =>
//         prev.map((t) => (t._id === id ? { ...t, status } : t))
//       );
//     } catch (err) {
//       console.error("Update Status Error:", err);
//     }
//   };

//   const deleteTask = async (id: string) => {
//     try {
//       await axios.delete(`http://localhost:5000/tasks/${id}`);
//       setTasks(prev => prev.filter((t) => t._id !== id));
//     } catch (err) {
//       console.error("Delete Task Error:", err);
//     }
//   };

//   const saveEdit = async (id: string) => {
//     try {
//       await axios.put(`http://localhost:5000/tasks/${id}`, { title: editText });
//       setTasks(prev => prev.map((t) => (t._id === id ? { ...t, title: editText } : t)));
//       setEditingId(null);
//       setEditText("");
//     } catch (err) {
//       console.error("Save Edit Error:", err);
//     }
//   };

//   const onDragEnd = async (result: DropResult) => {
//     const { destination, source, draggableId } = result;
//     if (!destination) return;
//     if (destination.droppableId === source.droppableId && destination.index === source.index)
//       return;

//     const draggedTask = tasks.find((t) => t._id === draggableId);
//     if (!draggedTask) return;

//     const newStatus = destination.droppableId;
//     await updateTaskStatus(draggedTask._id, newStatus);
//   };

//   // ✅ Safe columns creation
//   const columns: Column[] = [
//     {
//       id: "todo",
//       title: "To Do",
//       color: "bg-muted-foreground/20",
//       tasks: Array.isArray(tasks) ? tasks.filter(t => t.status === "todo") : [],
//     },
//     {
//       id: "doing",
//       title: "In Progress",
//       color: "bg-primary/20",
//       tasks: Array.isArray(tasks) ? tasks.filter(t => t.status === "doing") : [],
//     },
//     {
//       id: "done",
//       title: "Completed",
//       color: "bg-chart-4/30",
//       tasks: Array.isArray(tasks) ? tasks.filter(t => t.status === "done") : [],
//     },
//   ];

//   return (
//     <Card className="border-border bg-card shadow-sm">
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <CardTitle className="text-base font-semibold text-card-foreground">
//           Goal Board
//         </CardTitle>
//         <Button variant="ghost" size="icon" className="h-8 w-8">
//           <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
//         </Button>
//       </CardHeader>
//       <CardContent className="h-100 overflow-y-auto scroll-smooth">
//         <DragDropContext onDragEnd={onDragEnd}>
//           <div className="grid grid-cols-3 gap-3">
//             {columns.map((column) => (
//               <Droppable droppableId={column.id} key={column.id}>
//                 {(provided) => (
//                   <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className={`h-2 w-2 rounded-full ${column.color}`} />
//                         <span className="text-sm font-medium text-card-foreground">{column.title}</span>
//                         <Badge variant="secondary" className="h-5 px-1.5 text-xs text-muted-foreground">
//                           {column.tasks.length}
//                         </Badge>
//                       </div>
//                       <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground" onClick={() => addTask(column.id)}>
//                         <Plus className="h-3.5 w-3.5" />
//                       </Button>
//                     </div>
//                     <div className="space-y-2">
//                       {column.tasks.map((task, index) => (
//                         <Draggable draggableId={task._id} index={index} key={task._id}>
//                           {(provided) => (
//                             <div
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               ref={provided.innerRef}
//                               className="group cursor-pointer rounded-lg border border-border bg-background p-3 transition-shadow hover:shadow-sm"
//                             >
//                               {editingId === task._id ? (
//                                 <div className="flex gap-2">
//                                   <Input
//                                     value={editText}
//                                     onChange={e => setEditText(e.target.value)}
//                                     autoFocus
//                                     onKeyDown={e => {
//                                       if (e.key === "Enter") saveEdit(task._id)
//                                       if (e.key === "Escape") setEditingId(null)
//                                     }}
//                                   />
//                                   <Button size="sm" onClick={() => saveEdit(task._id)}>Save</Button>
//                                 </div>
//                               ) : (
//                                 <p className="mb-2 text-sm font-medium text-card-foreground">{task.title}</p>
//                               )}
//                               <div className="flex items-center justify-between">
//                                 <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColors[task.priority]}`}>
//                                   {task.priority}
//                                 </span>
//                                 <span className="text-xs text-muted-foreground">{task.category}</span>
//                                 <div className="flex gap-1">
//                                   <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     className="h-6 w-6 opacity-0 group-hover:opacity-100"
//                                     onClick={() => { setEditingId(task._id); setEditText(task.title) }}
//                                   >
//                                     <Edit2 className="h-4 w-4 text-muted-foreground" />
//                                   </Button>
//                                   <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     className="h-6 w-6 opacity-0 group-hover:opacity-100 text-red-500"
//                                     onClick={() => deleteTask(task._id)}
//                                   >
//                                     <Trash2 className="h-4 w-4" />
//                                   </Button>
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </Draggable>
//                       ))}
//                       {provided.placeholder}
//                     </div>
//                   </div>
//                 )}
//               </Droppable>
//             ))}
//           </div>
//         </DragDropContext>
//       </CardContent>
//     </Card>
//   );
// }

// "use client"

// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { MoreHorizontal, Plus, Edit2, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

// type Task = {
//   _id: string;
//   title: string;
//   status: "backlog" | "todo" | "doing" | "review" | "done";
//   priority: "low" | "medium" | "high";
//   type?: string;
//   dueDate?: string;
//   completed?: boolean;
//   skill?: string;
//   category?: string;
// };

// type Column = {
//   id: string;
//   title: string;
//   tasks: Task[];
//   color: string;
// };

// const priorityColors = {
//   low: "bg-chart-3/20 text-chart-3",
//   medium: "bg-chart-2/20 text-chart-2",
//   high: "bg-destructive/20 text-destructive",
// };

// export function KanbanBoard({
//   tasks,
//   setTasks
// }: { tasks: Task[]; setTasks: (tasks: Task[]) => void }) {

//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editText, setEditText] = useState<string>("");

//   const addTask = async (status: Column["id"]) => {
//     try {
//       const res = await axios.post("http://localhost:5000/tasks", {
//         title: "New Task",
//         status,
//         priority: "medium",
//         category: "General",
//         type: "kanban"
//       });
//       const newTask: Task = res.data;
//       setTasks([...tasks, newTask]);
//       setEditingId(newTask._id);
//       setEditText(newTask.title);
//     } catch (err) {
//       console.error("Add Task Error:", err);
//     }
//   };

//   const updateTaskStatus = async (id: string, status: Task["status"]) => {
//     try {
//       await axios.put(`http://localhost:5000/tasks/${id}`, { status });
//       setTasks(tasks.map(t => t._id === id ? { ...t, status } : t));
//     } catch (err) {
//       console.error("Update Status Error:", err);
//     }
//   };

//   const deleteTask = async (id: string) => {
//     try {
//       await axios.delete(`http://localhost:5000/tasks/${id}`);
//       setTasks(tasks.filter(t => t._id !== id));
//     } catch (err) {
//       console.error("Delete Task Error:", err);
//     }
//   };

//   const saveEdit = async (id: string) => {
//     try {
//       await axios.put(`http://localhost:5000/tasks/${id}`, { title: editText });
//       setTasks(tasks.map(t => t._id === id ? { ...t, title: editText } : t));
//       setEditingId(null);
//       setEditText("");
//     } catch (err) {
//       console.error("Save Edit Error:", err);
//     }
//   };

//   const onDragEnd = async (result: DropResult) => {
//     const { destination, source, draggableId } = result;
//     if (!destination) return;
//     if (destination.droppableId === source.droppableId && destination.index === source.index) return;

//     const draggedTask = tasks.find(t => t._id === draggableId);
//     if (!draggedTask) return;

//     const newStatus: Task["status"] = destination.droppableId as Task["status"];
//     await updateTaskStatus(draggedTask._id, newStatus);
//   };

//   // ✅ Safe columns creation
//   const columns: Column[] = [
//     { id: "todo", title: "To Do", color: "bg-muted-foreground/20", tasks: Array.isArray(tasks) ? tasks.filter(t => t.status === "todo") : [] },
//     { id: "doing", title: "In Progress", color: "bg-primary/20", tasks: Array.isArray(tasks) ? tasks.filter(t => t.status === "doing") : [] },
//     { id: "done", title: "Completed", color: "bg-chart-4/30", tasks: Array.isArray(tasks) ? tasks.filter(t => t.status === "done") : [] },
//   ];

//   return (
//     <Card className="border-border bg-card shadow-sm">
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <CardTitle className="text-base font-semibold text-card-foreground">Goal Board</CardTitle>
//         <Button variant="ghost" size="icon" className="h-8 w-8">
//           <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
//         </Button>
//       </CardHeader>
//       <CardContent className="h-100 overflow-y-auto scroll-smooth">
//         <DragDropContext onDragEnd={onDragEnd}>
//           <div className="grid grid-cols-3 gap-3">
//             {columns.map(column => (
//               <Droppable droppableId={column.id} key={column.id}>
//                 {(provided) => (
//                   <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className={`h-2 w-2 rounded-full ${column.color}`} />
//                         <span className="text-sm font-medium text-card-foreground">{column.title}</span>
//                         <Badge variant="secondary" className="h-5 px-1.5 text-xs text-muted-foreground">{column.tasks.length}</Badge>
//                       </div>
//                       <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground" onClick={() => addTask(column.id)}>
//                         <Plus className="h-3.5 w-3.5" />
//                       </Button>
//                     </div>
//                     <div className="space-y-2">
//                       {column.tasks.map((task, index) => (
//                         <Draggable draggableId={task._id} index={index} key={task._id}>
//                           {(provided) => (
//                             <div
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               ref={provided.innerRef}
//                               className="group cursor-pointer rounded-lg border border-border bg-background p-3 transition-shadow hover:shadow-sm"
//                             >
//                               {editingId === task._id ? (
//                                 <div className="flex gap-2">
//                                   <Input
//                                     value={editText}
//                                     onChange={e => setEditText(e.target.value)}
//                                     autoFocus
//                                     onKeyDown={e => {
//                                       if (e.key === "Enter") saveEdit(task._id);
//                                       if (e.key === "Escape") setEditingId(null);
//                                     }}
//                                   />
//                                   <Button size="sm" onClick={() => saveEdit(task._id)}>Save</Button>
//                                 </div>
//                               ) : (
//                                 <p className="mb-2 text-sm font-medium text-card-foreground">{task.title}</p>
//                               )}
//                               <div className="flex items-center justify-between">
//                                 <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColors[task.priority]}`}>
//                                   {task.priority}
//                                 </span>
//                                 <span className="text-xs text-muted-foreground">{task.category || "General"}</span>
//                                 <div className="flex gap-1">
//                                   <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100" onClick={() => { setEditingId(task._id); setEditText(task.title); }}>
//                                     <Edit2 className="h-4 w-4 text-muted-foreground" />
//                                   </Button>
//                                   <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 text-red-500" onClick={() => deleteTask(task._id)}>
//                                     <Trash2 className="h-4 w-4" />
//                                   </Button>
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </Draggable>
//                       ))}
//                       {provided.placeholder}
//                     </div>
//                   </div>
//                 )}
//               </Droppable>
//             ))}
//           </div>
//         </DragDropContext>
//       </CardContent>
//     </Card>
//   );
// }

// "use client"

// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { MoreHorizontal, Plus, Edit2, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
// import { Task } from "@/components/dashboard/types"
// // type Task = {
// //   _id: string;
// //   title: string;
// //   status: "backlog" | "todo" | "doing" | "review" | "done";
// //   priority: "low" | "medium" | "high";
// //   type?: string;
// //   dueDate?: string;
// //   completed?: boolean;
// //   skill?: string;
// //   category?: string;
// // };

// type Column = {
//   id: string;
//   title: string;
//   tasks: Task[];
//   color: string;
// };

// const priorityColors = {
//   low: "bg-chart-3/20 text-chart-3",
//   medium: "bg-chart-2/20 text-chart-2",
//   high: "bg-destructive/20 text-destructive",
// };

// export function KanbanBoard({
//   tasks,
//   setTasks
// }: { tasks?: Task[]; setTasks: (tasks: Task[]) => void }) {

//   // ✅ ensure tasks is always an array
//   const safeTasks = Array.isArray(tasks) ? tasks : [];

//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editText, setEditText] = useState<string>("");

//   const addTask = async (status: Column["id"]) => {
//     try {
//       const res = await axios.post("http://localhost:5000/tasks", {
//         title: "New Task",
//         status,
//         priority: "medium",
//         category: "General",
//         type: "kanban"
//       });
//       const newTask: Task = res.data;
//       setTasks([...safeTasks, newTask]);
//       setEditingId(newTask._id);
//       setEditText(newTask.title);
//     } catch (err) {
//       console.error("Add Task Error:", err);
//     }
//   };

//   const updateTaskStatus = async (id: string, status: Task["status"]) => {
//     try {
//       await axios.put(`http://localhost:5000/tasks/${id}`, { status });
//       setTasks(safeTasks.map(t => t._id === id ? { ...t, status } : t));
//     } catch (err) {
//       console.error("Update Status Error:", err);
//     }
//   };

//   const deleteTask = async (id: string) => {
//     try {
//       await axios.delete(`http://localhost:5000/tasks/${id}`);
//       setTasks(safeTasks.filter(t => t._id !== id));
//     } catch (err) {
//       console.error("Delete Task Error:", err);
//     }
//   };

//   const saveEdit = async (id: string) => {
//     try {
//       await axios.put(`http://localhost:5000/tasks/${id}`, { title: editText });
//       setTasks(safeTasks.map(t => t._id === id ? { ...t, title: editText } : t));
//       setEditingId(null);
//       setEditText("");
//     } catch (err) {
//       console.error("Save Edit Error:", err);
//     }
//   };

//   const onDragEnd = async (result: DropResult) => {
//     const { destination, source, draggableId } = result;
//     if (!destination) return;
//     if (destination.droppableId === source.droppableId && destination.index === source.index) return;

//     const draggedTask = safeTasks.find(t => t._id === draggableId);
//     if (!draggedTask) return;

//     const newStatus: Task["status"] = destination.droppableId as Task["status"];
//     await updateTaskStatus(draggedTask._id, newStatus);
//   };

//   // ✅ Safe columns creation
//   const columns: Column[] = [
//     { id: "todo", title: "To Do", color: "bg-muted-foreground/20", tasks: safeTasks.filter(t => t.status === "todo") },
//     { id: "doing", title: "In Progress", color: "bg-primary/20", tasks: safeTasks.filter(t => t.status === "doing") },
//     { id: "done", title: "Completed", color: "bg-chart-4/30", tasks: safeTasks.filter(t => t.status === "done") },
//   ];

//   return (
//     <Card className="border-border bg-card shadow-sm">
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <CardTitle className="text-base font-semibold text-card-foreground">Goal Board</CardTitle>
//         <Button variant="ghost" size="icon" className="h-8 w-8">
//           <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
//         </Button>
//       </CardHeader>
//       <CardContent className="h-100 overflow-y-auto scroll-smooth">
//         <DragDropContext onDragEnd={onDragEnd}>
//           <div className="grid grid-cols-3 gap-3">
//             {columns.map(column => (
//               <Droppable droppableId={column.id} key={column.id}>
//                 {(provided) => (
//                   <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className={`h-2 w-2 rounded-full ${column.color}`} />
//                         <span className="text-sm font-medium text-card-foreground">{column.title}</span>
//                         <Badge variant="secondary" className="h-5 px-1.5 text-xs text-muted-foreground">{column.tasks.length}</Badge>
//                       </div>
//                       <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground" onClick={() => addTask(column.id)}>
//                         <Plus className="h-3.5 w-3.5" />
//                       </Button>
//                     </div>
//                     <div className="space-y-2">
//                       {column.tasks.map((task, index) => (
//                         <Draggable draggableId={task._id} index={index} key={task._id}>
//                           {(provided) => (
//                             <div
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               ref={provided.innerRef}
//                               className="group cursor-pointer rounded-lg border border-border bg-background p-3 transition-shadow hover:shadow-sm"
//                             >
//                               {editingId === task._id ? (
//                                 <div className="flex gap-2">
//                                   <Input
//                                     value={editText}
//                                     onChange={e => setEditText(e.target.value)}
//                                     autoFocus
//                                     onKeyDown={e => {
//                                       if (e.key === "Enter") saveEdit(task._id);
//                                       if (e.key === "Escape") setEditingId(null);
//                                     }}
//                                   />
//                                   <Button size="sm" onClick={() => saveEdit(task._id)}>Save</Button>
//                                 </div>
//                               ) : (
//                                 <p className="mb-2 text-sm font-medium text-card-foreground">{task.title}</p>
//                               )}
//                               <div className="flex items-center justify-between">
//                                 <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColors[task.priority ?? medium]}`}>
//                                   {task.priority}
//                                 </span>
//                                 <span className="text-xs text-muted-foreground">{task.category || "General"}</span>
//                                 <div className="flex gap-1">
//                                   <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100" onClick={() => { setEditingId(task._id); setEditText(task.title); }}>
//                                     <Edit2 className="h-4 w-4 text-muted-foreground" />
//                                   </Button>
//                                   <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 text-red-500" onClick={() => deleteTask(task._id)}>
//                                     <Trash2 className="h-4 w-4" />
//                                   </Button>
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </Draggable>
//                       ))}
//                       {provided.placeholder}
//                     </div>
//                   </div>
//                 )}
//               </Droppable>
//             ))}
//           </div>
//         </DragDropContext>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { Task } from "@/components/dashboard/types";
import type { Dispatch, SetStateAction } from "react"
type Column = {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
};

const priorityColors = {
  low: "bg-chart-3/20 text-chart-3",
  medium: "bg-chart-2/20 text-chart-2",
  high: "bg-destructive/20 text-destructive",
};

type KanbanBoardProps = {
  tasks?: Task[];
  // setTasks: (tasks: Task[]) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onDragEnd?: (result: DropResult) => void;
};

export function KanbanBoard({ tasks, setTasks, onDragEnd: onDragEndProp }: KanbanBoardProps) {
  const safeTasks = Array.isArray(tasks) ? tasks : [];

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");

  // --- Task actions ---
  const addTask = async (status: Column["id"]) => {
    try {
      const res = await axios.post("http://localhost:5000/tasks", {
        title: "New Task",
        status,
        priority: "medium",
        category: "General",
        type: "kanban",
      });

      console.log("NEW TASK:", res.data);

      const newTask: Task = {
        ...res.data,
        _id: res.data._id || res.data.id || crypto.randomUUID(),
      };
      // setTasks([...safeTasks, newTask]);
      setTasks(prev => [...prev, newTask])
      setEditingId(newTask._id);
      setEditText(newTask.title);
    } catch (err) {
      console.error("Add Task Error:", err);
    }
  };

  const updateTaskStatus = async (id: string, status: Task["status"]) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, { status });
      // setTasks(safeTasks.map((t) => (t._id === id ? { ...t, status } : t)));
      setTasks(prev => prev.map((t) => (t._id === id ? { ...t, status } : t)));
    } catch (err) {
      console.error("Update Status Error:", err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      // setTasks(safeTasks.filter((t) => t._id !== id));
      setTasks(prev => prev.filter((t) => t._id !== id))
    } catch (err) {
      console.error("Delete Task Error:", err);
    }
  };

  const saveEdit = async (id: string) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, { title: editText });
      // setTasks(safeTasks.map((t) => (t._id === id ? { ...t, title: editText } : t)));
      setTasks(prev => prev.map((t) => (t._id === id ? { ...t, title: editText } : t)))
      setEditingId(null);
      setEditText("");
    } catch (err) {
      console.error("Save Edit Error:", err);
    }
  };

  // --- Handle drag end ---
  // const handleDragEnd = async (result: DropResult) => {
  //   if (onDragEndProp) return onDragEndProp(result); // Use prop if provided

  //   const { destination, source, draggableId } = result;
  //   if (!destination) return;
  //   if (destination.droppableId === source.droppableId && destination.index === source.index) return;

  //   const draggedTask = safeTasks.find((t) => t._id === draggableId);
  //   if (!draggedTask) return;

  //   const newStatus: Task["status"] = destination.droppableId as Task["status"];
  //   await updateTaskStatus(draggedTask._id, newStatus);
  // };
  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;
    const newStatus = destination.droppableId as Task["status"];

    // 🔥 UI instant update
    setTasks(prev =>
      prev.map(t =>
        t._id === draggableId ? { ...t, status: newStatus } : t
      )
    );

    try {
      await axios.put(`http://localhost:5000/tasks/${draggableId}`, {
        status: newStatus,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // --- Columns ---
  const columns: Column[] = [
    { id: "todo", title: "To Do", color: "bg-muted-foreground/20", tasks: safeTasks.filter((t) => t.status === "todo") },
    { id: "doing", title: "In Progress", color: "bg-primary/20", tasks: safeTasks.filter((t) => t.status === "doing") },
    { id: "done", title: "Completed", color: "bg-chart-4/30", tasks: safeTasks.filter((t) => t.status === "done") },
  ];

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Card className="border-border bg-card shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold text-card-foreground">Goal Board</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          </Button>
        </CardHeader>
        <CardContent className="h-100 overflow-y-auto scroll-smooth">
          <div className="grid grid-cols-3 gap-3">
            {columns.map((column) => (


              <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${column.color}`} />
                        <span className="text-sm font-medium text-card-foreground">{column.title}</span>
                        <Badge variant="secondary" className="h-5 px-1.5 text-xs text-muted-foreground">
                          {column.tasks.length}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground" onClick={() => addTask(column.id)}>
                        <Plus className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {column.tasks.map((task, index) => (
                        <Draggable
                          key={task._id ?? `${column.id}-${index}`}
                          draggableId={String(task._id ?? `${column.id}-${index}`)}
                          index={index}
                        >

                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="group cursor-pointer rounded-lg border border-border bg-background p-3 transition-shadow hover:shadow-sm"
                            >
                              {editingId === task._id ? (
                                <div className="flex gap-2">
                                  <Input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    autoFocus
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") saveEdit(task._id);
                                      if (e.key === "Escape") setEditingId(null);
                                    }}
                                  />
                                  <Button size="sm" onClick={() => saveEdit(task._id)}>Save</Button>
                                </div>
                              ) : (
                                <p className="mb-2 text-sm font-medium text-card-foreground">{task.title}</p>
                              )}
                              <div className="flex items-center justify-between">
                                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColors[task.priority ?? "medium"]}`}>
                                  {task.priority}
                                </span>
                                <span className="text-xs text-muted-foreground">{task.category || "General"}</span>
                                <div className="flex gap-1">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 opacity-0 group-hover:opacity-100"
                                    onClick={() => { setEditingId(task._id); setEditText(task.title); }}
                                  >
                                    <Edit2 className="h-4 w-4 text-muted-foreground" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 opacity-0 group-hover:opacity-100 text-red-500"
                                    onClick={() => deleteTask(task._id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </CardContent>
      </Card>
    </DragDropContext>
  );
}