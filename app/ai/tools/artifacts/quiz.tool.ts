import { tool } from "ai";
import z from "zod";
import artifactService from "../../../services/artifact.service.js";

export const titleSchema = z.string().min(2).describe("A short descriptive title, e.g. 'Quiz about photosynthesis'");
export const icon = z.string().min(1).describe("emoji icon for study material");

const optionValue = z.enum(["a", "b", "c", "d"]);

const createQuiz = tool({
        description: "Create a multiple-choice practice quiz. Call this when the user asks for a quiz or practice questions. Each question must have exactly 4 options with values a, b, c, d and exactly one correct answer.",
        inputSchema: z.object({
                title: titleSchema,
                icon: icon,
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
                const { aiRespose } = await artifactService.addArtifact(context.ownerId, context.sessionId, {
                        title: input.title,
                        icon: input.icon,
                        data: input.data,
                        type: "quiz",
                });
                return aiRespose
        },
});

export default { createQuiz };