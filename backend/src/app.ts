const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const Task = require("./models/Task").default;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend running 🚀");
});

// Create Task
app.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

// Get Tasks
app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});


// Update task status
app.put("/tasks/:id", async (req, res) => {
    const { status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
    );

    res.json(updatedTask);
});


// delete
app.delete("/tasks/:id", async (req, res) => {
    console.log("DELETE HIT"); // 👈 add this

    await Task.findByIdAndDelete(req.params.id);

    res.json({ success: true });
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => console.log(err));

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});