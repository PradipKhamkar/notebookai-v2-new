import { convertToModelMessages, generateText, Output, ToolLoopAgent, type UIMessage, type UIMessagePart } from "ai";
import type { ArtifactMsgMetaData, ArtifactToolResponse, AskQuestionPaylod, NewSessionPayload, SessionUIMessage, } from "../types/session.type.js";
import aiHelper from "../helper/ai.helper.js";
import sessionPrompt from "../ai/prompts/session.prompt.js";
import sessionSchems from "../ai/schema/session.schems.js";
import SessionModel from "../models/session.model.js";
import FileModel from "../models/file.model.js";
import { UserModel } from "../models/user.model.js";
import tools from "../ai/tools/index.js";
import purchaseHelper from "../helper/purchase.helper.js";


const AddSession = async (userId: string, data: NewSessionPayload) => {
        try {
                // check user plan
                await purchaseHelper.checkUsesAndUpdate(userId);

                const model = aiHelper.getModel('gemini', 'gemini-2.5-flash');
                const userInfo = await UserModel.findById(userId);
                if (!userInfo) throw new Error("Invaild User!")

                const modelMsg = await convertToModelMessages(data.messages);

                // // genearte summry
                const { output } = await generateText({
                        model: model,
                        instructions: sessionPrompt.genearteNameOfSession,
                        messages: modelMsg,
                        output: Output.object({
                                schema: sessionSchems.createWelcomeMsgAndTitle
                        })
                });

                const newSession = await SessionModel.create({
                        messages: [],
                        name: output.name,
                        createdBy: userId,
                        icon: output.icon
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
                const sessions = await SessionModel.find({ createdBy: userId }).select('-createdBy -__v -messages').sort({ createdAt: -1 });
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

const tutor = async (userId: string, data: AskQuestionPaylod) => {
        try {
                // check user plan
                await purchaseHelper.checkUsesAndUpdate(userId);


                const { message, sessionId } = data;

                const session = await SessionModel.findOne({ createdBy: userId, _id: sessionId });
                if (!session) throw new Error('Session Not Found!');
                await SessionModel.updateOne({ _id: sessionId, createdBy: userId }, { $push: { messages: message } });

                const updatedMsg = [...session.messages, message];
                const modelMsg = await convertToModelMessages(updatedMsg);

                // GET TOOL SET
                const toolsSet = tools.getTool(["create_quiz", "create_flashcards", "create_mindmap", "create_note"])
                const result = new ToolLoopAgent({
                        model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
                        instructions: sessionPrompt.studyTutor,
                        tools: toolsSet,
                        onToolExecutionEnd: ({ toolCall }) => {
                                console.log('ToolCall::', toolCall.toolName)
                        },
                        onEnd: async ({ steps }) => {
                                try {
                                        const assistantText = steps.map((step) => step.text).filter(Boolean).join("\n\n");

                                        const artifacts = steps.flatMap((step) =>
                                                step.content
                                                        .filter(
                                                                (item) =>
                                                                        item.type === "tool-result" &&
                                                                        item.toolName.startsWith("create_")
                                                        )
                                                        .map((item) => {
                                                                // @ts-ignore
                                                                const output = item.output as ArtifactToolResponse;
                                                                return {
                                                                        _id: output.artifactId,
                                                                        type: output.artifactType,
                                                                        title: output.title,
                                                                } as ArtifactMsgMetaData;
                                                        })
                                        );

                                        if (artifacts && artifacts?.length > 0) data?.emitArtifact?.(artifacts);

                                        const assistantMessage: SessionUIMessage = {
                                                id: crypto.randomUUID(),
                                                role: "assistant",
                                                parts: [{ type: "text", text: assistantText }],
                                                metadata: {
                                                        artifacts: artifacts || []
                                                },
                                        };

                                        await SessionModel.updateOne(
                                                { _id: sessionId, createdBy: userId },
                                                {
                                                        $push: {
                                                                messages: assistantMessage,
                                                        },
                                                }
                                        );


                                } catch (error) {
                                }
                        },
                        // @ts-ignore
                        toolsContext: tools.buildToolsContext(toolsSet, { sessionId: sessionId, ownerId: userId })
                });

                return result.stream({ messages: modelMsg });

        } catch (error) {
                console.log('error in ai chat::', error)
                throw error
        }
};

const deleteSession = async (userId: string, sessionId: string) => {
        try {
                const session = await SessionModel.deleteOne({ _id: sessionId, createdBy: userId });
                if (!session.deletedCount) throw new Error('Session Not Found!');
                return { message: "Session Deleted Successfully" }
        } catch (error: any) {
                throw error
        }
}
export default { AddSession, getAllSessionByUserId, getSessionByIdAndUserId, tutor, deleteSession }