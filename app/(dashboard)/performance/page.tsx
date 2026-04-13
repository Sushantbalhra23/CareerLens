// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"
// import {
//   TrendingUp,
//   TrendingDown,
//   Target,
//   Award,
//   Flame,
//   Clock,
//   BookOpen,
//   Briefcase,
//   Code,
//   Brain
// } from "lucide-react"
// import { cn } from "@/lib/utils"
// import {
//   RadialBarChart,
//   RadialBar,
//   ResponsiveContainer,
//   PolarAngleAxis,
// } from "recharts"

// const overallScore = [{ name: "score", value: 78, fill: "hsl(var(--primary))" }]

// const performanceMetrics = [
//   {
//     label: "Task Completion Rate",
//     value: 85,
//     trend: "+5%",
//     isPositive: true,
//     icon: Target,
//   },
//   {
//     label: "Consistency Score",
//     value: 72,
//     trend: "-3%",
//     isPositive: false,
//     icon: Flame,
//   },
//   {
//     label: "Learning Progress",
//     value: 68,
//     trend: "+12%",
//     isPositive: true,
//     icon: BookOpen,
//   },
//   {
//     label: "Career Activities",
//     value: 55,
//     trend: "+8%",
//     isPositive: true,
//     icon: Briefcase,
//   },
// ]

// const achievements = [
//   { title: "7-Day Streak", description: "Completed tasks for 7 consecutive days", icon: Flame, earned: true },
//   { title: "Fast Learner", description: "Completed 5 courses in a month", icon: Brain, earned: true },
//   { title: "Code Master", description: "Solved 100 coding problems", icon: Code, earned: false, progress: 72 },
//   { title: "Career Champion", description: "Applied to 20 internships", icon: Briefcase, earned: false, progress: 45 },
// ]

// const weeklyBreakdown = [
//   { category: "Learning", hours: 12, target: 15, color: "bg-chart-1" },
//   { category: "Career Development", hours: 6, target: 8, color: "bg-primary" },
//   { category: "Skill Practice", hours: 8, target: 10, color: "bg-chart-3" },
//   { category: "Project Work", hours: 10, target: 12, color: "bg-chart-4" },
// ]

// const recentActivity = [
//   { action: "Completed React Hooks module", time: "2 hours ago", points: "+50" },
//   { action: "Applied to TechCorp internship", time: "5 hours ago", points: "+30" },
//   { action: "Solved 3 LeetCode problems", time: "Yesterday", points: "+45" },
//   { action: "Finished portfolio update", time: "Yesterday", points: "+40" },
//   { action: "Attended career workshop", time: "2 days ago", points: "+25" },
// ]

// export default function PerformancePage() {
//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-2xl font-semibold text-foreground">Performance</h1>
//         <p className="text-sm text-muted-foreground">
//           Track your overall performance and achievements
//         </p>
//       </div>

//       {/* Top Row - Overall Score + Metrics */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* Overall Score */}
//         <Card className="col-span-4 border-border/50">
//           <CardHeader>
//             <CardTitle className="text-base">Overall Performance</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-48 relative">
//               <ResponsiveContainer width="100%" height="100%">
//                 <RadialBarChart
//                   cx="50%"
//                   cy="50%"
//                   innerRadius="60%"
//                   outerRadius="90%"
//                   data={overallScore}
//                   startAngle={90}
//                   endAngle={-270}
//                 >
//                   <PolarAngleAxis
//                     type="number"
//                     domain={[0, 100]}
//                     angleAxisId={0}
//                     tick={false}
//                   />
//                   <RadialBar
//                     background
//                     dataKey="value"
//                     cornerRadius={10}
//                   />
//                 </RadialBarChart>
//               </ResponsiveContainer>
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <span className="text-4xl font-bold text-foreground">78</span>
//                 <span className="text-sm text-muted-foreground">out of 100</span>
//               </div>
//             </div>
//             <div className="flex items-center justify-center gap-2 mt-2">
//               <TrendingUp className="h-4 w-4 text-chart-1" />
//               <span className="text-sm text-chart-1">+5 points this week</span>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Metrics Grid */}
//         <div className="col-span-8 grid grid-cols-2 gap-4">
//           {performanceMetrics.map((metric) => {
//             const Icon = metric.icon
//             return (
//               <Card key={metric.label} className="border-border/50">
//                 <CardContent className="pt-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 rounded-lg bg-primary/10">
//                         <Icon className="h-5 w-5 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground">{metric.label}</p>
//                         <p className="text-2xl font-semibold">{metric.value}%</p>
//                       </div>
//                     </div>
//                     <Badge
//                       variant="outline"
//                       className={cn(
//                         "text-xs",
//                         metric.isPositive
//                           ? "border-chart-1/20 text-chart-1"
//                           : "border-destructive/20 text-destructive"
//                       )}
//                     >
//                       {metric.isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
//                       {metric.trend}
//                     </Badge>
//                   </div>
//                   <Progress value={metric.value} className="mt-3 h-1.5" />
//                 </CardContent>
//               </Card>
//             )
//           })}
//         </div>
//       </div>

//       {/* Middle Row - Weekly Breakdown + Achievements */}
//       <div className="grid grid-cols-2 gap-6">
//         {/* Weekly Time Breakdown */}
//         <Card className="border-border/50">
//           <CardHeader>
//             <CardTitle className="text-base flex items-center gap-2">
//               <Clock className="h-4 w-4" />
//               Weekly Time Breakdown
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             {weeklyBreakdown.map((item) => (
//               <div key={item.category} className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium">{item.category}</span>
//                   <span className="text-sm text-muted-foreground">
//                     {item.hours}h / {item.target}h
//                   </span>
//                 </div>
//                 <div className="relative h-2 w-full rounded-full bg-muted">
//                   <div
//                     className={cn("absolute h-2 rounded-full", item.color)}
//                     style={{ width: `${(item.hours / item.target) * 100}%` }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </CardContent>
//         </Card>

//         {/* Achievements */}
//         <Card className="border-border/50">
//           <CardHeader>
//             <CardTitle className="text-base flex items-center gap-2">
//               <Award className="h-4 w-4" />
//               Achievements
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-3">
//             {achievements.map((achievement) => {
//               const Icon = achievement.icon
//               return (
//                 <div
//                   key={achievement.title}
//                   className={cn(
//                     "flex items-center gap-3 p-3 rounded-lg border",
//                     achievement.earned
//                       ? "border-primary/20 bg-primary/5"
//                       : "border-border bg-muted/30"
//                   )}
//                 >
//                   <div className={cn(
//                     "p-2 rounded-lg",
//                     achievement.earned ? "bg-primary/10" : "bg-muted"
//                   )}>
//                     <Icon className={cn(
//                       "h-5 w-5",
//                       achievement.earned ? "text-primary" : "text-muted-foreground"
//                     )} />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2">
//                       <p className={cn(
//                         "text-sm font-medium",
//                         !achievement.earned && "text-muted-foreground"
//                       )}>
//                         {achievement.title}
//                       </p>
//                       {achievement.earned && (
//                         <Badge className="text-xs bg-primary/10 text-primary border-0">
//                           Earned
//                         </Badge>
//                       )}
//                     </div>
//                     <p className="text-xs text-muted-foreground">
//                       {achievement.description}
//                     </p>
//                     {!achievement.earned && achievement.progress && (
//                       <div className="flex items-center gap-2 mt-1">
//                         <Progress value={achievement.progress} className="h-1 flex-1" />
//                         <span className="text-xs text-muted-foreground">
//                           {achievement.progress}%
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )
//             })}
//           </CardContent>
//         </Card>
//       </div>

//       {/* Recent Activity */}
//       <Card className="border-border/50">
//         <CardHeader>
//           <CardTitle className="text-base">Recent Activity</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-3">
//             {recentActivity.map((activity, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
//               >
//                 <div>
//                   <p className="text-sm font-medium">{activity.action}</p>
//                   <p className="text-xs text-muted-foreground">{activity.time}</p>
//                 </div>
//                 <Badge variant="outline" className="text-chart-1 border-chart-1/20">
//                   {activity.points}
//                 </Badge>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// "use client"

// import { useEffect, useState } from "react"
// import axios from "@/lib/api"
// import api from "@/lib/api"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"
// import {
//   TrendingUp,
//   TrendingDown,
//   Target,
//   Award,
//   Flame,
//   Clock,
//   BookOpen,
//   Briefcase,
//   Code,
//   Brain
// } from "lucide-react"
// import { cn } from "@/lib/utils"
// import {
//   RadialBarChart,
//   RadialBar,
//   ResponsiveContainer,
//   PolarAngleAxis,
// } from "recharts"

// export default function PerformancePage() {

//   const [tasks, setTasks] = useState<any[]>([])
//   const [metrics, setMetrics] = useState<any[]>([])
//   const [weeklyBreakdown, setWeeklyBreakdown] = useState<any[]>([])
//   const [recentActivity, setRecentActivity] = useState<any[]>([])
//   const [aiComment, setAiComment] = useState("")
//   const [overallScore, setOverallScore] = useState<
//     { name: string; value: number; fill?: string }[]
//   >([
//     { name: "score", value: 0 }
//   ])

//   // ✅ FETCH DATA (TOP LEVEL)
//   useEffect(() => {
//     fetchData()
//   }, [])

//   const fetchData = async () => {
//     try {
//       const res = await axios.get("/tasks")
//       const data = res.data

//       setTasks(data)

//       calculateMetrics(data)
//       // (keep your other functions too)
//       calculateWeekly(data)
//       calculateRecent(data)

//     } catch (err) {
//       console.error(err)
//     }
//   }

//   // ✅ METRICS (ONLY LOGIC HERE)
//   const calculateMetrics = (tasks: any[]) => {

//     const total = tasks.length
//     const done = tasks.filter(t => t.status === "done").length

//     const completionRate = total ? Math.round((done / total) * 100) : 0

//     const uniqueDays = new Set(
//       tasks
//         .filter(t => t.createdAt)
//         .map(t => new Date(t.createdAt).toDateString())
//     )
//     const consistency = Math.min(100, Math.round((uniqueDays.size / 7) * 100))

//     const learningTasks = tasks.filter(
//       t => t.skill && t.status === "done"
//     )
//     const learningProgress = total
//       ? Math.round((learningTasks.length / total) * 100)
//       : 0

//     const careerTasks = tasks.filter(
//       t => t.type === "career" && t.status === "done"
//     )
//     const careerProgress = total
//       ? Math.round((careerTasks.length / total) * 100)
//       : 0

//     let comment = ""

//     if (completionRate < 50) {
//       comment = "You are completing less than half your tasks. Try reducing workload and finishing tasks fully."
//     }
//     else if (consistency < 50) {
//       comment = "Your consistency is low. Try working daily even if it's small tasks."
//     }
//     else if (learningProgress > 60) {
//       comment = "Great focus on learning. You're building strong skills!"
//     }
//     else {
//       comment = "Good progress. Keep improving consistency and task completion."
//     }

//     setAiComment(comment)

//     // ✅ SET METRICS
//     setMetrics([
//       {
//         label: "Task Completion Rate",
//         value: completionRate,
//         trend: "+",
//         isPositive: true,
//         icon: Target,
//       },
//       {
//         label: "Consistency Score",
//         value: consistency,
//         trend: "",
//         isPositive: consistency > 50,
//         icon: Flame,
//       },
//       {
//         label: "Learning Progress",
//         value: learningProgress,
//         trend: "",
//         isPositive: true,
//         icon: BookOpen,
//       },
//       {
//         label: "Career Activities",
//         value: careerProgress,
//         trend: "",
//         isPositive: true,
//         icon: Briefcase,
//       },
//     ])

//     // ✅ OVERALL SCORE
//     const score = Math.round(
//       (completionRate * 0.4) +
//       (consistency * 0.3) +
//       (learningProgress * 0.3)
//     )

//     setOverallScore([
//       {
//         name: "score",
//         value: Number(score) || 0,
//         fill: "hsl(var(--primary))"
//       }
//     ])
//   }

//   // ✅ WEEKLY BREAKDOWN
//   const calculateWeekly = (tasks: any[]) => {
//     const breakdown = {
//       learning: 0,
//       career: 0,
//       skill: 0,
//       project: 0,
//     }

//     tasks.forEach(t => {
//       if (t.skill) breakdown.learning++
//       if (t.type === "career") breakdown.career++
//       if (t.type === "daily") breakdown.skill++
//       if (t.type === "kanban") breakdown.project++
//     })

//     setWeeklyBreakdown([
//       { category: "Learning", hours: breakdown.learning, target: 15, color: "bg-chart-1" },
//       { category: "Career Development", hours: breakdown.career, target: 8, color: "bg-primary" },
//       { category: "Skill Practice", hours: breakdown.skill, target: 10, color: "bg-chart-3" },
//       { category: "Project Work", hours: breakdown.project, target: 12, color: "bg-chart-4" },
//     ])
//   }

//   // ✅ RECENT ACTIVITY
//   const calculateRecent = (tasks: any[]) => {
//     const recent = tasks
//       .filter(t => t.status === "done")
//       .slice(-5)
//       .reverse()
//       .map(t => ({
//         action: `Completed ${t.title}`,
//         time: new Date(t.createdAt).toLocaleString(),
//         points: "+10"
//       }))

//     setRecentActivity(recent)
//   }

//   const achievements = [
//     {
//       title: "7-Day Streak",
//       description: "Completed tasks for 7 consecutive days",
//       icon: Flame,
//       earned: tasks.length > 7,
//     },
//     {
//       title: "Fast Learner",
//       description: "Completed 5 tasks",
//       icon: Brain,
//       earned: tasks.filter(t => t.status === "done").length >= 5,
//     },
//     {
//       title: "Code Master",
//       description: "Complete 20 tasks",
//       icon: Code,
//       earned: false,
//       progress: Math.min(100, tasks.length * 5),
//     },
//     {
//       title: "Career Champion",
//       description: "Do 10 career tasks",
//       icon: Briefcase,
//       earned: false,
//       progress: tasks.filter(t => t.type === "career").length * 10,
//     },
//   ]

//   return (
//   <div className="space-y-6">

// <div>
//   <h1 className="text-2xl font-semibold text-foreground">Performance</h1>
//   <p className="text-sm text-muted-foreground">
//     Track your overall performance and achievements
//   </p>
// </div>

// {/* TOP */}
// <div className="grid grid-cols-12 gap-6">

//   <Card className="col-span-4 border-border/50">
//     <CardHeader>
//       <CardTitle className="text-base">Overall Performance</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <div className="h-48 relative">
//         <ResponsiveContainer width="100%" height="100%">
//           <RadialBarChart
//             cx="50%"
//             cy="50%"
//             innerRadius="60%"
//             outerRadius="90%"
//             data={overallScore}
//             startAngle={90}
//             endAngle={-270}
//           >
//             <PolarAngleAxis
//               type="number"
//               domain={[0, 100]}
//               tick={false} />
//             <RadialBar dataKey="value" cornerRadius={10} />
//           </RadialBarChart>
//         </ResponsiveContainer>
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <span className="text-4xl font-bold">{overallScore[0].value}</span>
//           <span className="text-sm text-muted-foreground">out of 100</span>
//         </div>
//       </div>
//     </CardContent>
//   </Card>

//   <div className="col-span-8 grid grid-cols-2 gap-4">
//     {metrics.map((metric) => {
//       const Icon = metric.icon
//       return (
//         <Card key={metric.label}>
//           <CardContent className="pt-4">
//             <div className="flex justify-between">
//               <div className="flex gap-3">
//                 <Icon className="h-5 w-5" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">{metric.label}</p>
//                   <p className="text-2xl font-semibold">{metric.value}%</p>
//                 </div>
//               </div>
//             </div>
//             <Progress value={metric.value} className="mt-3 h-1.5" />
//           </CardContent>
//         </Card>
//       )
//     })}
//   </div>

// </div>

// {/* AI Insights */}
// <Card className="border-border/50">
//   <CardHeader>
//     <CardTitle className="text-base">AI Insights</CardTitle>
//   </CardHeader>
//   <CardContent>
//     <p className="text-sm text-muted-foreground">
//       {aiComment}
//     </p>
//   </CardContent>
// </Card>

// {/* WEEKLY + ACHIEVEMENTS */}
// <div className="grid grid-cols-2 gap-6">

//   <Card>
//     <CardHeader>
//       <CardTitle>Weekly Time Breakdown</CardTitle>
//     </CardHeader>
//     <CardContent className="space-y-4">
//       {weeklyBreakdown.map((item) => (
//         <div key={item.category}>
//           <div className="flex justify-between">
//             <span>{item.category}</span>
//             <span>{item.hours} / {item.target}</span>
//           </div>
//           <Progress value={(item.hours / item.target) * 100} />
//         </div>
//       ))}
//     </CardContent>
//   </Card>

//   <Card>
//     <CardHeader>
//       <CardTitle>Achievements</CardTitle>
//     </CardHeader>
//     <CardContent className="space-y-3">
//       {achievements.map((a) => {
//         const Icon = a.icon
//         return (
//           <div key={a.title} className="flex gap-3">
//             <Icon className="h-5 w-5" />
//             <div>
//               <p>{a.title}</p>
//               <p className="text-xs">{a.description}</p>
//               {!a.earned && a.progress && (
//                 <Progress value={a.progress} />
//               )}
//             </div>
//           </div>
//         )
//       })}
//     </CardContent>
//   </Card>

// </div>

// {/* RECENT */}
// <Card>
//   <CardHeader>
//     <CardTitle>Recent Activity</CardTitle>
//   </CardHeader>
//   <CardContent>
//     {recentActivity.map((a, i) => (
//       <div key={i} className="flex justify-between py-2">
//         <div>
//           <p>{a.action}</p>
//           <p className="text-xs text-muted-foreground">{a.time}</p>
//         </div>
//         <Badge>{a.points}</Badge>
//       </div>
//     ))}
//   </CardContent>
// </Card>

//   </div>
// )
// }




"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  TrendingDown,
  Target,
  Award,
  Flame,
  Clock,
  BookOpen,
  Briefcase,
  Code,
  Brain
} from "lucide-react"
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts"

type Task = {
  _id: string
  title: string
  status: "backlog" | "todo" | "doing" | "review" | "done"
  type?: string          // "kanban" | "daily" | "career"
  skill?: string
  priority?: "low" | "medium" | "high"
  dueDate?: string
  createdAt?: string
  completed?: boolean
}

export default function PerformancePage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [metrics, setMetrics] = useState<any[]>([])
  const [weeklyBreakdown, setWeeklyBreakdown] = useState<any[]>([])
  const [recentActivity, setRecentActivity] = useState<any[]>([])
  const [aiComment, setAiComment] = useState("")
  const [overallScore, setOverallScore] = useState<{ name: string; value: number; fill?: string }[]>([
    { name: "score", value: 0 }
  ])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get<Task[]>("http://localhost:5000/tasks")
      const data = res.data
      setTasks(data)
      calculateMetrics(data)
      calculateWeekly(data)
      calculateRecent(data)
    } catch (err) {
      console.error(err)
    }
  }

  const calculateMetrics = (tasks: Task[]) => {
    const total = tasks.length
    const done = tasks.filter(t => t.status === "done").length
    const completionRate = total ? Math.round((done / total) * 100) : 0

    const uniqueDays = new Set(tasks.filter(t => t.createdAt).map(t => new Date(t.createdAt!).toDateString()))
    const consistency = Math.min(100, Math.round((uniqueDays.size / 7) * 100))

    const learningTasks = tasks.filter(t => t.skill && t.status === "done")
    const learningProgress = total ? Math.round((learningTasks.length / total) * 100) : 0

    const careerTasks = tasks.filter(t => t.type === "career" && t.status === "done")
    const careerProgress = total ? Math.round((careerTasks.length / total) * 100) : 0

    let comment = ""
    if (completionRate < 50) comment = "You are completing less than half your tasks. Try reducing workload and finishing tasks fully."
    else if (consistency < 50) comment = "Your consistency is low. Try working daily even if it's small tasks."
    else if (learningProgress > 60) comment = "Great focus on learning. You're building strong skills!"
    else comment = "Good progress. Keep improving consistency and task completion."

    setAiComment(comment)

    setMetrics([
      { label: "Task Completion Rate", value: completionRate, trend: "+", isPositive: true, icon: Target },
      { label: "Consistency Score", value: consistency, trend: "", isPositive: consistency > 50, icon: Flame },
      { label: "Learning Progress", value: learningProgress, trend: "", isPositive: true, icon: BookOpen },
      { label: "Career Activities", value: careerProgress, trend: "", isPositive: true, icon: Briefcase },
    ])

    const score = Math.round((completionRate * 0.4) + (consistency * 0.3) + (learningProgress * 0.3))
    setOverallScore([{ name: "score", value: Number(score) || 0, fill: "hsl(var(--primary))" }])
  }

  const calculateWeekly = (tasks: Task[]) => {
    const breakdown = { learning: 0, career: 0, skill: 0, project: 0 }
    tasks.forEach(t => {
      if (t.skill) breakdown.learning++
      if (t.type === "career") breakdown.career++
      if (t.type === "daily") breakdown.skill++
      if (t.type === "kanban") breakdown.project++
    })

    setWeeklyBreakdown([
      { category: "Learning", hours: breakdown.learning, target: 15, color: "bg-chart-1" },
      { category: "Career Development", hours: breakdown.career, target: 8, color: "bg-primary" },
      { category: "Skill Practice", hours: breakdown.skill, target: 10, color: "bg-chart-3" },
      { category: "Project Work", hours: breakdown.project, target: 12, color: "bg-chart-4" },
    ])
  }

  const calculateRecent = (tasks: Task[]) => {
    const recent = tasks
      .filter(t => t.status === "done")
      .slice(-5)
      .reverse()
      .map(t => ({
        action: `Completed ${t.title}`,
        time: new Date(t.createdAt!).toLocaleString(),
        points: "+10"
      }))
    setRecentActivity(recent)
  }

  const achievements = [
    { title: "7-Day Streak", description: "Completed tasks for 7 consecutive days", icon: Flame, earned: tasks.length > 7 },
    { title: "Fast Learner", description: "Completed 5 tasks", icon: Brain, earned: tasks.filter(t => t.status === "done").length >= 5 },
    { title: "Code Master", description: "Complete 20 tasks", icon: Code, earned: false, progress: Math.min(100, tasks.length * 5) },
    { title: "Career Champion", description: "Do 10 career tasks", icon: Briefcase, earned: false, progress: tasks.filter(t => t.type === "career").length * 10 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Performance</h1>
        <p className="text-sm text-muted-foreground">
          Track your overall performance and achievements
        </p>
      </div>

      {/* TOP */}
      <div className="grid grid-cols-12 gap-6">

        <Card className="col-span-4 border-border/50">
          <CardHeader>
            <CardTitle className="text-base">Overall Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="90%"
                  data={overallScore}
                  startAngle={90}
                  endAngle={-270}
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    tick={false} />
                  <RadialBar dataKey="value" cornerRadius={10} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">{overallScore[0].value}</span>
                <span className="text-sm text-muted-foreground">out of 100</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="col-span-8 grid grid-cols-2 gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <Card key={metric.label}>
                <CardContent className="pt-4">
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <Icon className="h-5 w-5" />
                      <div>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                        <p className="text-2xl font-semibold">{metric.value}%</p>
                      </div>
                    </div>
                  </div>
                  <Progress value={metric.value} className="mt-3 h-1.5" />
                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>

      {/* AI Insights */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-base">AI Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {aiComment}
          </p>
        </CardContent>
      </Card>

      {/* WEEKLY + ACHIEVEMENTS */}
      <div className="grid grid-cols-2 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Weekly Time Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {weeklyBreakdown.map((item) => (
              <div key={item.category}>
                <div className="flex justify-between">
                  <span>{item.category}</span>
                  <span>{item.hours} / {item.target}</span>
                </div>
                <Progress value={(item.hours / item.target) * 100} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((a) => {
              const Icon = a.icon
              return (
                <div key={a.title} className="flex gap-3">
                  <Icon className="h-5 w-5" />
                  <div>
                    <p>{a.title}</p>
                    <p className="text-xs">{a.description}</p>
                    {!a.earned && a.progress && (
                      <Progress value={a.progress} />
                    )}
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

      </div>

      {/* RECENT */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          {recentActivity.map((a, i) => (
            <div key={i} className="flex justify-between py-2">
              <div>
                <p>{a.action}</p>
                <p className="text-xs text-muted-foreground">{a.time}</p>
              </div>
              <Badge>{a.points}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>    </div>
  )
}