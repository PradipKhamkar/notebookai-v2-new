import type { BaseDocument } from "./model.type.js";

export type ArtifactType = Artifact["type"];

interface BaseArtifact<TType extends string, TData> extends BaseDocument {
        type: TType;
        sessionId: string;
        createdBy: string;
        title: string;
        data: TData;
        isExample?: boolean;
        icon: string
}


export interface NoteArtifactData {
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


export type NoteArtifact = BaseArtifact<"note", NoteArtifactData>;
export type FlashcardsArtifact = BaseArtifact<"flashcards", FlashcardItem[]>;
export type QuizArtifact = BaseArtifact<"quiz", QuizQuestion[]>;
export type MindMapArtifact = BaseArtifact<"mindmap", MindmapNode[]>;


export type CreateArtifactPayload = {
        type: ArtifactType;
        data: any;
        icon: string;
        title: string;
};

// 5. Union type
export type Artifact = | NoteArtifact | FlashcardsArtifact | QuizArtifact | MindMapArtifact;


