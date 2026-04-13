import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["backlog", "todo", "doing", "review", "done"],
        default: "backlog",
    },
    priority: {
        type: String,
        default: "medium"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        enum: ["daily", "kanban", "calendar", "milestone", "goal"],
        default: "kanban"
    },   // 🆕 "kanban" | "daily"
    dueDate: Date,       // 🆕
    completed: { type: Boolean, default: false },
    skill: String
});

export default mongoose.model("Task", taskSchema);