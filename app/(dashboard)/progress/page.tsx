// "use client"
// import { useState, useEffect } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { TrendingUp, TrendingDown, Calendar } from "lucide-react"
// import {
//   Area,
//   AreaChart,
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Line,
//   LineChart,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts"

// const weeklyData = [
//   { day: "Mon", tasks: 8, hours: 6, productivity: 85 },
//   { day: "Tue", tasks: 12, hours: 7, productivity: 92 },
//   { day: "Wed", tasks: 6, hours: 4, productivity: 70 },
//   { day: "Thu", tasks: 10, hours: 6, productivity: 88 },
//   { day: "Fri", tasks: 14, hours: 8, productivity: 95 },
//   { day: "Sat", tasks: 5, hours: 3, productivity: 65 },
//   { day: "Sun", tasks: 3, hours: 2, productivity: 50 },
// ]

// const monthlyProgress = [
//   { week: "Week 1", learning: 20, career: 15, skills: 25 },
//   { week: "Week 2", learning: 35, career: 22, skills: 30 },
//   { week: "Week 3", learning: 45, career: 35, skills: 42 },
//   { week: "Week 4", learning: 60, career: 48, skills: 55 },
// ]

// const skillsData = [
//   { name: "React", current: 75, target: 90 },
//   { name: "TypeScript", current: 60, target: 80 },
//   { name: "Node.js", current: 45, target: 70 },
//   { name: "Data Structures", current: 55, target: 85 },
//   { name: "System Design", current: 30, target: 60 },
// ]

// export default function ProgressPage() {

//   const [weeklyData, setWeeklyData] = useState<any[]>([])
//   const [summary, setSummary] = useState({
//     totalTasks: 0,
//     completedTasks: 0,
//     productivity: 0,
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await API.get("/tasks")

//       const tasks = res.data.filter((t: any) => t.type === "daily")

//       // 🔹 last 7 days
//       const daysMap: any = {}

//       for (let i = 6; i >= 0; i--) {
//         const d = new Date()
//         d.setDate(d.getDate() - i)

//         const key = d.toLocaleDateString("en-US", { weekday: "short" })
//         daysMap[key] = { day: key, tasks: 0, completed: 0 }
//       }

//       tasks.forEach((task: any) => {
//         const date = new Date(task.dueDate)
//         const key = date.toLocaleDateString("en-US", { weekday: "short" })

//         if (daysMap[key]) {
//           daysMap[key].tasks++

//           if (task.completed) {
//             daysMap[key].completed++
//           }
//         }
//       })

//       const finalWeekly = Object.values(daysMap).map((d: any) => ({
//         ...d,
//         productivity:
//           d.tasks === 0 ? 0 : Math.round((d.completed / d.tasks) * 100),
//       }))

//       // 🔹 summary
//       const total = tasks.length
//       const completed = tasks.filter((t: any) => t.completed).length

//       setWeeklyData(finalWeekly)

//       setSummary({
//         totalTasks: total,
//         completedTasks: completed,
//         productivity:
//           total === 0 ? 0 : Math.round((completed / total) * 100),
//       })
//     }

//     fetchData()
//   }, [])

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold text-foreground">Progress Graph</h1>
//           <p className="text-sm text-muted-foreground">
//             Track your learning and career progress over time
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <Button variant="outline" size="sm" className="gap-2">
//             <Calendar className="h-4 w-4" />
//             This Month
//           </Button>
//         </div>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-4 gap-4">
//         <Card className="border-border/50">
//           <CardContent className="pt-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-muted-foreground">Total Tasks</p>
//                 <p className="text-2xl font-semibold">
//                   {summary.totalTasks}
//                 </p>
//               </div>
//               <div className="flex items-center gap-1 text-chart-1">
//                 <TrendingUp className="h-4 w-4" />
//                 <span className="text-sm">+12%</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="border-border/50">
//           <CardContent className="pt-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-muted-foreground">Study Hours</p>
//                 <p className="text-2xl font-semibold">36h</p>
//               </div>
//               <div className="flex items-center gap-1 text-chart-1">
//                 <TrendingUp className="h-4 w-4" />
//                 <span className="text-sm">+8%</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="border-border/50">
//           <CardContent className="pt-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-muted-foreground">Avg Productivity</p>
//                 <p className="text-2xl font-semibold">
//                   {summary.productivity}%
//                 </p>
//               </div>
//               <div className="flex items-center gap-1 text-destructive">
//                 <TrendingDown className="h-4 w-4" />
//                 <span className="text-sm">-3%</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="border-border/50">
//           <CardContent className="pt-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-muted-foreground">Goals Achieved</p>
//                 <p className="text-2xl font-semibold">12</p>
//               </div>
//               <div className="flex items-center gap-1 text-chart-1">
//                 <TrendingUp className="h-4 w-4" />
//                 <span className="text-sm">+25%</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid grid-cols-2 gap-6">
//         {/* Weekly Activity */}
//         <Card className="border-border/50">
//           <CardHeader>
//             <CardTitle className="text-base">Weekly Activity</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={weeklyData}>
//                   <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
//                   <XAxis dataKey="day" className="text-xs" />
//                   <YAxis className="text-xs" />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: 'hsl(var(--card))',
//                       border: '1px solid hsl(var(--border))',
//                       borderRadius: '8px'
//                     }}
//                   />
//                   <Bar dataKey="completed" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Productivity Trend */}
//         <Card className="border-border/50">
//           <CardHeader>
//             <CardTitle className="text-base">Productivity Trend</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={weeklyData}>
//                   <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
//                   <XAxis dataKey="day" className="text-xs" />
//                   <YAxis className="text-xs" />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: 'hsl(var(--card))',
//                       border: '1px solid hsl(var(--border))',
//                       borderRadius: '8px'
//                     }}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="productivity"
//                     stroke="hsl(var(--primary))"
//                     strokeWidth={2}
//                     dot={{ fill: 'hsl(var(--primary))' }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Monthly Progress */}
//       <Card className="border-border/50">
//         <CardHeader>
//           <CardTitle className="text-base">Monthly Progress by Category</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={monthlyProgress}>
//                 <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
//                 <XAxis dataKey="week" className="text-xs" />
//                 <YAxis className="text-xs" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: 'hsl(var(--card))',
//                     border: '1px solid hsl(var(--border))',
//                     borderRadius: '8px'
//                   }}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="learning"
//                   stackId="1"
//                   stroke="hsl(var(--chart-1))"
//                   fill="hsl(var(--chart-1))"
//                   fillOpacity={0.6}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="career"
//                   stackId="1"
//                   stroke="hsl(var(--chart-2))"
//                   fill="hsl(var(--chart-2))"
//                   fillOpacity={0.6}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="skills"
//                   stackId="1"
//                   stroke="hsl(var(--chart-3))"
//                   fill="hsl(var(--chart-3))"
//                   fillOpacity={0.6}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="flex justify-center gap-6 mt-4">
//             <div className="flex items-center gap-2">
//               <div className="h-3 w-3 rounded-full bg-chart-1" />
//               <span className="text-sm text-muted-foreground">Learning</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="h-3 w-3 rounded-full bg-chart-2" />
//               <span className="text-sm text-muted-foreground">Career</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="h-3 w-3 rounded-full bg-chart-3" />
//               <span className="text-sm text-muted-foreground">Skills</span>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Skills Progress */}
//       <Card className="border-border/50">
//         <CardHeader>
//           <CardTitle className="text-base">Skills Progress</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           {skillsData.map((skill) => (
//             <div key={skill.name} className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm font-medium">{skill.name}</span>
//                 <span className="text-sm text-muted-foreground">
//                   {skill.current}% / {skill.target}%
//                 </span>
//               </div>
//               <div className="relative h-2 w-full rounded-full bg-muted">
//                 <div
//                   className="absolute h-2 rounded-full bg-primary/30"
//                   style={{ width: `${skill.target}%` }}
//                 />
//                 <div
//                   className="absolute h-2 rounded-full bg-primary"
//                   style={{ width: `${skill.current}%` }}
//                 />
//               </div>
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }





// "use client"

// import { useState, useEffect } from "react"
// import API from "@/lib/api"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { TrendingUp, TrendingDown, Calendar } from "lucide-react"

// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts"

// export default function ProgressPage() {
//   const [weeklyData, setWeeklyData] = useState<any[]>([])
//   const [monthlyData, setMonthlyData] = useState<any[]>([])
//   const [skillsData, setSkillsData] = useState<any[]>([])
//   const [summary, setSummary] = useState({
//     total: 0,
//     done: 0,
//     productivity: 0,
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await API.get("/tasks")
//         const tasks = res.data

//         // =========================
//         // 🔹 SUMMARY (KANBAN BASED)
//         // =========================
//         const total = tasks.length
//         const done = tasks.filter((t: any) => t.status === "done").length

//         setSummary({
//           total,
//           done,
//           productivity: total === 0 ? 0 : Math.round((done / total) * 100),
//         })

//         // =========================
//         // 🔹 WEEKLY DATA (LAST 7 DAYS)
//         // =========================
//         const daysMap: any = {}

//         for (let i = 6; i >= 0; i--) {
//           const d = new Date()
//           d.setDate(d.getDate() - i)

//           const key = d.toLocaleDateString("en-US", { weekday: "short" })
//           daysMap[key] = { day: key, tasks: 0, done: 0 }
//         }

//         tasks.forEach((task: any) => {
//           const date = new Date(task.createdAt)
//           const key = date.toLocaleDateString("en-US", { weekday: "short" })

//           if (daysMap[key]) {
//             daysMap[key].tasks++
//             if (task.status === "done") {
//               daysMap[key].done++
//             }
//           }
//         })

//         const weekly = Object.values(daysMap).map((d: any) => ({
//           ...d,
//           productivity:
//             d.tasks === 0 ? 0 : Math.round((d.done / d.tasks) * 100),
//         }))

//         setWeeklyData(weekly)

//         // =========================
//         // 🔹 MONTHLY DATA (4 WEEKS)
//         // =========================
//         const weeks = [0, 1, 2, 3].map((i) => ({
//           week: `Week ${i + 1}`,
//           tasks: 0,
//         }))

//         tasks.forEach((task: any) => {
//           const diff =
//             (new Date().getTime() - new Date(task.createdAt).getTime()) /
//             (1000 * 60 * 60 * 24)

//           const weekIndex = Math.floor(diff / 7)
//           if (weekIndex >= 0 && weekIndex < 4) {
//             weeks[3 - weekIndex].tasks++
//           }
//         })

//         setMonthlyData(weeks)

//         // =========================
//         // 🔹 SKILLS DATA
//         // =========================
//         const skillMap: any = {}

//         tasks.forEach((task: any) => {
//           const skill = task.skill || "Other"

//           if (!skillMap[skill]) {
//             skillMap[skill] = { total: 0, done: 0 }
//           }

//           skillMap[skill].total++
//           if (task.status === "done") {
//             skillMap[skill].done++
//           }
//         })

//         const skills = Object.keys(skillMap).map((s) => ({
//           name: s,
//           value:
//             skillMap[s].total === 0
//               ? 0
//               : Math.round((skillMap[s].done / skillMap[s].total) * 100),
//         }))

//         setSkillsData(skills)
//       } catch (err) {
//         console.error(err)
//       }
//     }

//     fetchData()
//   }, [])

//   return (
//     <div className="space-y-6 max-w-7xl mx-auto">
//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold">Progress Tracker</h1>
//           <p className="text-sm text-muted-foreground">
//             Based on your Kanban workflow
//           </p>
//         </div>
//         <Button variant="outline" size="sm" className="gap-2">
//           <Calendar className="h-4 w-4" />
//           Last 7 Days
//         </Button>
//       </div>

//       {/* SUMMARY */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card>
//           <CardContent className="pt-4">
//             <p className="text-sm text-muted-foreground">Total Tasks</p>
//             <p className="text-2xl font-semibold tracking-tight">
//               {summary.total}
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="pt-4">
//             <p className="text-sm text-muted-foreground">Done</p>
//             <p className="text-2xl font-semibold tracking-tight">
//               {summary.done}
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="pt-4">
//             <p className="text-sm text-muted-foreground">Productivity</p>
//             <p className="text-2xl font-semibold tracking-tight">
//               {summary.productivity}%
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* WEEKLY + PRODUCTIVITY */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Weekly Activity</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-[260px] w-full">
//               <ResponsiveContainer>
//                 <BarChart data={weeklyData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="day" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="done" fill="hsl(var(--primary))" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Productivity Trend</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-[260px] w-full">
//               <ResponsiveContainer>
//                 <LineChart data={weeklyData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="day" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line
//                     dataKey="productivity"
//                     stroke="hsl(var(--primary))"
//                     strokeWidth={2}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* MONTHLY */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Monthly Progress</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[260px] w-full">
//             <ResponsiveContainer>
//               <AreaChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="week" />
//                 <YAxis />
//                 <Tooltip />
//                 <Area
//                   dataKey="tasks"
//                   stroke="hsl(var(--primary))"
//                   fill="hsl(var(--primary))"
//                   fillOpacity={0.4}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>

//       {/* SKILLS */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Skills Progress</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4 max-w-2xl">
//           {skillsData.map((skill) => (
//             <div key={skill.name}>
//               <div className="flex justify-between text-sm">
//                 <span>{skill.name}</span>
//                 <span>{skill.value}%</span>
//               </div>
//               <div className="h-2 bg-muted rounded-full mt-1">
//                 <div
//                   className="h-2 bg-primary rounded-full"
//                   style={{ width: `${skill.value}%` }}
//                 />
//               </div>
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import API from "@/lib/api"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Calendar } from "lucide-react"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

type Task = {
  _id: string
  title: string
  status: "backlog" | "todo" | "doing" | "review" | "done"
  type?: "kanban" | "daily" | "career"
  priority?: string
  createdAt: string
  dueDate?: string
  completed?: boolean
  skill?: string
}

type WeeklyData = {
  day: string
  tasks: number
  done: number
  productivity: number
}

type MonthlyData = {
  week: string
  tasks: number
}

type SkillData = {
  name: string
  value: number
}

export default function ProgressPage() {
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>([])
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([])
  const [skillsData, setSkillsData] = useState<SkillData[]>([])
  const [summary, setSummary] = useState({
    total: 0,
    done: 0,
    productivity: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get<Task[]>("/tasks")
        const tasks = res.data

        // =========================
        // 🔹 SUMMARY
        // =========================
        const total = tasks.length
        const done = tasks.filter((t) => t.status === "done").length

        setSummary({
          total,
          done,
          productivity: total === 0 ? 0 : Math.round((done / total) * 100),
        })

        // =========================
        // 🔹 WEEKLY DATA (LAST 7 DAYS)
        // =========================
        const daysMap: Record<string, WeeklyData> = {}

        for (let i = 6; i >= 0; i--) {
          const d = new Date()
          d.setDate(d.getDate() - i)
          const key = d.toLocaleDateString("en-US", { weekday: "short" })
          daysMap[key] = { day: key, tasks: 0, done: 0, productivity: 0 }
        }

        tasks.forEach((task) => {
          const date = new Date(task.createdAt)
          const key = date.toLocaleDateString("en-US", { weekday: "short" })
          if (daysMap[key]) {
            daysMap[key].tasks++
            if (task.status === "done") daysMap[key].done++
          }
        })

        const weekly: WeeklyData[] = Object.values(daysMap).map((d) => ({
          ...d,
          productivity: d.tasks === 0 ? 0 : Math.round((d.done / d.tasks) * 100),
        }))

        setWeeklyData(weekly)

        // =========================
        // 🔹 MONTHLY DATA (4 WEEKS)
        // =========================
        const weeks: MonthlyData[] = [0, 1, 2, 3].map((i) => ({
          week: `Week ${i + 1}`,
          tasks: 0,
        }))

        tasks.forEach((task) => {
          const diff =
            (new Date().getTime() - new Date(task.createdAt).getTime()) /
            (1000 * 60 * 60 * 24)

          const weekIndex = Math.floor(diff / 7)
          if (weekIndex >= 0 && weekIndex < 4) {
            weeks[3 - weekIndex].tasks++
          }
        })

        setMonthlyData(weeks)

        // =========================
        // 🔹 SKILLS DATA
        // =========================
        const skillMap: Record<string, { total: number; done: number }> = {}

        tasks.forEach((task) => {
          const skill = task.skill || "Other"
          if (!skillMap[skill]) skillMap[skill] = { total: 0, done: 0 }
          skillMap[skill].total++
          if (task.status === "done") skillMap[skill].done++
        })

        const skills: SkillData[] = Object.keys(skillMap).map((s) => ({
          name: s,
          value:
            skillMap[s].total === 0
              ? 0
              : Math.round((skillMap[s].done / skillMap[s].total) * 100),
        }))

        setSkillsData(skills)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Progress Tracker</h1>
          <p className="text-sm text-muted-foreground">Based on your Kanban workflow</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="h-4 w-4" />
          Last 7 Days
        </Button>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">Total Tasks</p>
            <p className="text-2xl font-semibold tracking-tight">{summary.total}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">Done</p>
            <p className="text-2xl font-semibold tracking-tight">{summary.done}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">Productivity</p>
            <p className="text-2xl font-semibold tracking-tight">{summary.productivity}%</p>
          </CardContent>
        </Card>
      </div>

      {/* WEEKLY + PRODUCTIVITY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-65 w-full">
              <ResponsiveContainer>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="done" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Productivity Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-65 w-full">
              <ResponsiveContainer>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="productivity" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* MONTHLY */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-65 w-full">
            <ResponsiveContainer>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Area dataKey="tasks" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* SKILLS */}
      <Card>
        <CardHeader>
          <CardTitle>Skills Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 max-w-2xl">
          {skillsData.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full mt-1">
                <div className="h-2 bg-primary rounded-full" style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}