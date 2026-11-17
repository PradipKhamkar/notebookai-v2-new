import type { USER_USES } from "../types/user.type.js";
import mongoose from "mongoose";

const UserUsesSchema = new mongoose.Schema<USER_USES>({
        createdBy: {
                type: String,
                required: true,
        },
        allowed: {
                type: mongoose.Schema.Types.Mixed,
                required: true
        },
        expiryDate: {
                type: String,
                required: false,
        },
}, {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
});


UserUsesSchema.virtual("tier").get(function (this) {
        if (!this.expiryDate) return 'free';
        const expiryDate = new Date(this.expiryDate)
        return expiryDate.getTime() > Date.now() ? "pro" : "free";
});

export const UserUsesModel = mongoose.model<USER_USES>("UserUses", UserUsesSchema);