import type { Source } from "../types/source.type.ts";
import mongoose from "mongoose";
export declare const SourceModel: mongoose.Model<Source, {}, {}, {}, mongoose.Document<unknown, {}, Source, {}, mongoose.DefaultSchemaOptions> & Source & Required<{
    _id: string;
}> & {
    __v: number;
} & {
    id: string;
}, any, Source>;
//# sourceMappingURL=source.model.d.ts.map