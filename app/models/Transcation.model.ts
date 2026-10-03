import mongoose from "mongoose";
import type { TRANSACTION } from "../types/transcation.type.ts";

const TranscationSchema = new mongoose.Schema<TRANSACTION>({
        createdBy: {
                type: String,
                required: true,
        },
        amount: {
                type: Number,
                required: true,
        },
        plan: {
                type: String,
                required: true
        },
        currency: {
                type: String,
                required: true
        },
        referenceId: {
                type: String,
                required: true
        },
        status: {
                type: String,
                required: true
        }
}, { timestamps: true });

export const TranscationModel = mongoose.model<TRANSACTION>("Transcation", TranscationSchema);