import type { UIMessage } from "ai";
import type { BaseDocument } from "./model.type.js";
import type { SourceType } from "./new-source.type.js";

interface Session extends BaseDocument {
        _id: string;
        name: string;
        icon: string;
        createdBy: string;
        messages: UIMessage[],
        updatedAt: string;
        createdAt: string;
}

interface NewSessionPayload {
        type: SourceType;
        fileId?: string;
        url?: string;
        text?: string

};

export type { Session, NewSessionPayload }