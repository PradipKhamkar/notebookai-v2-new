import { convertToModelMessages, ToolLoopAgent } from "ai";
import aiHelper from "../helper/ai.helper.js";
import { ConversationModel } from "../models/conversation.model.js";
import tools from "../ai/tools/index.js";
import sourcePrompt from "../ai/prompts/source.prompt.js";
import purchaseHelper from "../helper/purchase.helper.js";
const chat = async (payload) => {
    try {
        const { messages, sourceId } = payload;
        const modelMsg = await convertToModelMessages(messages);
        await purchaseHelper.checkUsesAndUpdate(payload.userId, 'messages');
        const oldMsg = await ConversationModel.findOne({ sourceId: sourceId, createdBy: payload.userId });
        if (!oldMsg) {
            await ConversationModel.create({
                sourceId: sourceId,
                createdBy: payload.userId,
                messages: messages
            });
        }
        else {
            await ConversationModel.updateOne({ sourceId: sourceId, createdBy: payload.userId }, { $push: { messages: messages[messages.length - 1] } });
        }
        ;
        const toolsSet = tools.getTool(['search_into_source']);
        const result = new ToolLoopAgent({
            model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
            instructions: sourcePrompt.sourceAssistent,
            onStepEnd: async ({ text }) => {
                if (text) {
                    const newMsg = {
                        role: "assistant",
                        parts: [{ type: "text", text: text }],
                        id: Math.random().toString()
                    };
                    await ConversationModel.updateOne({ sourceId: sourceId, createdBy: payload.userId }, { $push: { messages: newMsg } });
                }
            },
            tools: toolsSet,
            toolsContext: tools.buildToolsContext(toolsSet, { sourceId })
        });
        return result.stream({ messages: modelMsg });
    }
    catch (error) {
        throw error;
    }
};
const getConversationBySourceId = async (userId, sourceId) => {
    try {
        const conversation = await ConversationModel.findOne({ sourceId: sourceId, createdBy: userId });
        return { conversation: conversation, message: "Conversation fetched successfully" };
    }
    catch (error) {
        throw error;
    }
};
export default { chat, getConversationBySourceId };
//# sourceMappingURL=conversation.service.js.map