import { z } from 'zod';
import { titleSchema } from './content.schema.js';

export const TitleBlockSchema = z.object({
        type: z.literal('title'),
        text: z.string().min(1).describe('Topic name'),
});


export const TextBlockSchema = z.object({
        type: z.literal('text'),
        text: z.string().min(1).describe('Short text to explain'),
});

export const ListBlockSchema = z.object({
        type: z.literal('list'),
        items: z.array(z.string().min(1)).min(1).describe('List of short points'),
});

// export const FlowBlockSchema = z.object({
//         type: z.literal('flow'),
//         items: z.array(z.string().min(1).max(28)).min(2).max(6).describe('Ordered stages of a process, drawn as boxes with arrows. 2 to 6 labels, each under 28 characters.'),
// });


// export const CycleBlockSchema = z.object({
//         type: z.literal('cycle'),
//         items: z.array(z.string().min(1).max(22)).min(3).max(6)
//                 .describe('Stages of a repeating loop, drawn around a circle in order. 3 to 6 labels, each under 22 characters.'),
//         center: z.string().max(14).optional().describe('Optional name of the cycle, shown in the middle.'),
// });


export const BlockSchema = z.discriminatedUnion('type', [
        TitleBlockSchema,
        TextBlockSchema,
        ListBlockSchema,
        // FlowBlockSchema,
        // CycleBlockSchema,
]);


export const LessonStepSchema = z.object({
        say: z.string().min(1).max(320).describe('What the tutor says out loud for this step. Spoken language: short sentences, no symbols, no "as shown above". It explains the block, it does not read it.'),
        block: BlockSchema.optional().describe('What appears on the board while the tutor says this. Omit only if the step is pure talk.'),
});


const LessonSchema = z.object({
        title: titleSchema,
        data: z.array(LessonStepSchema).describe(""),
});

export type UIBlock = z.infer<typeof BlockSchema>;
export type TextBlockType = Extract<UIBlock, { type: "text" }>;
export type ListBlockType = Extract<UIBlock, { type: "list" }>
export type TitleBlockType = Extract<UIBlock, { type: "title" }>
export type LessonStep = z.infer<typeof LessonStepSchema>

export default { LessonSchema, LessonStepSchema }