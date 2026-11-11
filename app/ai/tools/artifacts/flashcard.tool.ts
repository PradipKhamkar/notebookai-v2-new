import { tool } from "ai";
import z from "zod";
import { icon, titleSchema } from "./quiz.tool.js"; // adjust to wherever titleSchema lives
import artifactService from "../../../services/artifact.service.js";

export const flashcardsSchema = z.object({
        title: titleSchema,
        data: z
                .array(
                        z.object({
                                front: z
                                        .string()
                                        .describe("The question, term, or prompt shown on the front of the card. Keep it short and specific"),
                                back: z
                                        .string()
                                        .describe("The direct answer or definition shown on the back. Keep it concise"),
                                explanation: z
                                        .string()
                                        .describe("1-2 sentences of extra context that helps the learner understand or remember the answer"),
                        })
                )
                .min(10)
                .max(20)
                .describe(
                        "10 to 20 flashcards covering key concepts, terms, and facts from the source, with a mix of definition, concept, fact, and application cards"
                ),
        icon: icon
});
const createFlashcards = tool({
        description: "Create a set of flashcards for studying and memorization. Call this when the user asks for flashcards, study cards, or help memorizing a topic. Write 10 to 20 cards, each with a short front, a concise back, and a brief explanation.",
        inputSchema: flashcardsSchema,
        contextSchema: z.object({
                sessionId: z.string(),
                ownerId: z.string(),
        }),
        execute: async (input, { context }) => {
                const { aiRespose } = await artifactService.addArtifact(context.ownerId, context.sessionId, {
                        title: input.title,
                        icon: input.icon,
                        data: input.data,
                        type: "flashcards",
                });
                return aiRespose
        },
});
export default { createFlashcards };