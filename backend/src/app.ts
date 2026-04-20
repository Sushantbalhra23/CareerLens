import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import mongoose from "mongoose"; // ✅ needed
import cors from "cors";
import authRoutes from "./routes/auth";

import Task from "./models/Task"; // check exact path
import TaskInstance from "./models/TaskInstance"; // check exact path
import dbConnect from "./lib/db"; // correct relative path
import aiRoutes from "./routes/ai";
console.log("APP STARTED 🚀");
const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());


async function startServer() {
    try {
        await dbConnect(); // MongoDB connect first
        console.log("MongoDB Connected ✅");
        app.use("/ai", (req, res, next) => {
            console.log("AI BASE HIT 🔥");
            next();
        });
        app.use("/ai", aiRoutes);
        app.use("/api/auth", authRoutes);

        // Routes
        app.get("/", (req: Request, res: Response) => res.send("Backend running 🚀"));
        app.get("/whoami", (req, res) => {
            res.send("THIS IS MY BACKEND ✅");
        });

        app.post("/tasks", async (req: Request, res: Response) => {
            try {
                const task = new Task(req.body);
                await task.save();
                res.json(task);
            } catch (err: any) {
                res.status(500).json({ error: err.message });
            }
        });

        app.get("/tasks", async (req: Request, res: Response) => {
            try {
                const allowedTypes = ["daily", "kanban", "calendar", "milestone", "goal"]

                const type =
                    typeof req.query.type === "string" &&
                        allowedTypes.includes(req.query.type)
                        ? req.query.type
                        : undefined

                const filter = type ? { type } : {}

                const tasks = await Task.find(filter)

                res.json(tasks)
            } catch (err: any) {
                res.status(500).json({ error: err.message })
            }
        })

        app.put("/tasks/:id", async (req: Request, res: Response) => {
            try {
                const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

                if (req.body.status === "done" && updated) {
                    await TaskInstance.create({
                        taskId: updated._id,
                        userId: new mongoose.Types.ObjectId(),
                        date: new Date().toISOString().split("T")[0],
                        status: "completed",
                    });
                }

                res.json(updated);
            } catch (err: any) {
                res.status(500).json({ error: err.message });
            }
        });

        app.delete("/tasks/:id", async (req: Request, res: Response) => {
            try {
                await Task.findByIdAndDelete(req.params.id);
                res.json({ success: true });
            } catch (err: any) {
                res.status(500).json({ error: err.message });
            }
        });



        const PORT = process.env.PORT || 5000;
        app.use((req, res) => {
            console.log("❌ UNKNOWN ROUTE HIT:", req.method, req.originalUrl);
            res.status(404).json({ error: "Route not found" });
        });
        app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

    } catch (err) {
        console.error("Server start failed:", err);
    }
}

startServer();