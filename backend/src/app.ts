// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const TaskInstance = require("./models/TaskInstance").default;

// dotenv.config();
// const Task = require("./models/Task").default;

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Backend running 🚀");
// });

// // Create Task
// app.post("/tasks", async (req, res) => {
//     const task = new Task(req.body);
//     await task.save();
//     res.json(task);
// });

// // Get Tasks
// app.get("/tasks", async (req, res) => {
//     const tasks = await Task.find();
//     res.json(tasks);
// });


// // Update task status
// // app.put("/tasks/:id", async (req, res) => {
// //     const { status } = req.body;

// //     const updatedTask = await Task.findByIdAndUpdate(
// //         req.params.id,
// //         { status },
// //         { new: true }
// //     );

// //     res.json(updatedTask);
// // });


// // app.put("/tasks/:id", async (req, res) => {
// //     const updated = await Task.findByIdAndUpdate(
// //         req.params.id,
// //         req.body,
// //         { new: true } // 🔥 REQUIRED
// //     );

// //     res.json(updated);
// // });
// app.put("/tasks/:id", async (req, res) => {
//     try {
//         const updated = await Task.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true }
//         );

//         console.log("PUT HIT", req.body);

//         if (req.body.status === "done") {
//             const data = await TaskInstance.create({
//                 taskId: updated._id,
//                 userId: new mongoose.Types.ObjectId(),
//                 date: new Date().toISOString().split("T")[0],
//                 status: "completed",
//             });

//             console.log("CREATED:", data);
//         }

//         res.json(updated);

//     } catch (err) {
//         console.log("❌ ERROR:", err);   // 👈 THIS WILL SHOW REAL ISSUE
//         res.status(500).json({ error: err.message });
//     }
// });


// // delete
// app.delete("/tasks/:id", async (req, res) => {
//     console.log("DELETE HIT"); // 👈 add this

//     await Task.findByIdAndDelete(req.params.id);

//     res.json({ success: true });
// });

// // GRAPH
// app.get("/progress/weekly", async (req, res) => {
//     const today = new Date();
//     const last7Days = new Date();
//     last7Days.setDate(today.getDate() - 6);

//     const data = await TaskInstance.aggregate([
//         {
//             $match: {
//                 date: {
//                     $gte: last7Days.toISOString().split("T")[0],
//                 },
//             },
//         },
//         {
//             $group: {
//                 _id: "$date",
//                 completed: { $sum: 1 },
//             },
//         },
//         { $sort: { _id: 1 } },
//     ]);

//     res.json(data);
// });


// // Connect MongoDB
// mongoose.connect(process.env.MONGO_URI!)
//     .then(() => console.log("MongoDB Connected ✅"))
//     .catch((err) => console.log(err));

// app.listen(5000, () => {
//     // console.log("Server running on http://localhost:5000");
//     baseURL: "http://127.0.0.1:5000"
// });


// import express, { Request, Response } from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import Task from "./models/Task";
// import TaskInstance from "./models/TaskInstance";
// import dbConnect from "../lib/db"; // because lib is sibling of backend
// await dbConnect(); // call this before using any mongoose model

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ✅ Routes

// // Home
// app.get("/", (req: Request, res: Response) => {
//     res.send("Backend running 🚀");
// });

// // Create Task
// app.post("/tasks", async (req: Request, res: Response) => {
//     try {
//         const task = new Task(req.body);
//         await task.save();
//         res.json(task);
//     } catch (err: any) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Get Tasks
// app.get("/tasks", async (req: Request, res: Response) => {
//     try {
//         const tasks = await Task.find();
//         res.json(tasks);
//     } catch (err: any) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Update Task
// app.put("/tasks/:id", async (req: Request, res: Response) => {
//     try {
//         const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//         });

//         if (req.body.status === "done" && updated) {
//             const data = await TaskInstance.create({
//                 taskId: updated._id,
//                 userId: new mongoose.Types.ObjectId(),
//                 date: new Date().toISOString().split("T")[0],
//                 status: "completed",
//             });
//             console.log("CREATED:", data);
//         }

//         res.json(updated);
//     } catch (err: any) {
//         console.log("❌ ERROR:", err);
//         res.status(500).json({ error: err.message });
//     }
// });

// // Delete Task
// app.delete("/tasks/:id", async (req: Request, res: Response) => {
//     try {
//         await Task.findByIdAndDelete(req.params.id);
//         res.json({ success: true });
//     } catch (err: any) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Weekly Progress
// app.get("/progress/weekly", async (req: Request, res: Response) => {
//     try {
//         const today = new Date();
//         const last7Days = new Date();
//         last7Days.setDate(today.getDate() - 6);

//         const data = await TaskInstance.aggregate([
//             {
//                 $match: {
//                     date: { $gte: last7Days.toISOString().split("T")[0] },
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$date",
//                     completed: { $sum: 1 },
//                 },
//             },
//             { $sort: { _id: 1 } },
//         ]);

//         res.json(data);
//     } catch (err: any) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Connect MongoDB
// mongoose
//     .connect(process.env.MONGO_URI!)
//     .then(() => console.log("MongoDB Connected ✅"))
//     .catch((err) => console.log(err));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import mongoose from "mongoose"; // ✅ needed
import cors from "cors";

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