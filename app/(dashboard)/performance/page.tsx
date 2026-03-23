"use client"

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
import { cn } from "@/lib/utils"
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts"

const overallScore = [{ name: "score", value: 78, fill: "hsl(var(--primary))" }]

const performanceMetrics = [
  {
    label: "Task Completion Rate",
    value: 85,
    trend: "+5%",
    isPositive: true,
    icon: Target,
  },
  {
    label: "Consistency Score",
    value: 72,
    trend: "-3%",
    isPositive: false,
    icon: Flame,
  },
  {
    label: "Learning Progress",
    value: 68,
    trend: "+12%",
    isPositive: true,
    icon: BookOpen,
  },
  {
    label: "Career Activities",
    value: 55,
    trend: "+8%",
    isPositive: true,
    icon: Briefcase,
  },
]

const achievements = [
  { title: "7-Day Streak", description: "Completed tasks for 7 consecutive days", icon: Flame, earned: true },
  { title: "Fast Learner", description: "Completed 5 courses in a month", icon: Brain, earned: true },
  { title: "Code Master", description: "Solved 100 coding problems", icon: Code, earned: false, progress: 72 },
  { title: "Career Champion", description: "Applied to 20 internships", icon: Briefcase, earned: false, progress: 45 },
]

const weeklyBreakdown = [
  { category: "Learning", hours: 12, target: 15, color: "bg-chart-1" },
  { category: "Career Development", hours: 6, target: 8, color: "bg-primary" },
  { category: "Skill Practice", hours: 8, target: 10, color: "bg-chart-3" },
  { category: "Project Work", hours: 10, target: 12, color: "bg-chart-4" },
]

const recentActivity = [
  { action: "Completed React Hooks module", time: "2 hours ago", points: "+50" },
  { action: "Applied to TechCorp internship", time: "5 hours ago", points: "+30" },
  { action: "Solved 3 LeetCode problems", time: "Yesterday", points: "+45" },
  { action: "Finished portfolio update", time: "Yesterday", points: "+40" },
  { action: "Attended career workshop", time: "2 days ago", points: "+25" },
]

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Performance</h1>
        <p className="text-sm text-muted-foreground">
          Track your overall performance and achievements
        </p>
      </div>

      {/* Top Row - Overall Score + Metrics */}
      <div className="grid grid-cols-12 gap-6">
        {/* Overall Score */}
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
                    angleAxisId={0}
                    tick={false}
                  />
                  <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={10}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-foreground">78</span>
                <span className="text-sm text-muted-foreground">out of 100</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <TrendingUp className="h-4 w-4 text-chart-1" />
              <span className="text-sm text-chart-1">+5 points this week</span>
            </div>
          </CardContent>
        </Card>

        {/* Metrics Grid */}
        <div className="col-span-8 grid grid-cols-2 gap-4">
          {performanceMetrics.map((metric) => {
            const Icon = metric.icon
            return (
              <Card key={metric.label} className="border-border/50">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                        <p className="text-2xl font-semibold">{metric.value}%</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs",
                        metric.isPositive
                          ? "border-chart-1/20 text-chart-1"
                          : "border-destructive/20 text-destructive"
                      )}
                    >
                      {metric.isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                      {metric.trend}
                    </Badge>
                  </div>
                  <Progress value={metric.value} className="mt-3 h-1.5" />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Middle Row - Weekly Breakdown + Achievements */}
      <div className="grid grid-cols-2 gap-6">
        {/* Weekly Time Breakdown */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Weekly Time Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {weeklyBreakdown.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.hours}h / {item.target}h
                  </span>
                </div>
                <div className="relative h-2 w-full rounded-full bg-muted">
                  <div
                    className={cn("absolute h-2 rounded-full", item.color)}
                    style={{ width: `${(item.hours / item.target) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Award className="h-4 w-4" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon
              return (
                <div
                  key={achievement.title}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border",
                    achievement.earned
                      ? "border-primary/20 bg-primary/5"
                      : "border-border bg-muted/30"
                  )}
                >
                  <div className={cn(
                    "p-2 rounded-lg",
                    achievement.earned ? "bg-primary/10" : "bg-muted"
                  )}>
                    <Icon className={cn(
                      "h-5 w-5",
                      achievement.earned ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className={cn(
                        "text-sm font-medium",
                        !achievement.earned && "text-muted-foreground"
                      )}>
                        {achievement.title}
                      </p>
                      {achievement.earned && (
                        <Badge className="text-xs bg-primary/10 text-primary border-0">
                          Earned
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                    {!achievement.earned && achievement.progress && (
                      <div className="flex items-center gap-2 mt-1">
                        <Progress value={achievement.progress} className="h-1 flex-1" />
                        <span className="text-xs text-muted-foreground">
                          {achievement.progress}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline" className="text-chart-1 border-chart-1/20">
                  {activity.points}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
