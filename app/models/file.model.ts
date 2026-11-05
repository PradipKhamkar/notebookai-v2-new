import mongoose from "mongoose";
import type { File } from "../types/file.type.js";

const fileSchema = new mongoose.Schema<File>({
        mimeType: {
                type: String,
                required: [true, "Mime Type is required"]
        },
        size: {
                type: Number,
                required: [true, "Size is required"]
        },
        url: {
                type: String,
                required: [true, "URL is required"]
        },
        uploadId: {
                type: String,
                required: [true, "Upload ID is required"]
        },
        // @ts-ignore
        createdBy: {
                type: mongoose.Schema.ObjectId,
                ref: "users"
        },
        sessionId: {
                type: mongoose.Schema.ObjectId,
                ref: "sessions",
                default: null
        },
        name: {
                type: String,
                default: "Untitled"
        }

}, {
        timestamps: true
});

const FileModel = mongoose.model<File>('files', fileSchema);

export default FileModel