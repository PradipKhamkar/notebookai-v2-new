import type { BaseDocument } from "./model.type.js";

// 1. Derive ContentType directly from the union (no duplicate string literals)
export type ContentType = Content["type"];

export interface NoteContentData {
        note: string;
}



export interface FlashcardItem {
        front: string;
        back: string;
        explanantion: string;
}


export interface QuizQuestion {
        question: string;
        options: { label: string; value: string }[];
        answer: string;
        explanation: string;
        type: "multiple-choice";
}


export interface MindmapNode {
        label: string;
        children?: MindmapNode[];
        note: {
                title: string;
                content: string
        },
        id: string
}


interface BaseContent<TType extends string, TData> extends BaseDocument {
        type: TType;
        sourceId: string;
        createdBy: string; // use your user id type instead of `any`
        title: string;
        data: TData;
}

// 4. Discriminated union members
export type NoteContent = BaseContent<"note", NoteContentData>;
export type FlashcardsContent = BaseContent<"flashcards", FlashcardItem[]>;
export type QuizContent = BaseContent<"quiz", QuizQuestion[]>;
export type MindMapContent = BaseContent<"mindmap", MindmapNode[]>;

// 5. Union type
export type Content = | NoteContent | FlashcardsContent | QuizContent | MindMapContent

interface CreateContentPayload {
        type: ContentType;
        sourceId: string;
        instruction: string;
        language: string
}

export type { CreateContentPayload }