import z from "zod";

const summarySchema = z.string().min(2).describe('A structured summary of the source content using markdown bullet points. Each bullet should start with a bold keyword followed by a colon and a concise explanation.');
const titleSchema = z.string().min(2).describe('A short descriptive title (max 8 words) prefixed with a single relevant emoji. Example: "🧬 CRISPR Gene Editing Explained"');

const createSummary = z.object({
        title: titleSchema,
        data: z.object({
                summary: summarySchema,
                topics: z.array(z.string()).min(1).describe("List of important topics covered in the source content").max(10),
                suggestedQuestions: z.array(z.string()).min(1).describe("List of suggested questions based on the source content which used to show user to start chat").max(6)
        })
});

const createWelcomeMsgAndTitle = z.object({
        title: titleSchema,
        data: z.object({
                welcomeMsg: z.string().min(2).describe('A short, friendly welcome message (1–2 sentences) that mentions the main topic and invites the student to learn.'),
                topics: z.array(z.string()).min(1).describe("List of important topics covered in the source content").max(10),
                suggestedQuestions: z.array(z.string()).min(1).describe("List of suggested questions based on the source content which used to show user to start chat").max(6)
        })
});


export type ICreateSummary = z.infer<typeof createSummary>
export type ICreateWelcomeMsgAndTitle = z.infer<typeof createWelcomeMsgAndTitle>
export default { createSummary, createWelcomeMsgAndTitle }