import { convertToModelMessages, generateText, Output, ToolLoopAgent, type UIMessage } from "ai";
import type { AskQuestionPaylod, NewSessionPayload } from "../types/session.type.js";
import aiHelper from "../helper/ai.helper.js";
import sessionPrompt from "../ai/prompts/session.prompt.js";
import sessionSchems from "../ai/schema/session.schems.js";
import SessionModel from "../models/session.model.js";
import FileModel from "../models/file.model.js";
import { UserModel } from "../models/user.model.js";
import sourcePrompt from "../ai/prompts/source.prompt.js";


const AddSession = async (userId: string, data: NewSessionPayload) => {
        try {
                const model = aiHelper.getModel('gemini', 'gemini-2.5-flash');
                const userInfo = await UserModel.findById(userId);
                if (!userInfo) throw new Error("Invaild User!");

                const messages: UIMessage[] = []
                if (data?.fileId) {
                        // fetch file
                        const fileRes = await FileModel.findById(data.fileId);
                        if (!fileRes) throw new Error('File Not Found Please Check FileId!');
                        messages.push({
                                id: Math.random().toString(),
                                parts: [{
                                        type: "file",
                                        url: fileRes.url as string,
                                        mediaType: fileRes.mimeType,
                                        filename: fileRes.name,
                                }],
                                role: "user"
                        })
                }

                const modelMsg = await convertToModelMessages(messages);

                // // genearte summry
                const { output } = await generateText({
                        model: model,
                        instructions: sessionPrompt.getSessionTitleAndWelcomeMsg.replace('{{student_name}}', userInfo.name),
                        messages: modelMsg,
                        output: Output.object({
                                schema: sessionSchems.createWelcomeMsgAndTitle
                        })
                });
                messages.push({
                        id: Math.random().toString(),
                        parts: [{
                                type: "text",
                                text: output.data.welcomeMsg
                        }],
                        role: "assistant"
                })

                const newSession = await SessionModel.create({
                        messages: messages,
                        name: output.title,
                        createdBy: userId,
                        icon: output.data.icon
                });

                if (data?.fileId) await FileModel.updateOne({ _id: data.fileId }, { $set: { sessionId: newSession?._id } })
                const sessionInfo = await SessionModel.findById(newSession._id).select('-createdBy -__v');
                return { message: "Session Created Successfully", session: sessionInfo }

        } catch (error) {
                console.log('error::', error)
                throw error
        }
};

const getAllSessionByUserId = async (userId: string) => {
        try {
                const sessions = await SessionModel.find({ createdBy: userId }).select('-createdBy -__v -messages');
                return {
                        message: "session feteched sucessfully!",
                        sessions: sessions
                };
        } catch (error) {
                console.log('error::', error)
                throw error
        }
}

const getSessionByIdAndUserId = async (userId: string, sessionId: string) => {
        try {
                const session = await SessionModel.findOne({ _id: sessionId, createdBy: userId }).select('-createdBy -__v');
                if (!session) throw new Error("Session Not Found!")
                return {
                        message: "session feteched sucessfully!",
                        session: session
                }
        } catch (error) {
                console.log('error::', error)
                throw error
        }
}

const askQuestion = async (userId: string, data: AskQuestionPaylod) => {
        try {
                const { message, sessionId } = data;

                const session = await SessionModel.findOne({ createdBy: userId, _id: sessionId });
                if (!session) throw new Error('Session Not Found!');
                await SessionModel.updateOne({ _id: sessionId, createdBy: userId }, { $push: { messages: message } });

                const updatedMsg = [...session.messages, message];
                const modelMsg = await convertToModelMessages(updatedMsg);

                const result = new ToolLoopAgent({
                        model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
                        instructions: sourcePrompt.sourceAssistent,
                        onStepEnd: async ({ text }) => {
                                //  await SessionModel.updateOne({ _id: sessionId, createdBy: userId }, { $push: { messages: message } });
                        },
                });

                return result.stream({ messages: modelMsg });

        } catch (error) {
                throw error
        }
};
export default { AddSession, getAllSessionByUserId, getSessionByIdAndUserId, askQuestion }