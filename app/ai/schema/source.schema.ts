import z from "zod";

const summarySchema = z.string().min(2).describe('A structured summary of the source content using markdown bullet points. Each bullet should start with a bold keyword followed by a colon and a concise explanation.');
const titleSchema = z.string().min(2).describe('A short descriptive title (max 8 words) prefixed with a single relevant emoji. Example: "🧬 CRISPR Gene Editing Explained"');

const createSummary = z.object({
        title: titleSchema,
        data: z.object({
                summary: summarySchema
        })
});

export type ICreateSummary = z.infer<typeof createSummary>
export default { createSummary }