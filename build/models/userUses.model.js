import mongoose from "mongoose";
const UserUsesSchema = new mongoose.Schema({
    createdBy: {
        type: String,
        required: true,
    },
    allowed: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    tier: {
        type: String,
        required: true,
    },
    expiryDate: {
        type: String,
        required: false,
    },
}, { timestamps: true });
export const UserUsesModel = mongoose.model("UserUses", UserUsesSchema);
//# sourceMappingURL=userUses.model.js.map