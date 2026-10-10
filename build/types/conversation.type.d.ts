import type { UIMessage } from "ai";
import type { BaseDocument } from "./model.type.ts";
interface ChatRequestPayload {
    sourceId: string;
    messages: UIMessage[];
    userId: string;
}
interface Conversation extends BaseDocument {
    sourceId: string;
    createdBy: string;
    messages: UIMessage[];
}
export type { ChatRequestPayload, Conversation };
//# sourceMappingURL=conversation.type.d.ts.map