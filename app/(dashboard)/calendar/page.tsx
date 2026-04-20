// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
// import { cn } from "@/lib/utils"

// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// // March 2026 calendar data
// const calendarData = [
//   { day: 1, events: [{ title: "React Course", type: "learning" }] },
//   { day: 2, events: [] },
//   { day: 3, events: [{ title: "Career Coaching", type: "career" }] },
//   { day: 4, events: [] },
//   { day: 5, events: [{ title: "Portfolio Review", type: "project" }] },
//   { day: 6, events: [] },
//   { day: 7, events: [] },
//   { day: 8, events: [{ title: "Mock Interview", type: "career" }] },
//   { day: 9, events: [] },
//   { day: 10, events: [{ title: "Team Meeting", type: "meeting" }] },
//   { day: 11, events: [] },
//   { day: 12, events: [{ title: "Node.js Workshop", type: "learning" }] },
//   { day: 13, events: [] },
//   { day: 14, events: [{ title: "Today", type: "today" }, { title: "Code Review", type: "project" }] },
//   { day: 15, events: [] },
//   { day: 16, events: [{ title: "Internship Deadline", type: "career" }] },
//   { day: 17, events: [] },
//   { day: 18, events: [] },
//   { day: 19, events: [{ title: "Hackathon", type: "project" }] },
//   { day: 20, events: [{ title: "Hackathon", type: "project" }] },
//   { day: 21, events: [] },
//   { day: 22, events: [] },
//   { day: 23, events: [{ title: "Weekly Review", type: "meeting" }] },
//   { day: 24, events: [] },
//   { day: 25, events: [{ title: "DSA Test", type: "academic" }] },
//   { day: 26, events: [] },
//   { day: 27, events: [] },
//   { day: 28, events: [] },
//   { day: 29, events: [{ title: "Month End Review", type: "meeting" }] },
//   { day: 30, events: [] },
//   { day: 31, events: [] },
// ]

// const eventTypeColors: Record<string, string> = {
//   learning: "bg-chart-1 text-primary-foreground",
//   career: "bg-primary text-primary-foreground",
//   project: "bg-chart-3 text-primary-foreground",
//   meeting: "bg-chart-4 text-primary-foreground",
//   academic: "bg-chart-2 text-primary-foreground",
//   today: "bg-destructive text-primary-foreground",
// }

// const upcomingEvents = [
//   { date: "Mar 14", title: "Code Review", time: "2:00 PM", type: "project" },
//   { date: "Mar 16", title: "Internship Deadline", time: "11:59 PM", type: "career" },
//   { date: "Mar 19", title: "Hackathon Starts", time: "9:00 AM", type: "project" },
//   { date: "Mar 23", title: "Weekly Review", time: "4:00 PM", type: "meeting" },
//   { date: "Mar 25", title: "DSA Test", time: "10:00 AM", type: "academic" },
// ]

// export default function CalendarPage() {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold text-foreground">Weekly / Monthly</h1>
//           <p className="text-sm text-muted-foreground">
//             Plan and organize your schedule
//           </p>
//         </div>
//         <Button className="gap-2">
//           <Plus className="h-4 w-4" />
//           Add Event
//         </Button>
//       </div>

//       <div className="grid grid-cols-12 gap-6">
//         {/* Calendar */}
//         <div className="col-span-8">
//           <Card className="border-border/50">
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle className="text-lg">March 2026</CardTitle>
//                 <div className="flex items-center gap-2">
//                   <Button variant="outline" size="icon" className="h-8 w-8">
//                     <ChevronLeft className="h-4 w-4" />
//                   </Button>
//                   <Button variant="outline" size="sm">Today</Button>
//                   <Button variant="outline" size="icon" className="h-8 w-8">
//                     <ChevronRight className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent>
//               {/* Day headers */}
//               <div className="grid grid-cols-7 gap-1 mb-2">
//                 {daysOfWeek.map((day) => (
//                   <div
//                     key={day}
//                     className="text-center text-sm font-medium text-muted-foreground py-2"
//                   >
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               {/* Calendar grid */}
//               <div className="grid grid-cols-7 gap-1">
//                 {calendarData.map((data, index) => {
//                   const isToday = data.day === 14
//                   return (
//                     <div
//                       key={index}
//                       className={cn(
//                         "min-h-24 rounded-lg border border-border/50 p-2 transition-colors hover:bg-accent/50",
//                         isToday && "bg-primary/5 border-primary/30"
//                       )}
//                     >
//                       <div className={cn(
//                         "text-sm font-medium mb-1",
//                         isToday && "text-primary"
//                       )}>
//                         {data.day}
//                       </div>
//                       <div className="space-y-1">
//                         {data.events.filter(e => e.type !== "today").slice(0, 2).map((event, i) => (
//                           <div
//                             key={i}
//                             className={cn(
//                               "text-xs px-1.5 py-0.5 rounded truncate",
//                               eventTypeColors[event.type]
//                             )}
//                           >
//                             {event.title}
//                           </div>
//                         ))}
//                         {data.events.filter(e => e.type !== "today").length > 2 && (
//                           <div className="text-xs text-muted-foreground">
//                             +{data.events.filter(e => e.type !== "today").length - 2} more
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Sidebar */}
//         <div className="col-span-4 space-y-6">
//           {/* Upcoming Events */}
//           <Card className="border-border/50">
//             <CardHeader>
//               <CardTitle className="text-base">Upcoming Events</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               {upcomingEvents.map((event, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
//                 >
//                   <div className={cn(
//                     "h-2 w-2 rounded-full mt-2",
//                     eventTypeColors[event.type].split(" ")[0]
//                   )} />
//                   <div className="flex-1">
//                     <p className="text-sm font-medium">{event.title}</p>
//                     <p className="text-xs text-muted-foreground">
//                       {event.date} at {event.time}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           {/* Legend */}
//           <Card className="border-border/50">
//             <CardHeader>
//               <CardTitle className="text-base">Event Types</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               {Object.entries({
//                 learning: "Learning",
//                 career: "Career",
//                 project: "Project",
//                 meeting: "Meeting",
//                 academic: "Academic",
//               }).map(([type, label]) => (
//                 <div key={type} className="flex items-center gap-2">
//                   <div className={cn(
//                     "h-3 w-3 rounded",
//                     eventTypeColors[type].split(" ")[0]
//                   )} />
//                   <span className="text-sm text-muted-foreground">{label}</span>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }


// "use client"

// import { useEffect, useState } from "react"
// import API from "@/lib/api"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
// import { cn } from "@/lib/utils"

// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// export default function CalendarPage() {
//   const [tasks, setTasks] = useState<any[]>([])
//   const [currentDate, setCurrentDate] = useState(new Date())

//   // 🔹 fetch tasks
//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const res = await API.get("/tasks")
//         setTasks(res.data)
//       } catch (err) {
//         console.error(err)
//       }
//     }

//     fetchTasks()
//   }, [])

//   // 🔹 month helpers
//   const year = currentDate.getFullYear()
//   const month = currentDate.getMonth()

//   const firstDay = new Date(year, month, 1).getDay()
//   const totalDays = new Date(year, month + 1, 0).getDate()

//   // 🔹 build calendar grid
//   const calendarDays = []

//   for (let i = 0; i < firstDay; i++) {
//     calendarDays.push(null)
//   }

//   for (let d = 1; d <= totalDays; d++) {
//     calendarDays.push(d)
//   }

//   // 🔹 group tasks by date
//   const getTasksForDay = (day: number) => {
//     return tasks.filter((task) => {
//       if (!task.dueDate) return false
//       const date = new Date(task.dueDate)
//       return (
//         date.getDate() === day &&
//         date.getMonth() === month &&
//         date.getFullYear() === year
//       )
//     })
//   }

//   // 🔹 add event (simple version)
//   const handleAddEvent = async () => {
//     const title = prompt("Enter task title")
//     const date = prompt("Enter date (YYYY-MM-DD)")

//     if (!title || !date) return

//     try {
//       await API.post("/tasks", {
//         title,
//         dueDate: date,
//         type: "kanban",
//       })

//       // refresh
//       const res = await API.get("/tasks")
//       setTasks(res.data)
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   return (
//     <div className="space-y-6">
//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold">Weekly / Monthly</h1>
//           <p className="text-sm text-muted-foreground">
//             Plan and organize your schedule
//           </p>
//         </div>

//         <Button className="gap-2" onClick={handleAddEvent}>
//           <Plus className="h-4 w-4" />
//           Add Event
//         </Button>
//       </div>

//       <div className="grid grid-cols-12 gap-6">
//         {/* CALENDAR */}
//         <div className="col-span-8">
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle>
//                   {currentDate.toLocaleString("default", {
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </CardTitle>

//                 <div className="flex gap-2">
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() =>
//                       setCurrentDate(new Date(year, month - 1, 1))
//                     }
//                   >
//                     <ChevronLeft className="h-4 w-4" />
//                   </Button>

//                   <Button
//                     variant="outline"
//                     onClick={() => setCurrentDate(new Date())}
//                   >
//                     Today
//                   </Button>

//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() =>
//                       setCurrentDate(new Date(year, month + 1, 1))
//                     }
//                   >
//                     <ChevronRight className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </CardHeader>

//             <CardContent>
//               {/* DAYS HEADER */}
//               <div className="grid grid-cols-7 mb-2">
//                 {daysOfWeek.map((day) => (
//                   <div key={day} className="text-center text-sm">
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               {/* GRID */}
//               <div className="grid grid-cols-7 gap-1">
//                 {calendarDays.map((day, index) => {
//                   if (!day) return <div key={index} />

//                   const dayTasks = getTasksForDay(day)

//                   return (
//                     <div
//                       key={index}
//                       className="min-h-24 border rounded-lg p-2 hover:bg-accent/40"
//                     >
//                       <div className="text-sm font-medium">{day}</div>

//                       <div className="space-y-1 mt-1">
//                         {dayTasks.slice(0, 2).map((task: any, i: number) => (
//                           <div
//                             key={i}
//                             className="text-xs px-1 py-0.5 rounded bg-primary text-white truncate"
//                           >
//                             {task.title}
//                           </div>
//                         ))}

//                         {dayTasks.length > 2 && (
//                           <div className="text-xs text-muted-foreground">
//                             +{dayTasks.length - 2} more
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* SIDEBAR */}
//         <div className="col-span-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Upcoming Tasks</CardTitle>
//             </CardHeader>

//             <CardContent className="space-y-3">
//               {tasks
//                 .filter((t) => t.dueDate)
//                 .sort(
//                   (a, b) =>
//                     new Date(a.dueDate).getTime() -
//                     new Date(b.dueDate).getTime()
//                 )
//                 .slice(0, 5)
//                 .map((task, i) => (
//                   <div key={i} className="text-sm">
//                     <p className="font-medium">{task.title}</p>
//                     <p className="text-xs text-muted-foreground">
//                       {new Date(task.dueDate).toDateString()}
//                     </p>
//                   </div>
//                 ))}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }





"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

type Task = {
  _id: string
  title: string
  priority: "low" | "medium" | "high"
  category?: string
  status: string
  dueDate?: string
  type?: string
  completed?: boolean
  skill?: string
}

export default function CalendarPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [currentDate, setCurrentDate] = useState(new Date())

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([])
  const [taskDialogOpen, setTaskDialogOpen] = useState(false)

  // 🔹 fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get<Task[]>("http://localhost:5000/tasks?type=calendar")
        setTasks(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchTasks()
  }, [])

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()

  const calendarDays = []

  for (let i = 0; i < firstDay; i++) calendarDays.push(null)
  for (let d = 1; d <= totalDays; d++) calendarDays.push(d)

  const getTasksForDay = (day: number) => {
    return tasks.filter((task) => {
      if (!task.dueDate) return false
      const date = new Date(task.dueDate)
      return date.getDate() === day && date.getMonth() === month && date.getFullYear() === year
    })
  }

  // const handleAddEvent = async () => {
  //   const title = prompt("Enter task title")
  //   const date = prompt("Enter date (YYYY-MM-DD)")

  //   if (!title || !date) return

  //   try {
  //     await axios.post("http://localhost:5000/tasks", {
  //       title,
  //       dueDate: date,
  //       type: "kanban",
  //     })

  //     const res = await axios.get<Task[]>("http://localhost:5000/tasks")
  //     setTasks(res.data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  const handleAddEvent = async () => {
    if (!title || !dueDate) return

    try {
      if (editingTask) {
        // UPDATE mode (edit / reschedule)
        await axios.put(
          `http://localhost:5000/tasks/${editingTask._id}`,
          {
            ...editingTask,
            title,
            dueDate,
          }
        )
      } else {
        // CREATE mode
        await axios.post("http://localhost:5000/tasks", {
          title,
          dueDate,
          type: "calendar",
        })
      }

      const res = await axios.get("http://localhost:5000/tasks?type=calendar")
      setTasks(res.data)

      setEditingTask(null)
      setOpen(false)
      setTitle("")
      setDueDate("")

    } catch (err) {
      console.error(err)
    }
  }

  // const upcomingTasks = tasks
  //   .filter((task) => {
  //     if (!task.dueDate) return false

  //     const today = new Date()
  //     const taskDate = new Date(task.dueDate)

  //     const diffTime = taskDate.getTime() - today.getTime()
  //     const diffDays = diffTime / (1000 * 60 * 60 * 24)

  //     return diffDays >= 0 && diffDays <= 2
  //   })
  //   .sort(
  //     (a, b) =>
  //       new Date(a.dueDate!).getTime() -
  //       new Date(b.dueDate!).getTime()
  //   )

  const upcomingTasks = tasks
    .filter((task) => {
      if (!task.dueDate) return false
      return new Date(task.dueDate) >= new Date()
    })
    .sort(
      (a, b) =>
        new Date(a.dueDate!).getTime() -
        new Date(b.dueDate!).getTime()
    )
    .slice(0, 20)

  const handleDayClick = (day: number) => {
    const tasksForDay = getTasksForDay(day)

    setSelectedDay(day)
    setSelectedTasks(tasksForDay)
    setTaskDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`)

      setTasks(tasks.filter((task) => task._id !== id))
      setSelectedTasks(selectedTasks.filter((task) => task._id !== id))

    } catch (err) {
      console.error(err)
    }
  }

  // const handleReschedule = async (task: Task) => {
  //   const newDate = prompt("Enter new date (YYYY-MM-DD)")

  //   if (!newDate) return

  //   try {
  //     await axios.put(`http://localhost:5000/tasks/${task._id}`, {
  //       ...task,
  //       dueDate: newDate,
  //     })

  //     const res = await axios.get("http://localhost:5000/tasks")
  //     setTasks(res.data)

  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // const handleEdit = async (task: Task) => {
  //   const newTitle = prompt("Edit task title", task.title)

  //   if (!newTitle) return

  //   try {
  //     await axios.put(`http://localhost:5000/tasks/${task._id}`, {
  //       ...task,
  //       title: newTitle,
  //     })

  //     const res = await axios.get("http://localhost:5000/tasks")
  //     setTasks(res.data)

  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  const handleEdit = (task: Task) => {
    setEditingTask(task)
    setTitle(task.title)
    setDueDate(task.dueDate || "")
    setOpen(true)
  }

  const handleReschedule = (task: Task) => {
    setEditingTask(task)
    setTitle(task.title)
    setDueDate(task.dueDate || "")
    setOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Weekly / Monthly</h1>
          <p className="text-sm text-muted-foreground">Plan and organize your schedule</p>
        </div>

        {/* <Button className="gap-2" onClick={handleAddEvent}> */}
        <Button className="gap-2" onClick={() => setOpen(true)}>
          <Plus className="h-4 w-4" />
          Add Event
        </Button>
      </div>



      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => setCurrentDate(new Date())}>Today</Button>
                  <Button variant="outline" size="icon" onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-7 mb-2">
                {daysOfWeek.map(day => <div key={day} className="text-center text-sm">{day}</div>)}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => {
                  if (!day) return <div key={index} />

                  const dayTasks = getTasksForDay(day)

                  const today = new Date()

                  const isToday =
                    day === today.getDate() &&
                    month === today.getMonth() &&
                    year === today.getFullYear()

                  const isSelected = selectedDay === day

                  return (
                    <div
                      key={index}
                      onClick={() => handleDayClick(day)}
                      className={`min-h-24 border rounded-lg p-2 cursor-pointer transition
  ${isSelected
                          ? "bg-primary text-white"
                          : isToday
                            ? "bg-primary/10 border-primary"
                            : "hover:bg-accent/40"
                        }`}
                    >
                      <div className="text-sm font-medium">{day}</div>
                      <div className="space-y-1 mt-1">
                        {dayTasks.slice(0, 2).map((task, i) => (
                          <div key={i} className="text-xs px-1 py-0.5 rounded bg-primary text-white truncate">
                            {task.title}
                          </div>
                        ))}
                        {dayTasks.length > 2 && <div className="text-xs text-muted-foreground">+{dayTasks.length - 2} more</div>}
                      </div>
                    </div>

                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 max-h-75 overflow-y-auto pr-2">
              {upcomingTasks.map((task, i) => (
                <div key={i} className="text-sm">
                  <p className="font-medium">{task.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(task.dueDate!).toDateString()}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Task Title</Label>
              <Input
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Select Date</Label>
              <Input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <Button className="w-full" onClick={handleAddEvent}>
              Save Event
            </Button>
          </div>
        </DialogContent>
      </Dialog>


      <Dialog open={taskDialogOpen} onOpenChange={setTaskDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Tasks for {selectedDay}{" "}
              {currentDate.toLocaleString("default", { month: "long" })}
            </DialogTitle>
          </DialogHeader>

          {selectedTasks.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No tasks for this day
            </p>
          ) : (
            <div className="space-y-3 max-h-75 overflow-y-auto pr-2">
              {selectedTasks.map((task) => (
                <div
                  key={task._id}
                  className="flex items-center justify-between border rounded-lg p-3"
                >
                  <span className="text-sm font-medium">{task.title}</span>

                  <div className="flex gap-2">

                    {/* Edit */}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(task)}
                    >
                      Edit
                    </Button>

                    {/* Reschedule */}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleReschedule(task)}
                    >
                      Reschedule
                    </Button>

                    {/* Delete */}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </Button>

                  </div>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div >


  )
}