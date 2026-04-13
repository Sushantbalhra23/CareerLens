import mongoose from "mongoose";

const aiResponseSchema = new mongoose.Schema(
    {
        userInput: String,

        kanban: [
            {
                title: String,
                status: String,
            },
        ],

        dailyTasks: [
            {
                title: String,
                date: String,
            },
        ],

        calendar: [
            {
                title: String,
                date: String,
            },
        ],

        roadmapText: String,
    },
    { timestamps: true }
);

export default mongoose.model("AIResponse", aiResponseSchema);