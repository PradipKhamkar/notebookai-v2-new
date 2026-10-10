import mongoose from "mongoose";
import type { TRANSACTION } from "../types/transcation.type.ts";
export declare const TranscationModel: mongoose.Model<TRANSACTION, {}, {}, {}, mongoose.Document<unknown, {}, TRANSACTION, {}, mongoose.DefaultSchemaOptions> & TRANSACTION & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, TRANSACTION>;
//# sourceMappingURL=Transcation.model.d.ts.map