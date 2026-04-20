import express from "express"
import bcrypt from "bcryptjs"
import User from "../models/Users"

const router = express.Router()

/*
SIGNUP
*/
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            })
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            })
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            passwordHash,
        })

        res.status(201).json({
            name: user.name,
            email: user.email,
        })

    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: "Signup failed",
        })
    }
})

/*
LOGIN
*/
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            })
        }

        const isMatch = await bcrypt.compare(
            password,
            user.passwordHash
        )

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials",
            })
        }

        res.json({
            name: user.name,
            email: user.email,
        })

    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: "Login failed",
        })
    }
})

export default router