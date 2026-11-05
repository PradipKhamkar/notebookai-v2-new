import { tool } from "ai";
import z from "zod";
import { ContentModel } from "../../../models/content.model.js";
import type { ArtifactToolResponse } from "../../../types/session.type.js";

export const titleSchema = z.string().min(2).describe('A short descriptive title of content like quiz about photosynthesis');

const createQuiz = tool({
        description: "quiz for practise",
        inputSchema: z.object({
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
                                .describe(""),
                        answer: z
                                .string()
                                .describe("The `value` of the correct option (e.g. 'b'), not its label"),
                        explanation: z
                                .string()
                                .describe("1-2 sentences explaining why the answer is correct"),
                        type: z.literal("multiple-choice"),
                })),
        }),
        contextSchema: z.object({
                sessionId: z.string('session id for store quiz'),
                ownerId: z.string('owner id for store quiz')
        }),
        execute: async (input, context) => {
                try {
                        const newQuiz = await ContentModel.create({
                                type: "quiz",
                                sessionId: context.context.sessionId,
                                title: input.title,
                                createdBy: context.context.ownerId,
                                data: input.data,
                                isExample: false,
                        });
                        return {
                                artifactId: newQuiz._id,
                                artifactType: "quiz",
                                title: input.title,
                        } as ArtifactToolResponse
                } catch (error) {
                        throw error
                }
        }
});

export default { createQuiz }