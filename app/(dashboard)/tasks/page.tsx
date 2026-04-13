// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Plus, Calendar, Clock, Filter, SortAsc } from "lucide-react"
// import { cn } from "@/lib/utils"
// import API from "@/lib/api"
// import { Trash2 } from "lucide-react"

// // const initialTasks = [
// //   {
// //     id: "1",
// //     title: "Complete React Hooks module",
// //     description: "Finish the useEffect and useContext sections",
// //     time: "9:00 AM",
// //     duration: "2 hours",
// //     category: "Learning",
// //     priority: "high",
// //     completed: false,
// //   },
// //   {
// //     id: "2",
// //     title: "Review Data Structures notes",
// //     description: "Focus on trees and graphs",
// //     time: "11:00 AM",
// //     duration: "1.5 hours",
// //     category: "Academic",
// //     priority: "high",
// //     completed: false,
// //   },
// //   {
// //     id: "3",
// //     title: "Apply to TechCorp internship",
// //     description: "Customize cover letter and submit application",
// //     time: "1:00 PM",
// //     duration: "1 hour",
// //     category: "Career",
// //     priority: "high",
// //     completed: false,
// //   },
// //   {
// //     id: "4",
// //     title: "Practice LeetCode problems",
// //     description: "Solve 3 medium difficulty problems",
// //     time: "2:30 PM",
// //     duration: "1.5 hours",
// //     category: "Skills",
// //     priority: "medium",
// //     completed: true,
// //   },
// //   {
// //     id: "5",
// //     title: "Update portfolio project",
// //     description: "Add new features to the dashboard",
// //     time: "4:00 PM",
// //     duration: "2 hours",
// //     category: "Project",
// //     priority: "medium",
// //     completed: false,
// //   },
// //   {
// //     id: "6",
// //     title: "Read tech blog articles",
// //     description: "Stay updated with industry trends",
// //     time: "6:00 PM",
// //     duration: "30 min",
// //     category: "Personal",
// //     priority: "low",
// //     completed: true,
// //   },
// // ]

// const categoryColors: Record<string, string> = {
//   Learning: "bg-chart-1/10 text-chart-1 border-chart-1/20",
//   Academic: "bg-chart-2/10 text-chart-2 border-chart-2/20",
//   Career: "bg-primary/10 text-primary border-primary/20",
//   Skills: "bg-chart-4/10 text-chart-4 border-chart-4/20",
//   Project: "bg-chart-3/10 text-chart-3 border-chart-3/20",
//   Personal: "bg-chart-5/10 text-chart-5 border-chart-5/20",
// }

// export default function TasksPage() {
//   const [tasks, setTasks] = useState([])

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const res = await API.get("/tasks");

//       // 🔥 filter ONLY today's daily tasks
//       const todayTasks = res.data.filter((t: any) => {
//         return (
//           t.type === "daily" &&
//           new Date(t.dueDate).toDateString() === new Date().toDateString()
//         );
//       });

//       setTasks(todayTasks);
//     };

//     fetchTasks();
//   }, []);

//   const toggleTask = async (id: string) => {
//     const task = tasks.find(t => t._id === id);

//     await API.put(`/tasks/${id}`, {
//       completed: !task.completed
//     });

//     setTasks(tasks.map(t =>
//       t._id === id ? { ...t, completed: !t.completed } : t
//     ));
//   };

//   const addTask = async () => {
//     if (!newTask.trim()) return;

//     const res = await API.post("/tasks", {
//       title: newTask,
//       type: "daily",
//       dueDate: new Date(),
//       priority: "medium",
//       completed: false,
//     });

//     setTasks(prev => [...prev, res.data]);
//     setNewTask(""); // clear input
//   };

//   const deleteTask = async (id: string) => {
//     await API.delete(`/tasks/${id}`);
//     setTasks(prev => prev.filter(t => t._id !== id));
//   };

//   setTasks(prev => [...prev, res.data]);
// };

// const [newTask, setNewTask] = useState("")
// const completedCount = Task.filter(t => t.completed).length
// const totalCount = Task.length

// return (
//   <div className="space-y-6">
//     <div className="flex items-center justify-between">
//       <div>
//         <h1 className="text-2xl font-semibold text-foreground">Today&apos;s Tasks</h1>
//         <p className="text-sm text-muted-foreground">
//           {completedCount} of {totalCount} tasks completed
//         </p>
//       </div>
//       <div className="flex items-center gap-2">
//         <Button variant="outline" size="sm" className="gap-2">
//           <Filter className="h-4 w-4" />
//           Filter
//         </Button>
//         <Button variant="outline" size="sm" className="gap-2">
//           <SortAsc className="h-4 w-4" />
//           Sort
//         </Button>
//         <div className="flex items-center gap-2">
//           <input
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//             placeholder="Enter task..."
//             className="border px-3 py-2 rounded-md text-sm"
//           />

//           <Button onClick={addTask}>
//             <Plus className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </div>

//     {/* Progress bar */}
//     <Card className="border-border/50">
//       <CardContent className="py-4">
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-sm font-medium">Daily Progress</span>
//           <span className="text-sm text-muted-foreground">
//             {Math.round((completedCount / totalCount) * 100)}%
//           </span>
//         </div>
//         <div className="h-2 w-full rounded-full bg-muted">
//           <div
//             className="h-2 rounded-full bg-primary transition-all duration-300"
//             style={{ width: `${(completedCount / totalCount) * 100}%` }}
//           />
//         </div>
//       </CardContent>
//     </Card>

//     {/* Task list */}
//     <div className="space-y-3">
//       {tasks.map((task) => (
//         <Card
//           key={task._id}
//           className={cn(
//             "border-border/50 transition-all",
//             task.completed && "opacity-60"
//           )}
//         >
//           <CardContent className="py-4">
//             <div className="flex items-start gap-4">
//               <Checkbox
//                 checked={task.completed}
//                 onCheckedChange={() => toggleTask(task._id)}
//                 className="mt-1"
//               />
//               <button
//                 onClick={() => deleteTask(task._id)}
//                 className="text-red-500 text-xs"
//               >
//                 Delete
//               </button>
//               <div className="flex-1 space-y-1">
//                 <div className="flex items-center justify-between">
//                   <h3 className={cn(
//                     "font-medium",
//                     task.completed && "line-through text-muted-foreground"
//                   )}>
//                     {task.title}
//                   </h3>
//                   <Badge
//                     variant="outline"
//                     className={categoryColors[task.category]}
//                   >
//                     {task.category}
//                   </Badge>
//                 </div>
//                 <p className="text-sm text-muted-foreground">
//                   {task.description}
//                 </p>
//                 <div className="flex items-center gap-4 pt-2">
//                   <div className="flex items-center gap-1 text-xs text-muted-foreground">
//                     <Clock className="h-3 w-3" />
//                     {task.time}
//                   </div>
//                   <div className="flex items-center gap-1 text-xs text-muted-foreground">
//                     <Calendar className="h-3 w-3" />
//                     {task.duration}
//                   </div>
//                   <Badge
//                     variant="outline"
//                     className={cn(
//                       "text-xs",
//                       task.priority === "high" && "border-destructive/20 text-destructive",
//                       task.priority === "medium" && "border-chart-4/20 text-chart-4",
//                       task.priority === "low" && "border-muted-foreground/20 text-muted-foreground"
//                     )}
//                   >
//                     {task.priority}
//                   </Badge>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   </div>
// )
// }



// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Plus, Calendar, Clock, Filter, SortAsc, Trash2 } from "lucide-react"
// import { cn } from "@/lib/utils"
// import API from "@/lib/api"

// export default function TasksPage() {
//   const [tasks, setTasks] = useState<any[]>([])
//   const [newTask, setNewTask] = useState("")
//   const [showIncomplete, setShowIncomplete] = useState(false)

//   // ✅ Fetch tasks
//   useEffect(() => {
//     const fetchTasks = async () => {
//       const res = await API.get("/tasks")

//       const todayTasks = res.data.filter((t: any) => {
//         return (
//           t.type === "daily" &&
//           new Date(t.dueDate).toDateString() === new Date().toDateString()
//         )
//       })

//       setTasks(todayTasks)
//     }

//     fetchTasks()
//   }, [])

//   // ✅ Toggle complete
//   const toggleTask = async (id: string) => {
//     const task = tasks.find(t => t._id === id)

//     await API.put(`/tasks/${id}`, {
//       completed: !task.completed
//     })

//     setTasks(tasks.map(t =>
//       t._id === id ? { ...t, completed: !t.completed } : t
//     ))
//   }

//   // ✅ Add task
//   const addTask = async () => {
//     if (!newTask.trim()) return

//     const res = await API.post("/tasks", {
//       title: newTask,
//       type: "daily",
//       dueDate: new Date(),
//       priority: "medium",
//       completed: false,
//     })

//     setTasks(prev => [...prev, res.data])
//     setNewTask("")
//   }

//   // ✅ Delete task
//   const deleteTask = async (id: string) => {
//     await API.delete(`/tasks/${id}`)
//     setTasks(prev => prev.filter(t => t._id !== id))
//   }

//   // ✅ Sort
//   const sortTasks = () => {
//     const order: any = { high: 1, medium: 2, low: 3 }

//     const sorted = [...tasks].sort(
//       (a, b) => order[a.priority] - order[b.priority]
//     )

//     setTasks(sorted)
//   }

//   // ✅ Filter
//   const filteredTasks = showIncomplete
//     ? tasks.filter(t => !t.completed)
//     : tasks

//   // ✅ Stats
//   const completedCount = tasks.filter(t => t.completed).length
//   const totalCount = tasks.length

//   return (
//     <div className="space-y-6">

//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold">Today's Tasks</h1>
//           <p className="text-sm text-muted-foreground">
//             {completedCount} of {totalCount} tasks completed
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setShowIncomplete(prev => !prev)}
//           >
//             <Filter className="h-4 w-4" />
//           </Button>

//           <Button
//             variant="outline"
//             size="sm"
//             onClick={sortTasks}
//           >
//             <SortAsc className="h-4 w-4" />
//           </Button>

//           <input
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//             placeholder="Enter task..."
//             className="border px-3 py-2 rounded-md text-sm"
//           />

//           <Button onClick={addTask}>
//             <Plus className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       {/* PROGRESS */}
//       <Card>
//         <CardContent className="py-4">
//           <div className="flex justify-between mb-2">
//             <span>Daily Progress</span>
//             <span>
//               {Math.round((completedCount / (totalCount || 1)) * 100)}%
//             </span>
//           </div>

//           <div className="h-2 bg-muted rounded-full">
//             <div
//               className="h-2 bg-primary rounded-full"
//               style={{
//                 width: `${(completedCount / (totalCount || 1)) * 100}%`
//               }}
//             />
//           </div>
//         </CardContent>
//       </Card>

//       {/* TASK LIST */}
//       <div className="space-y-3">
//         {filteredTasks.map((task) => (
//           <Card
//             key={task._id}
//             className={cn(
//               "border-border/50 transition-all",
//               task.completed && "opacity-60"
//             )}
//           >
//             <CardContent className="py-4">
//               <div className="flex items-start gap-4">

//                 {/* Checkbox */}
//                 <Checkbox
//                   checked={task.completed}
//                   onCheckedChange={() => toggleTask(task._id)}
//                 />

//                 {/* Content */}
//                 <div className="flex-1 space-y-1">
//                   <h3 className={cn(
//                     "font-medium",
//                     task.completed && "line-through text-muted-foreground"
//                   )}>
//                     {task.title}
//                   </h3>

//                   <div className="flex items-center gap-4 pt-2">
//                     <div className="flex items-center gap-1 text-xs text-muted-foreground">
//                       <Clock className="h-3 w-3" />
//                       {new Date(task.createdAt).toLocaleTimeString()}
//                     </div>

//                     <Badge variant="outline" className="text-xs">
//                       {task.priority}
//                     </Badge>
//                   </div>
//                 </div>

//                 {/* Delete */}
//                 <button
//                   onClick={() => deleteTask(task._id)}
//                   className="text-red-500"
//                 >
//                   <Trash2 size={16} />
//                 </button>

//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Calendar, Clock, Filter, SortAsc, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import API from "@/lib/api"
import { TaskList } from "@/components/dashboard/task-list"
import { Task } from "@/components/dashboard/types"

// type Task = {
//   _id: string
//   title: string
//   type?: "daily" | "career" | "kanban"
//   priority: "low" | "medium" | "high"
//   completed: boolean
//   createdAt: string
//   dueDate?: string
// }

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [showIncomplete, setShowIncomplete] = useState(false)

  // ✅ Fetch today's tasks
  // const fetchTasks = async () => {
  //     try {
  //       const res = await API.get<Task[]>("/tasks?type=daily")

  //       const todayTasks = res.data.filter((t) => {
  //         if (t.type !== "daily" || !t.dueDate) return false

  //         return new Date(t.dueDate).toDateString() === new Date().toDateString()
  //       })

  //       setTasks(todayTasks)
  //     } catch (err) {
  //       console.error("Fetch error:", err)
  //     }
  //   }
  const fetchTasks = async () => {
    try {
      const res = await API.get<Task[]>("/tasks?type=daily")

      const todayTasks = res.data.filter((t) => {
        if (!t.dueDate) return false

        return (
          new Date(t.dueDate).toDateString() ===
          new Date().toDateString()
        )
      })

      setTasks(todayTasks)
    } catch (err) {
      console.error("Fetch error:", err)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    console.log("TASKS:", tasks)
  }, [tasks])
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const res = await API.get<Task[]>("/tasks")

  //     const todayTasks = res.data.filter((t) => {
  //       return (
  //         t.type === "daily" &&
  //         t.dueDate && new Date(t.dueDate).toDateString() === new Date().toDateString()
  //       )
  //     })

  //     setTasks(todayTasks)
  //   }

  //   fetchTasks()
  // }, [])

  // ✅ Toggle complete
  // const toggleTask = async (id: string) => {
  //   const task = tasks.find((t) => t._id === id)
  //   if (!task) return

  //   await API.put(`/tasks/${id}`, { completed: !task.completed })

  //   setTasks((prev) =>
  //     prev.map((t) => (t._id === id ? { ...t, completed: !t.completed } : t))
  //   )
  // }

  const toggleTask = async (id: string) => {
    const task = tasks.find(t => t._id === id)
    if (!task) return

    await API.put(`/tasks/${id}`, {
      completed: !task.completed
    })

    fetchTasks()
  }


  // ✅ Add new task
  // const addTask = async () => {
  //   if (!newTask.trim()) return

  //   const res = await API.post<Task>("/tasks", {
  //     title: newTask,
  //     type: "daily",
  //     dueDate: new Date(),
  //     priority: "medium",
  //     completed: false,
  //   })

  //   setTasks((prev) => [...prev, res.data])
  //   setNewTask("")
  // }

  const addTask = async () => {
    try {
      console.log("ADD CLICKED")
      await API.post("/tasks", {
        title: "New Task", // hardcode kar de abhi
        type: "daily",
        status: "todo",
        priority: "medium",
        completed: false,
        dueDate: new Date()

      })

      fetchTasks()
    } catch (err) {
      console.error("Add error:", err)
    }
  }

  // ✅ Delete task
  const deleteTask = async (id: string) => {
    await API.delete(`/tasks/${id}`)
    // setTasks((prev) => prev.filter((t) => t._id !== id))
    fetchTasks()
  }

  const editTask = async (id: string, title: string) => {
    await API.put(`/tasks/${id}`, { title })
    fetchTasks()
  }

  // ✅ Sort tasks by priority
  const sortTasks = () => {
    const order: Record<Task["priority"], number> = { high: 1, medium: 2, low: 3 }
    setTasks((prev) => [...prev].sort((a, b) => order[a.priority] - order[b.priority]))
  }

  // ✅ Filter tasks
  const filteredTasks = showIncomplete ? tasks.filter((t) => !t.completed) : tasks

  // ✅ Stats
  const completedCount = tasks.filter((t) => t.completed).length
  const totalCount = tasks.length

  console.log("SENDING TO TASKLIST:", tasks)
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Today's Tasks</h1>
          <p className="text-sm text-muted-foreground">
            {completedCount} of {totalCount} tasks completed
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowIncomplete((prev) => !prev)}
          >
            <Filter className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm" onClick={sortTasks}>
            <SortAsc className="h-4 w-4" />
          </Button>

          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task..."
            className="border px-3 py-2 rounded-md text-sm"
          />

          <Button onClick={addTask}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <Card>
        <CardContent className="py-4">
          <div className="flex justify-between mb-2">
            <span>Daily Progress</span>
            <span>{Math.round((completedCount / (totalCount || 1)) * 100)}%</span>
          </div>

          <div className="h-2 bg-muted rounded-full">
            <div
              className="h-2 bg-primary rounded-full"
              style={{ width: `${(completedCount / (totalCount || 1)) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* TASK LIST */}
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onAdd={addTask}
        onEdit={editTask}
      />
      {/* <div className="space-y-3">
        {filteredTasks.map((task) => (
          <Card
            key={task._id}
            className={cn("border-border/50 transition-all", task.completed && "opacity-60")}
          >
            <CardContent className="py-4">
              <div className="flex items-start gap-4">

                Checkbox
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task._id)}
                />

                Task Content
                <div className="flex-1 space-y-1">
                  <h3
                    className={cn(
                      "font-medium",
                      task.completed && "line-through text-muted-foreground"
                    )}
                  >
                    {task.title}
                  </h3>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {task.createdAt
                        ? new Date(task.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                        : "No time"}
                    </div>

                    <Badge variant="outline" className="text-xs">
                      {task.priority}
                    </Badge>
                  </div>
                </div>

                Delete button
                <button onClick={() => deleteTask(task._id)} className="text-red-500">
                  <Trash2 size={16} />
                </button>

              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}

    </div>
  )
}