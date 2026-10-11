import mongoose from "mongoose";
const ConversationSchema = new mongoose.Schema({
    sourceId: {
        type: String,
        required: [true, 'Source ID Is Required'],
        trim: true,
    },
    messages: {
        type: mongoose.Schema.Types.Mixed,
        default: []
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true });
export const ConversationModel = mongoose.model("Conversation", ConversationSchema);
//# sourceMappingURL=conversation.model.js.map