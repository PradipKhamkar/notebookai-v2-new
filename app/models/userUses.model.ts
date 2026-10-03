import type { USER_USES } from "../types/user.type.ts";
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
        tier: {
                type: String,
                required: true,
        },
        expiryDate: {
                type: String,
                required: false,
        },
}, { timestamps: true });

export const UserUsesModel = mongoose.model<USER_USES>("UserUses", UserUsesSchema);