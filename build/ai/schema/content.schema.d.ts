import z from "zod";
declare const createNote: z.ZodObject<{
    title: z.ZodString;
    data: z.ZodObject<{
        note: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const quizQuestionSchema: z.ZodObject<{
    question: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
    answer: z.ZodString;
    explanation: z.ZodString;
    type: z.ZodLiteral<"multiple-choice">;
}, z.core.$strip>;
export declare const createQuiz: z.ZodObject<{
    title: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        question: z.ZodString;
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>;
        answer: z.ZodString;
        explanation: z.ZodString;
        type: z.ZodLiteral<"multiple-choice">;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const flashcardSchema: z.ZodObject<{
    front: z.ZodString;
    back: z.ZodString;
    explanation: z.ZodString;
}, z.core.$strip>;
export declare const createFlashcards: z.ZodObject<{
    title: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        front: z.ZodString;
        back: z.ZodString;
        explanation: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Flashcard = z.infer<typeof flashcardSchema>;
export type CreateFlashcards = z.infer<typeof createFlashcards>;
export type QuizQuestionData = z.infer<typeof createQuiz>;
export type ICreateNote = z.infer<typeof createNote>;
declare const _default: {
    createNote: z.ZodObject<{
        title: z.ZodString;
        data: z.ZodObject<{
            note: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    createQuiz: z.ZodObject<{
        title: z.ZodString;
        data: z.ZodArray<z.ZodObject<{
            question: z.ZodString;
            options: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
            }, z.core.$strip>>;
            answer: z.ZodString;
            explanation: z.ZodString;
            type: z.ZodLiteral<"multiple-choice">;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    createFlashcards: z.ZodObject<{
        title: z.ZodString;
        data: z.ZodArray<z.ZodObject<{
            front: z.ZodString;
            back: z.ZodString;
            explanation: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
};
export default _default;
//# sourceMappingURL=content.schema.d.ts.map