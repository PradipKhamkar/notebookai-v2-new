import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.js";
import conversationService from "../services/conversation.service.js";
import { pipeUIMessageStreamToResponse, toUIMessageStream } from "ai";

const chat = async (req: Request, res: Response) => {
        try {
                const { messages, sourceId } = req.body;

                const result = await conversationService.chat({
                        messages,
                        sourceId,
                        userId: (req.userId as string) || ''
                });

                pipeUIMessageStreamToResponse({
                        response: res,
                        stream: toUIMessageStream({
                                stream: result.stream,
                                onError: () => 'Something went wrong.', // don't leak internals to the client
                        }),
                });

        } catch (error: any) {
                console.error('Error in chat controller:', error);
                if (!res.headersSent) {
                        apiResponse.error(res, error?.message || 'Something went wrong');
                } else {
                        res.end();
                }
        }
};

const getConversationBySourceId = async (req: Request, res: Response) => {
        try {
                const { sourceId } = req.params;
                const userId = (req.userId as string) || '';
                const conversation = await conversationService.getConversationBySourceId(userId, sourceId as string);
                apiResponse.success(res, conversation, 'Conversation fetched successfully');
        } catch (error: any) {
                apiResponse.error(res, error?.message || 'Something went wrong');

        }
}
export default { chat, getConversationBySourceId }
