import { generateText, Output, tool } from "ai";
import z from "zod";
import { SourceModel } from "../../models/source.model.js";
import aiHelper from "../../helper/ai.helper.js";
import sourcePrompt from "../prompts/source.prompt.js";
const searchSource = tool({
    description: "use this tool for answer user question from its source",
    inputSchema: z.object({
        query: z.string().describe("the query for which we want to search")
    }),
    contextSchema: z.object({
        sourceId: z.string().describe("the source id from which we want to search"),
    }),
    execute: async ({ query }, { context }) => {
        try {
            // fetch source info
            const source = await SourceModel.findById(context.sourceId);
            if (!source)
                throw new Error("Source not found");
            let ctxMsg = { role: "user", content: [{ type: "text", text: "below is source for answer user query" }, { type: 'file', data: source.metaData.url, mediaType: source.type === "youtube" ? 'video/mp4' : source.metaData.fileType ?? '' }] };
            const { output } = await generateText({
                instructions: sourcePrompt.searchAssistent,
                model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
                messages: [ctxMsg, { role: "user", content: `${query}` }],
                output: Output.object({
                    schema: z.object({
                        answer: z.string().describe("the deatils answer for the query")
                    })
                })
            });
            return output.answer;
        }
        catch (error) {
            throw error;
        }
    }
});
export default { searchSource };
//# sourceMappingURL=source.tool.js.map