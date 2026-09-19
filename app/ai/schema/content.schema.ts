import z from "zod";

const titleSchema = z.string().min(2).describe('Title of a content');

const createNote = z.object({
        title: titleSchema,
        note: z.string().min(10).describe('Full of note with markdown format')
});

export type ICreateNote = z.infer<typeof createNote>
export default { createNote }