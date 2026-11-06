import { tool } from "ai";
import z from "zod";
import { ContentModel } from "../../../models/content.model.js";
import type { ArtifactToolResponse } from "../../../types/session.type.js";

export const titleSchema = z
        .string()
        .min(2)
        .describe("A short descriptive title, e.g. 'Quiz about photosynthesis'");

const optionValue = z.enum(["a", "b", "c", "d"]);

const createQuiz = tool({
        description: "Create a multiple-choice practice quiz. Call this when the user asks for a quiz or practice questions. Each question must have exactly 4 options with values a, b, c, d and exactly one correct answer.",
        inputSchema: z.object({
                title: titleSchema,
                data: z
                        .array(
                                z.object({
                                        question: z.string().describe("The question text"),
                                        options: z
                                                .array(
                                                        z.object({
                                                                label: z.string().describe("Display text of the option, e.g. 'Paris'"),
                                                                value: optionValue.describe("Option id: 'a', 'b', 'c' or 'd'"),
                                                        })
                                                )
                                                .length(4)
                                                .describe("Exactly 4 options, with values a, b, c, d in order"),
                                        answer: optionValue.describe(
                                                "The `value` of the correct option (e.g. 'b'), NOT its label"
                                        ),
                                        explanation: z
                                                .string()
                                                .describe("1-2 sentences explaining why the answer is correct"),
                                })
                        )
                        .min(1)
                        .describe("List of quiz questions"),
        }),
        contextSchema: z.object({
                sessionId: z.string(),
                ownerId: z.string(),
        }),
        execute: async (input, { context }) => {
                const newQuiz = await ContentModel.create({
                        type: "quiz",
                        sessionId: context.sessionId,
                        title: input.title,
                        createdBy: context.ownerId,
                        data: input.data.map((q) => ({ ...q, type: "multiple-choice" as const })),
                        isExample: false,
                });

                return {
                        artifactId: String(newQuiz._id),
                        artifactType: "quiz",
                        title: input.title,
                } as ArtifactToolResponse;
        },
});

export default { createQuiz };