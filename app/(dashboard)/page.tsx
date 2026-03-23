"use client";
import dynamic from "next/dynamic"
import { AIPanel } from "@/components/dashboard/ai-panel"
import { KanbanBoard } from "@/components/dashboard/kanban-board"
import { TaskList } from "@/components/dashboard/task-list"
import { ProgressChart } from "@/components/dashboard/progress-chart"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Dynamically import ConsistencyTracker with SSR disabled to prevent hydration issues
const ConsistencyTracker = dynamic(
  () => import("@/components/dashboard/consistency-tracker").then((mod) => mod.ConsistencyTracker),
  {
    ssr: false,
    loading: () => (
      <Card className="border-border bg-card shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold text-card-foreground">
            Monthly Consistency
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="h-48 bg-muted/50 rounded-md animate-pulse" />
        </CardContent>
      </Card>
    ),
  }
)

export default function DashboardPage() {
  return (
    <>
      <div className="mb-6">
        <StatsCards />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <AIPanel />
          <KanbanBoard />
        </div>

        <div className="col-span-4 space-y-6">
          <TaskList />
          <ProgressChart />
        </div>
      </div>

      <div className="mt-6">
        <ConsistencyTracker />
      </div>
    </>
  )
}
