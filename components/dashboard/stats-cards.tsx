"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  Flame,
  BookOpen,
  Sparkles,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    title: "Tasks Completed",
    value: "127",
    change: "+12%",
    trend: "up",
    icon: CheckCircle2,
    iconBg: "bg-chart-1/10",
    iconColor: "text-chart-1",
  },
  {
    title: "Consistency Score",
    value: "85%",
    change: "+5%",
    trend: "up",
    icon: Flame,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
  },
  {
    title: "Learning Progress",
    value: "64%",
    change: "+8%",
    trend: "up",
    icon: BookOpen,
    iconBg: "bg-chart-2/10",
    iconColor: "text-chart-2",
  },
  {
    title: "AI Insights Used",
    value: "43",
    change: "-3%",
    trend: "down",
    icon: Sparkles,
    iconBg: "bg-chart-4/10",
    iconColor: "text-chart-4",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown
        return (
          <Card
            key={stat.title}
            className="border-border bg-card shadow-sm"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg",
                    stat.iconBg
                  )}
                >
                  <Icon className={cn("h-5 w-5", stat.iconColor)} />
                </div>
                <div
                  className={cn(
                    "flex items-center gap-1 text-xs font-medium",
                    stat.trend === "up" ? "text-chart-1" : "text-destructive"
                  )}
                >
                  <TrendIcon className="h-3 w-3" />
                  {stat.change}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold text-card-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
