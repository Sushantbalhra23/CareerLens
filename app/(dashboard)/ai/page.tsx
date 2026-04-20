"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { AIPanelFull } from "@/components/dashboard/ai-panel-full"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIPage() {
    const [tasks, setTasks] = useState<any[]>([])

    // Load roadmap tasks from DB
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await axios.get("http://localhost:5000/tasks")

                const aiTasks = res.data.filter(
                    (task: any) => task.category === "AI Generated"
                )

                setTasks(aiTasks)
            } catch (err) {
                console.error("Failed to fetch roadmap tasks", err)
            }
        }

        fetchTasks()
    }, [])

    return (
        <div className="h-[calc(100vh-70px)] flex flex-col px-8 py-6 gap-6">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold">
                    CareerLens AI Mentor
                </h1>

                <p className="text-muted-foreground text-sm mt-1">
                    Build your roadmap, adjust skills, and plan your career interactively.
                </p>
            </div>


            {/* Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">

                {/* Chat Section */}
                <div className="lg:col-span-3 h-full flex flex-col">

                    <Card className="flex-1 flex flex-col">
                        <CardContent className="flex-1 overflow-hidden">
                            <AIPanelFull tasks={tasks} setTasks={setTasks} />
                        </CardContent>
                    </Card>

                </div>


                {/* Roadmap Sidebar */}
                <Card className="flex flex-col">

                    <CardHeader>
                        <CardTitle>
                            Roadmap Activity
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3 overflow-y-auto max-h-[65vh]">

                        {tasks.length === 0 ? (
                            <p className="text-muted-foreground text-sm">
                                No roadmap yet. Ask AI to generate one.
                            </p>
                        ) : (
                            tasks.slice(0, 8).map((task, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border p-3 text-sm bg-muted"
                                >
                                    {task.title}
                                </div>
                            ))
                        )}

                    </CardContent>

                </Card>

            </div>
        </div>
    )
}