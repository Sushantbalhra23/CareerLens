"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import { Task } from "@/components/dashboard/types"

export const useDailyTasks = () => {
    const [dailyTasks, setDailyTasks] = useState<Task[]>([])

    const fetchTasks = async () => {
        try {
            const res = await axios.get("http://localhost:5000/tasks")

            const allTasks = Array.isArray(res.data)
                ? res.data
                : res.data.tasks ?? []

            const daily = allTasks.filter((t: Task) => t.type === "daily")

            setDailyTasks(daily)
        } catch (err) {
            console.error("Fetch daily tasks failed:", err)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    const addTask = async () => {
        try {
            await axios.post("http://localhost:5000/tasks", {
                title: "New Task",
                type: "daily",
                completed: false,
                priority: "medium",
                dueDate: new Date()
            })

            fetchTasks()
        } catch (err) {
            console.error("Add task failed:", err)
        }
    }

    const toggleTask = async (id: string) => {
        const task = dailyTasks.find((t) => t._id === id)
        if (!task) return

        await axios.put(`http://localhost:5000/tasks/${id}`, {
            completed: !task.completed
        })

        fetchTasks()
    }

    const deleteTask = async (id: string) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`)
        fetchTasks()
    }

    const editTask = async (id: string, title: string) => {
        await axios.put(`http://localhost:5000/tasks/${id}`, { title })
        fetchTasks()
    }

    return {
        dailyTasks,
        addTask,
        toggleTask,
        deleteTask,
        editTask,
        fetchTasks
    }
}