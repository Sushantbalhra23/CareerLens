// lib/db.ts
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in .env");
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = { conn: null, promise: null };
    (global as any).mongoose = cached;
}

async function dbConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI!); // ✅ Non-null assertion
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;