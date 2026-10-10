import type { USER } from "../types/user.type.ts";
import mongoose from "mongoose";
export declare const UserModel: mongoose.Model<USER, {}, {}, {}, mongoose.Document<unknown, {}, USER, {}, mongoose.DefaultSchemaOptions> & USER & Required<{
    _id: string;
}> & {
    __v: number;
} & {
    id: string;
}, any, USER>;
//# sourceMappingURL=user.model.d.ts.map