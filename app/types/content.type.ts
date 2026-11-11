import type { StudyPage } from "../ai/schema/infograph.schema.js";
import type { LessonStep, LessonStepSchema } from "../ai/schema/lesson.schema.js";
import type { BaseDocument } from "./model.type.js";

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
        sessionId: string;
        createdBy: string; // use your user id type instead of `any`
        title: string;
        data: TData;
        isExample?: boolean;
        icon?: string
}

// 4. Discriminated union members
export type NoteContent = BaseContent<"note", NoteContentData>;
export type FlashcardsContent = BaseContent<"flashcards", FlashcardItem[]>;
export type QuizContent = BaseContent<"quiz", QuizQuestion[]>;
export type MindMapContent = BaseContent<"mindmap", MindmapNode[]>;
export type InfographContent = BaseContent<"infograph", StudyPage[]>;
export type LessonContent = BaseContent<"lesson", LessonStep[]>;

// 5. Union type
export type Content = | NoteContent | FlashcardsContent | QuizContent | MindMapContent | InfographContent | LessonContent;

interface CreateContentPayload {
        type: ContentType;
        sourceId: string;
        instruction: string;
        language: string
}

export type { CreateContentPayload }