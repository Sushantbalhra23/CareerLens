"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Calendar } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const weeklyData = [
  { day: "Mon", tasks: 8, hours: 6, productivity: 85 },
  { day: "Tue", tasks: 12, hours: 7, productivity: 92 },
  { day: "Wed", tasks: 6, hours: 4, productivity: 70 },
  { day: "Thu", tasks: 10, hours: 6, productivity: 88 },
  { day: "Fri", tasks: 14, hours: 8, productivity: 95 },
  { day: "Sat", tasks: 5, hours: 3, productivity: 65 },
  { day: "Sun", tasks: 3, hours: 2, productivity: 50 },
]

const monthlyProgress = [
  { week: "Week 1", learning: 20, career: 15, skills: 25 },
  { week: "Week 2", learning: 35, career: 22, skills: 30 },
  { week: "Week 3", learning: 45, career: 35, skills: 42 },
  { week: "Week 4", learning: 60, career: 48, skills: 55 },
]

const skillsData = [
  { name: "React", current: 75, target: 90 },
  { name: "TypeScript", current: 60, target: 80 },
  { name: "Node.js", current: 45, target: 70 },
  { name: "Data Structures", current: 55, target: 85 },
  { name: "System Design", current: 30, target: 60 },
]

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Progress Graph</h1>
          <p className="text-sm text-muted-foreground">
            Track your learning and career progress over time
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            This Month
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="border-border/50">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Tasks</p>
                <p className="text-2xl font-semibold">58</p>
              </div>
              <div className="flex items-center gap-1 text-chart-1">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+12%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Study Hours</p>
                <p className="text-2xl font-semibold">36h</p>
              </div>
              <div className="flex items-center gap-1 text-chart-1">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Productivity</p>
                <p className="text-2xl font-semibold">78%</p>
              </div>
              <div className="flex items-center gap-1 text-destructive">
                <TrendingDown className="h-4 w-4" />
                <span className="text-sm">-3%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Goals Achieved</p>
                <p className="text-2xl font-semibold">12</p>
              </div>
              <div className="flex items-center gap-1 text-chart-1">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+25%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Weekly Activity */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base">Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="tasks" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Productivity Trend */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base">Productivity Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="productivity" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Progress */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-base">Monthly Progress by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyProgress}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="week" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="learning" 
                  stackId="1" 
                  stroke="hsl(var(--chart-1))" 
                  fill="hsl(var(--chart-1))" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="career" 
                  stackId="1" 
                  stroke="hsl(var(--chart-2))" 
                  fill="hsl(var(--chart-2))" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="skills" 
                  stackId="1" 
                  stroke="hsl(var(--chart-3))" 
                  fill="hsl(var(--chart-3))" 
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-chart-1" />
              <span className="text-sm text-muted-foreground">Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-chart-2" />
              <span className="text-sm text-muted-foreground">Career</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-chart-3" />
              <span className="text-sm text-muted-foreground">Skills</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Progress */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-base">Skills Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillsData.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">
                  {skill.current}% / {skill.target}%
                </span>
              </div>
              <div className="relative h-2 w-full rounded-full bg-muted">
                <div 
                  className="absolute h-2 rounded-full bg-primary/30"
                  style={{ width: `${skill.target}%` }}
                />
                <div 
                  className="absolute h-2 rounded-full bg-primary"
                  style={{ width: `${skill.current}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
