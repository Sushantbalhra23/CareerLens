import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string;

    goal?: string;
    targetRole?: string;
    skillLevel?: "beginner" | "intermediate" | "advanced";

    preferredStudyTime?: {
        start: string;
        end: string;
    };

    streakCount: number;
    lastActiveDate?: Date;
    totalFocusTime: number;
}

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true, trim: true },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        passwordHash: { type: String, required: true },

        avatarUrl: { type: String, default: "" },

        goal: { type: String, default: "" },
        targetRole: { type: String, default: "" },

        skillLevel: {
            type: String,
            enum: ["beginner", "intermediate", "advanced"],
            default: "beginner",
        },

        preferredStudyTime: {
            start: String,
            end: String,
        },

        streakCount: { type: Number, default: 0 },
        lastActiveDate: { type: Date },
        totalFocusTime: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);