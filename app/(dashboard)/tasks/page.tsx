"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Calendar, Clock, Filter, SortAsc } from "lucide-react"
import { cn } from "@/lib/utils"

const initialTasks = [
  {
    id: "1",
    title: "Complete React Hooks module",
    description: "Finish the useEffect and useContext sections",
    time: "9:00 AM",
    duration: "2 hours",
    category: "Learning",
    priority: "high",
    completed: false,
  },
  {
    id: "2",
    title: "Review Data Structures notes",
    description: "Focus on trees and graphs",
    time: "11:00 AM",
    duration: "1.5 hours",
    category: "Academic",
    priority: "high",
    completed: false,
  },
  {
    id: "3",
    title: "Apply to TechCorp internship",
    description: "Customize cover letter and submit application",
    time: "1:00 PM",
    duration: "1 hour",
    category: "Career",
    priority: "high",
    completed: false,
  },
  {
    id: "4",
    title: "Practice LeetCode problems",
    description: "Solve 3 medium difficulty problems",
    time: "2:30 PM",
    duration: "1.5 hours",
    category: "Skills",
    priority: "medium",
    completed: true,
  },
  {
    id: "5",
    title: "Update portfolio project",
    description: "Add new features to the dashboard",
    time: "4:00 PM",
    duration: "2 hours",
    category: "Project",
    priority: "medium",
    completed: false,
  },
  {
    id: "6",
    title: "Read tech blog articles",
    description: "Stay updated with industry trends",
    time: "6:00 PM",
    duration: "30 min",
    category: "Personal",
    priority: "low",
    completed: true,
  },
]

const categoryColors: Record<string, string> = {
  Learning: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  Academic: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Career: "bg-primary/10 text-primary border-primary/20",
  Skills: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  Project: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Personal: "bg-chart-5/10 text-chart-5 border-chart-5/20",
}

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks)

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const completedCount = tasks.filter(t => t.completed).length
  const totalCount = tasks.length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Today&apos;s Tasks</h1>
          <p className="text-sm text-muted-foreground">
            {completedCount} of {totalCount} tasks completed
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <SortAsc className="h-4 w-4" />
            Sort
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      <Card className="border-border/50">
        <CardContent className="py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Daily Progress</span>
            <span className="text-sm text-muted-foreground">
              {Math.round((completedCount / totalCount) * 100)}%
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted">
            <div 
              className="h-2 rounded-full bg-primary transition-all duration-300"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Task list */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <Card 
            key={task.id} 
            className={cn(
              "border-border/50 transition-all",
              task.completed && "opacity-60"
            )}
          >
            <CardContent className="py-4">
              <div className="flex items-start gap-4">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mt-1"
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={cn(
                      "font-medium",
                      task.completed && "line-through text-muted-foreground"
                    )}>
                      {task.title}
                    </h3>
                    <Badge 
                      variant="outline" 
                      className={categoryColors[task.category]}
                    >
                      {task.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {task.description}
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {task.time}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {task.duration}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "text-xs",
                        task.priority === "high" && "border-destructive/20 text-destructive",
                        task.priority === "medium" && "border-chart-4/20 text-chart-4",
                        task.priority === "low" && "border-muted-foreground/20 text-muted-foreground"
                      )}
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
