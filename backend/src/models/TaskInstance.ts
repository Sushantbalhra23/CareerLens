import mongoose, { Document, Schema } from "mongoose";

export interface ITaskInstance extends Document {
    taskId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;

    date: string; // "2026-03-24"

    status: "pending" | "completed" | "skipped";

    actualTimeSpent?: number; // minutes
    completedAt?: Date;
}

const TaskInstanceSchema: Schema = new Schema(
    {
        taskId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
            required: true,
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        date: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: ["pending", "completed", "skipped"],
            default: "pending",
        },

        actualTimeSpent: {
            type: Number,
            default: 0,
        },

        completedAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

export default mongoose.model<ITaskInstance>(
    "TaskInstance",
    TaskInstanceSchema
);