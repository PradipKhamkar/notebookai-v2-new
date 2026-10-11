import type { USER } from "../types/user.type.js";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<USER>({
        name: {
                type: String,
                required: [true, 'Name Is Required'],
                trim: true,
        },
        email: {
                type: String,
                required: [true, 'Email Is Required'],
                trim: true,
                lowercase: true,
                unique: true,
        },
        avatar: {
                type: String,
        }
}, { timestamps: true });


export const UserModel = mongoose.model<USER>("User", UserSchema);