import apiResponse from "../utils/apiResponse.js";
import conversationService from "../services/conversation.service.js";
import { pipeUIMessageStreamToResponse, toUIMessageStream } from "ai";
const chat = async (req, res) => {
    try {
        const { messages, sourceId } = req.body;
        const result = await conversationService.chat({
            messages,
            sourceId,
            userId: req.userId || ''
        });
        pipeUIMessageStreamToResponse({
            response: res,
            stream: toUIMessageStream({
                stream: result.stream,
                onError: () => 'Something went wrong.',
            }),
        });
    }
    catch (error) {
        console.error('Error in chat controller:', error);
        if (!res.headersSent) {
            apiResponse.error(res, error?.message || 'Something went wrong');
        }
        else {
            res.end();
        }
    }
};
const getConversationBySourceId = async (req, res) => {
    try {
        const { sourceId } = req.params;
        const userId = req.userId || '';
        const conversation = await conversationService.getConversationBySourceId(userId, sourceId);
        apiResponse.success(res, conversation, 'Conversation fetched successfully');
    }
    catch (error) {
        apiResponse.error(res, error?.message || 'Something went wrong');
    }
};
export default { chat, getConversationBySourceId };
//# sourceMappingURL=conversation.controller.js.map