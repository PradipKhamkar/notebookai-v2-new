import type { Conversation } from "../types/conversation.type.ts";
import mongoose from "mongoose";
export declare const ConversationModel: mongoose.Model<Conversation, {}, {}, {}, mongoose.Document<unknown, {}, Conversation, {}, mongoose.DefaultSchemaOptions> & Conversation & Required<{
    _id: string;
}> & {
    __v: number;
} & {
    id: string;
}, any, Conversation>;
//# sourceMappingURL=conversation.model.d.ts.map