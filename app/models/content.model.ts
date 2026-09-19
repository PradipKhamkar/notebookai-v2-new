import type { Content } from "../types/content.type.ts";
import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema<Content>({
        title: {
                type: String,
                required: true
        },
        data: {
                type: mongoose.SchemaTypes.Mixed,
                required: true
        },
        createdBy: {
                type: mongoose.Types.ObjectId,
                ref: 'user',
                required: true
        },
        // @ts-ignore
        sourceId: {
                type: mongoose.Types.ObjectId,
                ref: 'source',
                required: true
        },
}, { timestamps: true });


export const ContentModel = mongoose.model<Content>("content", ContentSchema);