import { z } from 'zod';
import { titleSchema } from './content.schema.js';

// ---------------------------------------------------------------------------
// Lesson Visual Blocks Schemas
// ---------------------------------------------------------------------------

export const TitleBlockSchema = z.object({
	type: z.literal('title'),
	text: z.string().min(1).describe('Topic name or main title'),
});

export const TextBlockSchema = z.object({
	type: z.literal('text'),
	text: z.string().min(1).describe('Short explanatory text, formula, or takeaway'),
});

export const ListBlockSchema = z.object({
	type: z.literal('list'),
	items: z.array(z.string().min(1)).min(1).describe('List of short key points or bullets'),
});

export const CompareSideSchema = z.object({
	title: z.string().min(1).describe('Title of this side or category'),
	points: z.array(z.string().min(1)).min(1).describe('Key comparison points for this side'),
});

export const CompareBlockSchema = z.object({
	type: z.literal('compare'),
	left: CompareSideSchema.describe('Left side of the comparison'),
	right: CompareSideSchema.describe('Right side of the comparison'),
});

export const StepItemSchema = z.object({
	text: z.string().min(1).describe('The instruction or step action'),
	result: z.string().optional().describe('Optional outcome or result of the step (e.g. "6 C" or "12 turns")'),
});

export const StepsBlockSchema = z.object({
	type: z.literal('steps'),
	items: z.array(StepItemSchema).min(1).describe('Ordered list of step-by-step actions or calculations'),
});

export const QuestionBlockSchema = z.object({
	type: z.literal('question'),
	prompt: z.string().min(1).describe('Interactive quiz or check-for-understanding question'),
	options: z.array(z.string().min(1)).min(2).max(4).describe('2 to 4 options for the student to choose from'),
	answer: z.number().int().min(0).describe('0-based index of the correct option in the options array'),
	explain: z.string().min(1).describe('Brief explanation of why the correct option is right'),
});

export const FlowBlockSchema = z.object({
	type: z.literal('flow'),
	items: z.array(z.string().min(1)).min(2).describe('Ordered stages of a process, drawn as boxes with connecting arrows.'),
});

export const CycleBlockSchema = z.object({
	type: z.literal('cycle'),
	items: z.array(z.string().min(1)).min(3).describe('Stages of a repeating loop, drawn around a circle in order.'),
	center: z.string().optional().describe('Optional name of the cycle, shown in the middle of the circle.'),
});

export const TreeChildSchema = z.object({
	label: z.string().min(1).describe('Branch category or parent label'),
	leaves: z.array(z.string().min(1)).min(1).describe('Leaf items or child nodes under this branch'),
});

export const TreeBlockSchema = z.object({
	type: z.literal('tree'),
	root: z.string().min(1).describe('Root concept or central node at top of tree'),
	children: z.array(TreeChildSchema).min(1).describe('Branches extending from the root concept'),
});

// ---------------------------------------------------------------------------
// Discriminated Union of all visual blocks
// ---------------------------------------------------------------------------

export const BlockSchema = z.discriminatedUnion('type', [
	TitleBlockSchema,
	TextBlockSchema,
	ListBlockSchema,
	CompareBlockSchema,
	StepsBlockSchema,
	QuestionBlockSchema,
	FlowBlockSchema,
	CycleBlockSchema,
	TreeBlockSchema,
]);

// ---------------------------------------------------------------------------
// Lesson Step & Full Lesson Schemas
// ---------------------------------------------------------------------------

export const LessonStepSchema = z.object({
	say: z.string().min(1).describe('What the tutor says out loud for this step. Spoken language: short sentences, no symbols, no "as shown above". It explains the block, it does not read it.'),
	block: BlockSchema.optional().describe('What appears on the board while the tutor says this. Omit only if the step is pure talk.'),
});

const LessonSchema = z.object({
	title: titleSchema,
	data: z.array(LessonStepSchema).describe('Step-by-step interactive lesson sequence in logical learning order'),
});

// ---------------------------------------------------------------------------
// Exported TypeScript Types
// ---------------------------------------------------------------------------

export type UIBlock = z.infer<typeof BlockSchema>;
export type TitleBlockType = Extract<UIBlock, { type: 'title' }>;
export type TextBlockType = Extract<UIBlock, { type: 'text' }>;
export type ListBlockType = Extract<UIBlock, { type: 'list' }>;
export type CompareBlockType = Extract<UIBlock, { type: 'compare' }>;
export type StepsBlockType = Extract<UIBlock, { type: 'steps' }>;
export type QuestionBlockType = Extract<UIBlock, { type: 'question' }>;
export type FlowBlockType = Extract<UIBlock, { type: 'flow' }>;
export type CycleBlockType = Extract<UIBlock, { type: 'cycle' }>;
export type TreeBlockType = Extract<UIBlock, { type: 'tree' }>;
export type LessonStep = z.infer<typeof LessonStepSchema>;

export default { LessonSchema, LessonStepSchema };
