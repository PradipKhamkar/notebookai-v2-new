import z from "zod";

const createWelcomeMsgAndTitle = z.object({
        name: z.string().describe("name session"),
        icon: z.string().describe('emoji icon for session name')
});


export default { createWelcomeMsgAndTitle }