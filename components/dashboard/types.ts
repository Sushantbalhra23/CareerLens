// components/dashboard/types.ts
export type TaskStatus = "todo" | "in-progress" | "done" | "backlog" | "doing" | "review" | "daily";

export interface Task {
    _id: string;
    title: string;
    status: TaskStatus;
    completed: boolean;
    createdAt?: string;      // for charts & daily progress
    time?: string;
    category?: string;
    type?: string;
    priority: "low" | "medium" | "high";
    skill?: boolean | string; // for learning progress
    dueDate?: string;
}