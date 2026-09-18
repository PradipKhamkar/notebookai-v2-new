import type { Source } from "../types/source.type.ts";
import mongoose from "mongoose";

const SourceSchema = new mongoose.Schema<Source>({
        title: {
                type: String,
                required: true,
                minLength: 2
        },
        type: {
                type: String,
                enum: ['youtube'],
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
                default: ''
        }
}, { timestamps: true });


export const SourceModel = mongoose.model<Source>("Source", SourceSchema);