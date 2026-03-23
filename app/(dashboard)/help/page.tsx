"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Mail, 
  FileText, 
  Video,
  ChevronRight,
  ExternalLink
} from "lucide-react"

const helpCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of CareerLens",
    icon: BookOpen,
    articles: 8,
  },
  {
    title: "Using the Dashboard",
    description: "Navigate and customize your dashboard",
    icon: FileText,
    articles: 12,
  },
  {
    title: "Task Management",
    description: "Organize and track your tasks effectively",
    icon: FileText,
    articles: 10,
  },
  {
    title: "AI Features",
    description: "Get the most out of AI assistance",
    icon: MessageCircle,
    articles: 6,
  },
]

const popularArticles = [
  "How to set up your first goal",
  "Understanding the Kanban board",
  "Using AI for career recommendations",
  "Tracking your learning progress",
  "Customizing notifications",
]

const videoTutorials = [
  { title: "CareerLens Overview", duration: "5:32" },
  { title: "Setting Up Goals", duration: "4:15" },
  { title: "AI Assistant Guide", duration: "6:48" },
]

export default function HelpPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Help Center</h1>
        <p className="text-sm text-muted-foreground">
          Find answers and get support
        </p>
      </div>

      {/* Search */}
      <Card className="border-border/50 bg-primary/5">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h2 className="text-lg font-medium">How can we help you?</h2>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles..." 
                className="pl-10 bg-background"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4">
        {helpCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card 
              key={category.title} 
              className="border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
            >
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{category.title}</h3>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {category.articles} articles
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Popular Articles */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base">Popular Articles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {popularArticles.map((article, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <span className="text-sm">{article}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Video Tutorials */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Video className="h-4 w-4" />
              Video Tutorials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {videoTutorials.map((video, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-14 rounded bg-muted flex items-center justify-center">
                    <Video className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{video.title}</p>
                    <p className="text-xs text-muted-foreground">{video.duration}</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Contact Support */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-base">Still need help?</CardTitle>
          <CardDescription>
            Our support team is here to assist you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Start Chat
            </Button>
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Email Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
