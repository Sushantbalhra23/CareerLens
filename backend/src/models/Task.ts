import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["todo", "doing", "done"],
        default: "todo"
    },
    priority: {
        type: String,
        default: "medium"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Task", taskSchema);