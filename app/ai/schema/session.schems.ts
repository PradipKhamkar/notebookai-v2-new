import z from "zod";

const createWelcomeMsgAndTitle = z.object({
        name: z.string().describe("name session"),
});


export default { createWelcomeMsgAndTitle }