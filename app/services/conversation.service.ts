import { convertToModelMessages, streamText } from "ai";
import type { ChatRequestPayload } from "../types/conversation.type.ts";
import aiHelper from "../helper/ai.helper.ts";

const chat = async (payload: ChatRequestPayload) => {
        try {
                const { messages, sourceId } = payload
                const modelMsg = await convertToModelMessages(messages);

                // 1. Initialize streaming with desired LLM model
                const result = streamText({
                        model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
                        messages: modelMsg
                });
                return result
        } catch (error) {
                throw error
        }
};


export default { chat }