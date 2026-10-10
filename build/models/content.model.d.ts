import type { Content } from "../types/content.type.ts";
import mongoose from "mongoose";
export declare const ContentModel: mongoose.Model<Content, {}, {}, {}, (mongoose.Document<unknown, {}, Content, {}, mongoose.DefaultSchemaOptions> & ((import("../types/content.type.ts").FlashcardsContent & {
    _id: mongoose.Types.ObjectId;
}) | (import("../types/content.type.ts").MindmapContent & {
    _id: mongoose.Types.ObjectId;
}) | (import("../types/content.type.ts").NoteContent & {
    _id: mongoose.Types.ObjectId;
}) | (import("../types/content.type.ts").QuizContent & {
    _id: mongoose.Types.ObjectId;
}))) & {
    __v: number;
} & {
    id: string;
}, any, Content>;
//# sourceMappingURL=content.model.d.ts.map