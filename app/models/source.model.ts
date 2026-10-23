import type { Source } from "../types/source.type.js";
import mongoose from "mongoose";

const SourceSchema = new mongoose.Schema<Source>({
        title: {
                type: String,
                required: true,
                minLength: 2
        },
        type: {
                type: String,
                enum: ['youtube', "document", "text"],
                required: true,
        },
        metaData: {
                type: mongoose.SchemaTypes.Mixed
        },
        createdBy: {
                type: mongoose.Types.ObjectId,
                ref: "user",
                required: true,
        },
        summary: {
                type: String,
                required: true,
        },
        topics: {
                type: [String],
                default: []
        },
        suggestedQuestions: {
                type: [String],
                default: []
        }
}, { timestamps: true });


export const SourceModel = mongoose.model<Source>("Source", SourceSchema);