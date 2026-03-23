"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// March 2026 calendar data
const calendarData = [
  { day: 1, events: [{ title: "React Course", type: "learning" }] },
  { day: 2, events: [] },
  { day: 3, events: [{ title: "Career Coaching", type: "career" }] },
  { day: 4, events: [] },
  { day: 5, events: [{ title: "Portfolio Review", type: "project" }] },
  { day: 6, events: [] },
  { day: 7, events: [] },
  { day: 8, events: [{ title: "Mock Interview", type: "career" }] },
  { day: 9, events: [] },
  { day: 10, events: [{ title: "Team Meeting", type: "meeting" }] },
  { day: 11, events: [] },
  { day: 12, events: [{ title: "Node.js Workshop", type: "learning" }] },
  { day: 13, events: [] },
  { day: 14, events: [{ title: "Today", type: "today" }, { title: "Code Review", type: "project" }] },
  { day: 15, events: [] },
  { day: 16, events: [{ title: "Internship Deadline", type: "career" }] },
  { day: 17, events: [] },
  { day: 18, events: [] },
  { day: 19, events: [{ title: "Hackathon", type: "project" }] },
  { day: 20, events: [{ title: "Hackathon", type: "project" }] },
  { day: 21, events: [] },
  { day: 22, events: [] },
  { day: 23, events: [{ title: "Weekly Review", type: "meeting" }] },
  { day: 24, events: [] },
  { day: 25, events: [{ title: "DSA Test", type: "academic" }] },
  { day: 26, events: [] },
  { day: 27, events: [] },
  { day: 28, events: [] },
  { day: 29, events: [{ title: "Month End Review", type: "meeting" }] },
  { day: 30, events: [] },
  { day: 31, events: [] },
]

const eventTypeColors: Record<string, string> = {
  learning: "bg-chart-1 text-primary-foreground",
  career: "bg-primary text-primary-foreground",
  project: "bg-chart-3 text-primary-foreground",
  meeting: "bg-chart-4 text-primary-foreground",
  academic: "bg-chart-2 text-primary-foreground",
  today: "bg-destructive text-primary-foreground",
}

const upcomingEvents = [
  { date: "Mar 14", title: "Code Review", time: "2:00 PM", type: "project" },
  { date: "Mar 16", title: "Internship Deadline", time: "11:59 PM", type: "career" },
  { date: "Mar 19", title: "Hackathon Starts", time: "9:00 AM", type: "project" },
  { date: "Mar 23", title: "Weekly Review", time: "4:00 PM", type: "meeting" },
  { date: "Mar 25", title: "DSA Test", time: "10:00 AM", type: "academic" },
]

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Weekly / Monthly</h1>
          <p className="text-sm text-muted-foreground">
            Plan and organize your schedule
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Calendar */}
        <div className="col-span-8">
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">March 2026</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">Today</Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-medium text-muted-foreground py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarData.map((data, index) => {
                  const isToday = data.day === 14
                  return (
                    <div
                      key={index}
                      className={cn(
                        "min-h-24 rounded-lg border border-border/50 p-2 transition-colors hover:bg-accent/50",
                        isToday && "bg-primary/5 border-primary/30"
                      )}
                    >
                      <div className={cn(
                        "text-sm font-medium mb-1",
                        isToday && "text-primary"
                      )}>
                        {data.day}
                      </div>
                      <div className="space-y-1">
                        {data.events.filter(e => e.type !== "today").slice(0, 2).map((event, i) => (
                          <div
                            key={i}
                            className={cn(
                              "text-xs px-1.5 py-0.5 rounded truncate",
                              eventTypeColors[event.type]
                            )}
                          >
                            {event.title}
                          </div>
                        ))}
                        {data.events.filter(e => e.type !== "today").length > 2 && (
                          <div className="text-xs text-muted-foreground">
                            +{data.events.filter(e => e.type !== "today").length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Upcoming Events */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className={cn(
                    "h-2 w-2 rounded-full mt-2",
                    eventTypeColors[event.type].split(" ")[0]
                  )} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {event.date} at {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Legend */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base">Event Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries({
                learning: "Learning",
                career: "Career",
                project: "Project",
                meeting: "Meeting",
                academic: "Academic",
              }).map(([type, label]) => (
                <div key={type} className="flex items-center gap-2">
                  <div className={cn(
                    "h-3 w-3 rounded",
                    eventTypeColors[type].split(" ")[0]
                  )} />
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
