import { convertToModelMessages, ToolLoopAgent, type UIMessage } from "ai";
import type { ChatRequestPayload } from "../types/conversation.type.ts";
import aiHelper from "../helper/ai.helper.ts";
import { SourceModel } from "../models/source.model.ts";
import { ConversationModel } from "../models/conversation.model.ts";

const chat = async (payload: ChatRequestPayload) => {
        try {
                const { messages, sourceId } = payload
                const modelMsg = await convertToModelMessages(messages);

                // fetch source info
                const source = await SourceModel.findById(sourceId);
                if (!source) throw new Error("Source not found");

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

                let ctxMsg: any = {}

                // file path;
                switch (source.type) {
                        case "youtube":
                                ctxMsg = { role: "user", content: [{ type: 'file', data: source.metaData.url, mediaType: 'video/mp4' },] }
                                break
                        case "document":
                                ctxMsg = { role: "user", content: [{ type: 'file', data: source.metaData.url, mediaType: source.metaData.fileType || '' },] }
                                break
                        default:
                                throw new Error("Invalid source type");
                };

                const result = new ToolLoopAgent({
                        model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
                        instructions: "yout helpfull ai study buddy which help user for learning and understanding the content of the source provided.",
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
                });

                return result.stream({ messages: [ctxMsg, ...modelMsg] });

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