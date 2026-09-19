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

export type { Content, ContentType }