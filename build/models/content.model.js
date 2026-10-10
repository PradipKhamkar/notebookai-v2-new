import mongoose from "mongoose";
const ContentSchema = new mongoose.Schema({
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
    sourceId: {
        type: mongoose.Types.ObjectId,
        ref: 'source',
        required: true
    },
    type: {
        type: String,
        enum: ["note", "quiz", "flashcards"],
        required: true
    }
}, { timestamps: true });
export const ContentModel = mongoose.model("content", ContentSchema);
//# sourceMappingURL=content.model.js.map