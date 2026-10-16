import z from "zod";
import type { MindmapNode } from "../../types/content.type.js";

const titleSchema = z.string().min(2).describe('A short descriptive title (max 8 words) prefixed with a single relevant emoji. Example: "🧠 Neural Networks Basics"');

const createNote = z.object({
        title: titleSchema,
        data: z.object({
                note: z.string().min(10).describe('A comprehensive study note in markdown format')
        })
});

export const createQuiz = z.object({
        title: titleSchema,
        data: z.array(z.object({
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
        })).min(10).max(15).describe("10 to 15 multiple-choice quiz questions covering the breadth of the source, with mixed difficulty levels"),
});

export const createFlashcards = z.object({
        title: titleSchema,
        data: z.array(z.object({
                front: z
                        .string()
                        .describe("The question, term, or prompt shown on the front of the card. Keep it short and specific"),
                back: z
                        .string()
                        .describe("The direct answer or definition shown on the back. Keep it concise"),
                explanation: z
                        .string()
                        .describe("1-2 sentences of extra context that helps the learner understand or remember the answer"),
        })).min(10).max(20).describe("10 to 20 flashcards covering key concepts, terms, and facts from the source with a mix of definition, concept, fact, and application cards"),
});

export const MindmapNodeSchema: z.ZodType<MindmapNode> = z.lazy(() =>
        z.object({
                id: z.string().describe("Unique identifier for the mindmap node"),
                label: z.string().describe("The text label displayed on the mindmap node"),
                note: z.object({
                        title: z.string().describe("Title of the note attached to the node"),
                        content: z.string().describe("Detailed content or description of the note"),
                }).describe("Optional or required note associated with the node"),
                children: z.array(MindmapNodeSchema).optional().describe("Child nodes branching off from this node"),
        })
);
export const mindmap = z.object({
        title: titleSchema,
        data: z.array(MindmapNodeSchema)
});

export default { createNote, createQuiz, createFlashcards, mindmap }