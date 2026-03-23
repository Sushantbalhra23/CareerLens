"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Area, AreaChart, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { month: "Jan", skills: 45, productivity: 60 },
  { month: "Feb", skills: 52, productivity: 55 },
  { month: "Mar", skills: 48, productivity: 70 },
  { month: "Apr", skills: 61, productivity: 65 },
  { month: "May", skills: 58, productivity: 80 },
  { month: "Jun", skills: 75, productivity: 85 },
]

const chartConfig = {
  skills: {
    label: "Skills Growth",
    color: "var(--color-chart-1)",
  },
  productivity: {
    label: "Productivity",
    color: "var(--color-chart-2)",
  },
}

export function ProgressChart() {
  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-card-foreground">
          Progress Overview
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <AreaChart data={data} margin={{ left: -20, right: 0 }}>
            <defs>
              <linearGradient id="fillSkills" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-chart-1)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-chart-1)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="fillProductivity" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-chart-2)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-chart-2)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--color-border)"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              type="monotone"
              dataKey="productivity"
              stroke="var(--color-chart-2)"
              fill="url(#fillProductivity)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="skills"
              stroke="var(--color-chart-1)"
              fill="url(#fillSkills)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
        <div className="mt-4 flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-1" />
            <span className="text-xs text-muted-foreground">Skills Growth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-2" />
            <span className="text-xs text-muted-foreground">Productivity</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
