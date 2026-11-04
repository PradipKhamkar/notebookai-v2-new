import mongoose from "mongoose";
import type { Session } from "../types/session.type.js";

const SessionSchema = new mongoose.Schema<Session>({
        messages: {
                type: mongoose.Schema.Types.Mixed,
                required: [true, 'messages is required!']
        },
        // @ts-ignore
        createdBy: {
                type: mongoose.Schema.ObjectId,
                ref: "users",
                required: [true, 'created by is required!']
        },
        name: {
                type: String,
                required: [true, 'Name is required!'],
                trim: true
        }
}, {
        timestamps: true
});

const SessionModel = mongoose.model<Session>('sessions', SessionSchema);

export default SessionModel