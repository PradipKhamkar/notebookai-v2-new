import z from "zod";

const titleSchema = z.string().min(2).describe('A short descriptive title (max 8 words) prefixed with a single relevant emoji. Example: "🧠 Neural Networks Basics"');

const createNote = z.object({
        title: titleSchema,
        data: z.object({
                note: z.string().min(10).describe('A comprehensive study note in markdown format')
        })
});

export const quizQuestionSchema = z.object({
        question: z.string().describe("The question text"),
        options: z
                .array(
                        z.object({
                                label: z.string().describe("Display text of the option, e.g. 'Paris'"),
                                value: z.string().describe("Short unique id for the option: 'a', 'b', 'c' or 'd'"),
                        })
                )
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
        data: z.array(quizQuestionSchema).min(10).max(15).describe("10 to 15 multiple-choice quiz questions covering the breadth of the source, with mixed difficulty levels"),
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
        data: z.array(flashcardSchema).min(10).max(20).describe("10 to 20 flashcards covering key concepts, terms, and facts from the source with a mix of definition, concept, fact, and application cards"),
});

export type Flashcard = z.infer<typeof flashcardSchema>;
export type CreateFlashcards = z.infer<typeof createFlashcards>;

export type QuizQuestionData = z.infer<typeof createQuiz>;
export type ICreateNote = z.infer<typeof createNote>
export default { createNote, createQuiz, createFlashcards }