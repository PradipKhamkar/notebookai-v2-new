import type { BaseDocument } from "./model.type.ts";

type ContentType = "note" | "summary" | "flashcards" | "quiz" | "mindmap";

interface Content extends BaseDocument {
        type: ContentType;
        sourceId: string;
        createdBy: any;
        title: string;
        data: {
                note: string;
        }
};

interface CreateContentPayload {
        type: ContentType;
        sourceId: string;
        instruction: string;
        language: string
}

export type { Content, ContentType, CreateContentPayload }