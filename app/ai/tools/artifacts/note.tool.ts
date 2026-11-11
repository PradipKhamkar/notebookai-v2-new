import { tool } from "ai";
import { z } from "zod";
import { ContentModel } from "../../../models/content.model.js";
import type { ArtifactToolResponse } from "../../../types/session.type.js";
import { icon } from "./quiz.tool.js";
import artifactService from "../../../services/artifact.service.js";

export const titleSchema = z
        .string()
        .min(2)
        .describe("A short descriptive title of content like quiz about photosynthesis");

export const createNoteSchema = z.object({
        title: titleSchema,
        data: z.object({
                note: z.string().min(10).describe("Study note in markdown format"),
        }),
        icon: icon
});

export type CreateNote = z.infer<typeof createNoteSchema>;

export const createNoteTool = tool({
        description:
                "Create a study note on a topic. Use when the user asks for notes, a summary, " +
                "a cheat sheet, or a revision sheet. The note must be written in markdown " +
                "(headings, bullet points, bold key terms, short examples).",
        inputSchema: createNoteSchema,
        contextSchema: z.object({
                sessionId: z.string(),
                ownerId: z.string(),
        }),
        execute: async (input, { context }) => {
                try {
                        const { aiRespose } = await artifactService.addArtifact(context.ownerId, context.sessionId, {
                                title: input.title,
                                icon: input.icon,
                                data: input.data,
                                type: "note",
                        });
                        return aiRespose
                } catch (error) {
                        throw error
                }
        },
});
export default { createNoteTool }