import type { UIMessage } from "ai";
import type { BaseDocument } from "./model.type.js";

interface Session extends BaseDocument {
        _id: string;
        name: string;
        createdBy: string;
        messages: UIMessage[],
        updatedAt: string;
        createdAt: string;
}

interface NewSessionPayload {
        type: 'file' | "text" | 'youtube',
        fileInfo?: {
                uploadId: string,
                url: string,
                fileType: string
        },
        text?: string
};

export type { Session, NewSessionPayload }