import z from "zod";
const titleSchema = z.string().min(2).describe('Title of a content');
const createNote = z.object({
    title: titleSchema,
    data: z.object({
        note: z.string().min(10).describe('Full of note with markdown format')
    })
});
export const quizQuestionSchema = z.object({
    question: z.string().describe("The question text"),
    options: z
        .array(z.object({
        label: z.string().describe("Display text of the option, e.g. 'Paris'"),
        value: z.string().describe("Short unique id for the option: 'a', 'b', 'c' or 'd'"),
    }))
        .describe("Exactly 4 options, with only one correct"),
    answer: z
        .string()
        .describe("The `value` of the correct option (e.g. 'b'), not its label"),
    explanation: z
        .string()
        .describe("1-2 sentences explaining why the answer is correct"),
    type: z.literal("multiple-choice"),
});
export const createQuiz = z.object({
    title: titleSchema,
    data: z.array(quizQuestionSchema).describe("List of quiz questions"),
});
export const flashcardSchema = z.object({
    front: z
        .string()
        .describe("The question, term, or prompt shown on the front of the card. Keep it short and specific"),
    back: z
        .string()
        .describe("The direct answer or definition shown on the back. Keep it concise"),
    explanation: z
        .string()
        .describe("1-2 sentences of extra context that helps the learner understand or remember the answer"),
});
export const createFlashcards = z.object({
    title: titleSchema,
    data: z.array(flashcardSchema).describe("List of flashcards"),
});
export default { createNote, createQuiz, createFlashcards };
//# sourceMappingURL=content.schema.js.map