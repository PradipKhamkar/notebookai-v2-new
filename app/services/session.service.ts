import { convertToModelMessages, generateText, Output, type UIMessage } from "ai";
import type { NewSessionPayload } from "../types/session.type.js";
import aiHelper from "../helper/ai.helper.js";
import sessionPrompt from "../ai/prompts/session.prompt.js";
import sessionSchems from "../ai/schema/session.schems.js";
import SessionModel from "../models/session.model.js";
import purchaseHelper from "../helper/purchase.helper.js";
import FileModel from "../models/file.model.js";
import { UserModel } from "../models/user.model.js";


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
                                        mediaType: fileRes.mimeType
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
                });

                if (data?.fileId) await FileModel.updateOne({ _id: data.fileId }, { $set: { sessionId: newSession?._id } })
                const sessionInfo = await SessionModel.findById(newSession._id).select('-createdBy -__v');
                return { message: "Session Created Successfully", session: sessionInfo }

        } catch (error) {
                console.log('error::', error)
                throw error
        }
};

export default { AddSession }