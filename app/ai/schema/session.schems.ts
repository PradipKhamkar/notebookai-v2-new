import z from "zod";

const createWelcomeMsgAndTitle = z.object({
        title: z.string().describe("Session title"),
        data: z.object({
                welcomeMsg: z.string().min(2).describe('A short, friendly welcome message (1–2 sentences) that mentions the main topic and invites the student to learn.'),
                // topics: z.array(z.string()).min(1).describe("List of important topics covered in the source content").max(10),
                // suggestedQuestions: z.array(z.string()).min(1).describe("List of suggested questions based on the source content which used to show user to start chat").max(6)
        })
});


export default { createWelcomeMsgAndTitle }