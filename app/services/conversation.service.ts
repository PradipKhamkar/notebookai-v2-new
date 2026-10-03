import { convertToModelMessages, type ModelMessage, tool, ToolLoopAgent, type UIMessage } from "ai";
import type { ChatRequestPayload } from "../types/conversation.type.ts";
import aiHelper from "../helper/ai.helper.ts";
import { ConversationModel } from "../models/conversation.model.ts";
import tools from "../ai/tools/index.ts";
import sourcePrompt from "../ai/prompts/source.prompt.ts";
import purchaseHelper from "../helper/purchase.helper.ts";

const chat = async (payload: ChatRequestPayload) => {
        try {
                const { messages, sourceId } = payload
                const modelMsg = await convertToModelMessages(messages);
                // check usese and procced
                await purchaseHelper.checkUsesAndUpdate(payload.userId as string, 'messages')
                // store user message
                const oldMsg = await ConversationModel.findOne({ sourceId: sourceId, createdBy: payload.userId });
                if (!oldMsg) {
                        await ConversationModel.create({
                                sourceId: sourceId,
                                createdBy: payload.userId,
                                messages: messages
                        });
                } else {
                        await ConversationModel.updateOne({ sourceId: sourceId, createdBy: payload.userId }, { $push: { messages: messages[messages.length - 1] } });
                };

                const toolsSet = tools.getTool(['search_into_source']);

                const result = new ToolLoopAgent({
                        model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
                        instructions: sourcePrompt.sourceAssistent,
                        onStepEnd: async ({ content, text }) => {
                                if (text) {
                                        const newMsg: UIMessage = {
                                                role: "assistant",
                                                parts: [{ type: "text", text: text }],
                                                id: Math.random().toString()
                                        }
                                        await ConversationModel.updateOne({ sourceId: sourceId, createdBy: payload.userId }, { $push: { messages: newMsg } });
                                }
                        },
                        tools: toolsSet,
                        // @ts-ignore
                        toolsContext: tools.buildToolsContext(toolsSet, { sourceId })
                });

                return result.stream({ messages: modelMsg });

        } catch (error) {
                throw error
        }
};

const getConversationBySourceId = async (userId: string, sourceId: string) => {
        try {
                const conversation = await ConversationModel.findOne({ sourceId: sourceId, createdBy: userId });
                return { conversation: conversation, message: "Conversation fetched successfully" };
        } catch (error) {
                throw error
        }
}
export default { chat, getConversationBySourceId }