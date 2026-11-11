import { tool } from "ai";
import { z } from "zod";
import type { MindmapNode } from "../../../types/content.type.js";
import { ContentModel } from "../../../models/content.model.js";
import type { ArtifactToolResponse } from "../../../types/session.type.js";
import { icon } from "./quiz.tool.js";
import artifactService from "../../../services/artifact.service.js";


export const MindmapNodeSchema: z.ZodType<MindmapNode> = z.lazy(() =>
        z.object({
                id: z.string().describe("Unique identifier for the mindmap node"),
                label: z.string().describe("The text label displayed on the mindmap node with emoji prefix"),
                note: z
                        .object({
                                title: z.string().describe("Title of the note attached to the node with emoji prefix"),
                                content: z.string().describe("Detailed content or description of the note"),
                        })
                        .describe("Note associated with the node"),
                children: z.array(MindmapNodeSchema).optional().describe("Child nodes branching off from this node"),
        })
);

export const mindmapSchema = z.object({
        title: z.string().describe("Title of the mindmap"),
        data: z.array(MindmapNodeSchema).describe("Root nodes of the mindmap"),
        icon: icon
});

export type Mindmap = z.infer<typeof mindmapSchema>;

export const createMindmapTool = tool({
        description:
                "Create a structured mindmap on a topic. Use when the user asks to visualize, " +
                "organize, or break down a topic into a mindmap. Every node must have a unique id, " +
                "an emoji-prefixed label, and a note with an emoji-prefixed title and detailed content.",
        inputSchema: mindmapSchema,
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
                                type: "mindmap",
                        });
                        return aiRespose
                } catch (error) {
                        throw error
                }
        },
});

export default { createMindmapTool }