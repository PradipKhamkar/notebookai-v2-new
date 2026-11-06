import { tool } from "ai";
import { z } from "zod";
import { ContentModel } from "../../../models/content.model.js";
import type { ArtifactToolResponse } from "../../../types/session.type.js";

export const titleSchema = z
        .string()
        .min(2)
        .describe("A short descriptive title of content like quiz about photosynthesis");

export const createNoteSchema = z.object({
        title: titleSchema,
        data: z.object({
                note: z.string().min(10).describe("Study note in markdown format"),
        }),
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

                        const newNote = await ContentModel.create({
                                type: "note",
                                sessionId: context.sessionId,
                                title: input.title,
                                createdBy: context.ownerId,
                                data: input.data,
                                isExample: false,
                        });

                        return {
                                artifactId: String(newNote._id),
                                artifactType: "note",
                                title: input.title,
                        } as ArtifactToolResponse;

                } catch (error) {
                        throw error
                }
        },
});
export default { createNoteTool }