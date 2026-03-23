"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

type Task = {
  id: string
  title: string
  priority: "low" | "medium" | "high"
  category: string
}

type Column = {
  id: string
  title: string
  tasks: Task[]
  color: string
}

const columns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-muted-foreground/20",
    tasks: [
      {
        id: "1",
        title: "Research internship opportunities",
        priority: "high",
        category: "Career",
      },
      {
        id: "2",
        title: "Complete Python course module 5",
        priority: "medium",
        category: "Learning",
      },
      {
        id: "3",
        title: "Update resume with new projects",
        priority: "low",
        category: "Career",
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "bg-primary/20",
    tasks: [
      {
        id: "4",
        title: "Build portfolio website",
        priority: "high",
        category: "Project",
      },
      {
        id: "5",
        title: "Practice DSA problems",
        priority: "medium",
        category: "Learning",
      },
    ],
  },
  {
    id: "completed",
    title: "Completed",
    color: "bg-chart-4/30",
    tasks: [
      {
        id: "6",
        title: "Finish React fundamentals",
        priority: "medium",
        category: "Learning",
      },
      {
        id: "7",
        title: "Network at career fair",
        priority: "high",
        category: "Career",
      },
    ],
  },
]

const priorityColors = {
  low: "bg-chart-3/20 text-chart-3",
  medium: "bg-chart-2/20 text-chart-2",
  high: "bg-destructive/20 text-destructive",
}

export function KanbanBoard() {
  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-card-foreground">
          Goal Board
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-3">
          {columns.map((column) => (
            <div key={column.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${column.color}`} />
                  <span className="text-sm font-medium text-card-foreground">
                    {column.title}
                  </span>
                  <Badge
                    variant="secondary"
                    className="h-5 px-1.5 text-xs text-muted-foreground"
                  >
                    {column.tasks.length}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground"
                >
                  <Plus className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="space-y-2">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="group cursor-pointer rounded-lg border border-border bg-background p-3 transition-shadow hover:shadow-sm"
                  >
                    <p className="mb-2 text-sm font-medium text-card-foreground">
                      {task.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColors[task.priority]}`}
                      >
                        {task.priority}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {task.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
