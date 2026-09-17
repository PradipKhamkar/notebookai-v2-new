import mongoose from "mongoose";
import envConfig from "./env.ts";

export async function connectDatabase(): Promise<void> {
        try {
                await mongoose.connect(`mongodb+srv://${envConfig.DATABASE.USERNAME}:${envConfig.DATABASE.PASSWORD}@cluster0.xychzyj.mongodb.net/`);
                console.log("✅ Connected to MongoDB");
        } catch (error) {
                console.error("❌ MongoDB connection error:", error);
                process.exit(1);
        }

        mongoose.connection.on("error", (error) => {
                console.error("MongoDB runtime error:", error);
        });

        mongoose.connection.on("disconnected", () => {
                console.warn("⚠️  MongoDB disconnected");
        });
}

export async function disconnectDatabase(): Promise<void> {
        await mongoose.disconnect();
        console.log("MongoDB disconnected gracefully");
}
