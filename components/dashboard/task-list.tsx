"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, Clock, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Task = {
  id: string
  title: string
  time: string
  completed: boolean
  category: string
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Review Data Structures notes",
    time: "9:00 AM",
    completed: false,
    category: "Study",
  },
  {
    id: "2",
    title: "Complete LeetCode daily challenge",
    time: "10:30 AM",
    completed: true,
    category: "Practice",
  },
  {
    id: "3",
    title: "Watch System Design video",
    time: "2:00 PM",
    completed: false,
    category: "Learning",
  },
  {
    id: "4",
    title: "Work on portfolio project",
    time: "4:00 PM",
    completed: false,
    category: "Project",
  },
  {
    id: "5",
    title: "Review interview prep materials",
    time: "6:00 PM",
    completed: false,
    category: "Career",
  },
]

export function TaskList() {
  const [tasks, setTasks] = useState(initialTasks)

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const completedCount = tasks.filter((t) => t.completed).length

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-semibold text-card-foreground">
            {"Today's Tasks"}
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            {completedCount} of {tasks.length} completed
          </p>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-4 w-4 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "flex items-center gap-3 rounded-lg border border-border p-3 transition-colors",
                task.completed && "bg-muted/50"
              )}
            >
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                className="h-5 w-5 rounded-full border-2"
              />
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "text-sm font-medium truncate text-card-foreground",
                    task.completed && "line-through text-muted-foreground"
                  )}
                >
                  {task.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {task.time}
                  </span>
                  <span className="text-xs text-primary">{task.category}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 opacity-0 group-hover:opacity-100"
              >
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
