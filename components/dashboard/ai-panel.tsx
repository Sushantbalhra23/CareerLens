"use client"

import { useRouter } from "next/navigation"
import { Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AIPanel() {
    const router = useRouter()

    return (
        <Card className="border-border bg-card shadow-sm hover:shadow-md transition cursor-pointer">

            <CardContent
                className="p-6 text-center"
                onClick={() => router.push("/ai")}
            >

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <Sparkles className="h-6 w-6 text-primary" />
                </div>

                <h2 className="text-lg font-semibold">
                    Open CareerLens AI Mentor
                </h2>

                <p className="text-sm text-muted-foreground mt-2">
                    Generate roadmaps, adjust goals, and plan your career interactively
                </p>

                <Button
                    className="mt-4"
                    onClick={(e) => {
                        e.stopPropagation()
                        router.push("/ai")
                    }}
                >
                    Start Planning
                </Button>

            </CardContent>

        </Card>
    )
}