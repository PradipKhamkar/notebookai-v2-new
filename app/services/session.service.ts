import { convertToModelMessages, generateText, Output, type UIMessage } from "ai";
import type { NewSessionPayload } from "../types/session.type.js";
import aiHelper from "../helper/ai.helper.js";
import sessionPrompt from "../ai/prompts/session.prompt.js";
import sessionSchems from "../ai/schema/session.schems.js";
import SessionModel from "../models/session.model.js";
import purchaseHelper from "../helper/purchase.helper.js";


const AddSession = async (userId: string, data: NewSessionPayload) => {
        try {
                await purchaseHelper.checkUsesAndUpdate(userId as string, 'messages');

                const model = aiHelper.getModel('gemini', 'gemini-2.5-flash');

                const messages: UIMessage[] = []
                switch (data.type) {
                        case "file":
                                messages.push({
                                        id: Math.random().toString(),
                                        parts: [{
                                                type: "file",
                                                url: data.fileInfo?.url as string,
                                                mediaType: data.fileInfo?.fileType as string
                                        }],
                                        role: "user"
                                })
                                break
                }
                // const modelMsg = await convertToModelMessages(data.messages);

                // // genearte summry
                // const { output } = await generateText({
                //         model: model,
                //         instructions: sessionPrompt.getSessionTitleAndWelcomeMsg,
                //         messages: modelMsg,
                //         output: Output.object({
                //                 schema: sessionSchems.createWelcomeMsgAndTitle
                //         })
                // });

                // const msg: UIMessage = {
                //         id: Math.random().toString(),
                //         parts: [{
                //                 type: "text",
                //                 text: output.data.welcomeMsg
                //         }],
                //         role: "assistant",
                // };

                // // create session
                // console.log('output::', output);
                // const newSession = await SessionModel.create({
                //         messages: [...data.messages, msg],
                //         name: output.title,
                //         createdBy: userId
                // });

                // const sessionInfo = await SessionModel.findById(newSession.id).select('-createdBy -__v');
                return { message: "Session Created Successfully", session: {} }

        } catch (error) {
                throw error
        }
};


export default { AddSession }