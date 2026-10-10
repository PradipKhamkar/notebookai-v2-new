import z from "zod";

const summarySchema = z.string().min(2).describe('Summary of a source content');
const titleSchema = z.string().min(2).describe('Title of a source with proper emoji as a prefix');

const createSummary = z.object({
        title: titleSchema,
        data: z.object({
                summary: summarySchema
        })
});

export type ICreateSummary = z.infer<typeof createSummary>
export default { createSummary }