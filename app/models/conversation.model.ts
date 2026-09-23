import type { Conversation } from "../types/conversation.type.ts";
import mongoose, { model } from "mongoose";

const ConversationSchema = new mongoose.Schema<Conversation>({
        sourceId: {
                type: String,
                required: [true, 'Source ID Is Required'],
                trim: true,
        },
        messages: {
                type: mongoose.Schema.Types.Mixed,
                default: []
        },
        // @ts-ignore
        createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
        }
}, { timestamps: true });

export const ConversationModel = mongoose.model<Conversation>("Conversation", ConversationSchema);