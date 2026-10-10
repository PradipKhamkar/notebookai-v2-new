import type { BaseDocument } from "./model.type";
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
    options: {
        label: string;
        value: string;
    }[];
    answer: string;
    explanation: string;
    type: "multiple-choice";
}
export interface MindmapNode {
    id: string;
    label: string;
    children?: MindmapNode[];
}
export interface MindmapContentData {
    root: MindmapNode;
}
interface BaseContent<TType extends string, TData> extends BaseDocument {
    type: TType;
    sourceId: string;
    createdBy: string;
    title: string;
    data: TData;
}
export type NoteContent = BaseContent<"note", NoteContentData>;
export type FlashcardsContent = BaseContent<"flashcards", FlashcardItem[]>;
export type QuizContent = BaseContent<"quiz", QuizQuestion[]>;
export type MindmapContent = BaseContent<"mindmap", MindmapContentData>;
export type Content = NoteContent | FlashcardsContent | QuizContent | MindmapContent;
interface CreateContentPayload {
    type: ContentType;
    sourceId: string;
    instruction: string;
    language: string;
}
export { CreateContentPayload };
//# sourceMappingURL=content.type.d.ts.map