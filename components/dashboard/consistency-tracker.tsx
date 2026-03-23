"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Static mock data for March 2026
const monthData = [
  { day: 1, level: 4 },
  { day: 2, level: 3 },
  { day: 3, level: 2 },
  { day: 4, level: 4 },
  { day: 5, level: 1 },
  { day: 6, level: 3 },
  { day: 7, level: 0 },
  { day: 8, level: 4 },
  { day: 9, level: 2 },
  { day: 10, level: 3 },
  { day: 11, level: 1 },
  { day: 12, level: 4 },
  { day: 13, level: 2 },
  { day: 14, level: 3 },
  { day: 15, level: 0 },
  { day: 16, level: 0 },
  { day: 17, level: 0 },
  { day: 18, level: 0 },
  { day: 19, level: 0 },
  { day: 20, level: 0 },
  { day: 21, level: 0 },
  { day: 22, level: 0 },
  { day: 23, level: 0 },
  { day: 24, level: 0 },
  { day: 25, level: 0 },
  { day: 26, level: 0 },
  { day: 27, level: 0 },
  { day: 28, level: 0 },
  { day: 29, level: 0 },
  { day: 30, level: 0 },
  { day: 31, level: 0 },
]

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const getActivityColor = (level: number) => {
  switch (level) {
    case 0: return "bg-muted"
    case 1: return "bg-primary/20"
    case 2: return "bg-primary/40"
    case 3: return "bg-primary/60"
    case 4: return "bg-primary"
    default: return "bg-muted"
  }
}

export function ConsistencyTracker() {
  const monthName = "March"
  const year = 2026

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-card-foreground">
          Monthly Consistency
        </CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {monthName} {year}
          </span>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        {/* Week day headers */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center text-xs text-muted-foreground font-medium py-1"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {monthData.map((data, index) => (
            <div
              key={index}
              className={cn(
                "aspect-square rounded-md flex items-center justify-center text-xs transition-colors",
                data.day
                  ? cn(getActivityColor(data.level), "cursor-pointer hover:ring-2 hover:ring-primary/20")
                  : "bg-transparent"
              )}
            >
              {data.day && (
                <span
                  className={data.level >= 3 ? "text-primary-foreground" : "text-muted-foreground"}
                >
                  {data.day}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Activity Level:</span>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground mr-1">Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={cn("h-3 w-3 rounded-sm", getActivityColor(level))}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">More</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
