import type { Artifact } from "../types/artifact.type.js";
import mongoose from "mongoose";

const ArtifactSchema = new mongoose.Schema<Artifact>({
        title: {
                type: String,
                required: true
        },
        data: {
                type: mongoose.SchemaTypes.Mixed,
                required: true
        },
        // @ts-ignore
        createdBy: {
                type: mongoose.Types.ObjectId,
                ref: 'user',
                required: true
        },
        // @ts-ignore
        sessionId: {
                type: mongoose.Types.ObjectId,
                ref: 'session',
                required: true
        },
        type: {
                type: String,
                enum: ["note", "quiz", "flashcards", 'mindmap', "infograph", "lesson"],
                required: true
        },
        isExample: {
                type: Boolean,
                default: false
        },
        icon: {
                type: String,
        }
}, { timestamps: true });


export const ArtifactModel = mongoose.model<Artifact>("artifact", ArtifactSchema);