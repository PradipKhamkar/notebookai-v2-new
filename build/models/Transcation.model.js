import mongoose from "mongoose";
const TranscationSchema = new mongoose.Schema({
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
export const TranscationModel = mongoose.model("Transcation", TranscationSchema);
//# sourceMappingURL=Transcation.model.js.map