import contentPrompt from "../ai/prompts/content.prompt.js";
import contentSchema from "../ai/schema/content.schema.js";
import infograph from "../ai/schema/infograph.schema.js";
import aiHelper from "../helper/ai.helper.js";
import { ContentModel } from "../models/content.model.js";
import { SourceModel } from "../models/source.model.js";
import type { Content, CreateContentPayload } from "../types/content.type.js";
import { generateText, Output, type ModelMessage } from 'ai';
import purchaseHelper from "../helper/purchase.helper.js";
import lessonSchema from "../ai/schema/lesson.schema.js";

const create = async (userId: string, data: CreateContentPayload) => {
        try {
                await purchaseHelper.checkUsesAndUpdate(userId as string, 'content');
                const { type, sourceId, instruction: message, language } = data;
                let instrucation = '', outputSchema: any, messages: ModelMessage[] = [];

                const source = await SourceModel.findById(sourceId).select('metaData type');
                if (!source) throw new Error('Source Not Found Please!!');
                messages = [{ role: "user", content: [{ type: 'file', data: source.metaData.url, mediaType: source.type === "youtube" ? 'video/mp4' : source.metaData.fileType ?? '' },] }]

                switch (type) {
                        case "note":
                                instrucation = contentPrompt.createNote;
                                outputSchema = contentSchema.createNote;
                                break;
                        case "quiz":
                                instrucation = contentPrompt.createQuiz;
                                outputSchema = contentSchema.createQuiz;
                                break;
                        case "flashcards":
                                instrucation = contentPrompt.createFlashcards;
                                outputSchema = contentSchema.createFlashcards;
                                break;
                        case "mindmap":
                                instrucation = contentPrompt.createMindmap;
                                outputSchema = contentSchema.mindmap;
                                break;
                        case "infograph":
                                instrucation = contentPrompt.createInfograph;
                                outputSchema = infograph.StudyOverviewSchema
                                break;
                        case "lesson":
                                instrucation = contentPrompt.createLesson;
                                outputSchema = lessonSchema.LessonSchema
                                break;
                        default:
                                throw new Error("Type Not Supported!");
                };

                const results: any = await generateText({
                        instructions: instrucation,
                        model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
                        messages: [...messages, { role: "user", content: `student want to focus on ==> ${message} in => ${language} language` }],
                        output: Output.object({
                                schema: outputSchema
                        })
                });

                // save content
                const newContent = await ContentModel.create({
                        createdBy: userId,
                        title: results.output.title,
                        data: results.output.data,
                        // @ts-ignore
                        sourceId: sourceId,
                        type: type
                });

                const content = await ContentModel.findById(newContent._id).select("-createdBy");

                return {
                        message: "Content has been created successfully!!",
                        content: content as Content
                }
        } catch (error) {
                console.log('error inside crate note', error)
                throw error
        }
};
const getAllContentByUserId = async (userId: string, sourceId: string) => {
        try {
                const content = await ContentModel.find({ sourceId: sourceId, createdBy: userId }).select('-createdBy').sort({ createdAt: -1 });
                return {
                        content: content,
                        message: "content has been fetched successfully!!"
                };
        } catch (error) {
                console.log('CONTENT FETCHED ERROR::', error)
                throw error
        }
};
const getContentById = async (userId: string, contentId: string) => {
        try {
                const content = await ContentModel.findOne({ _id: contentId, createdBy: userId }).select('-createdBy');
                return {
                        content: content,
                        message: "content has been fetched successfully!!"
                };
        } catch (error) {
                console.log('CONTENT FETCHED ERROR::', error)
                throw error
        }
};
const deleteContent = async (userId: string, contentId: string) => {
        try {
                await ContentModel.findOneAndDelete({ _id: contentId, createdBy: userId });
                return {
                        message: "Content has been deleted successfully!!",
                }
        } catch (error) {
                console.log('CONTENT DELETED ERROR::', error)
                throw error
        }
}
const getContent = async (userId: string, data: { contentId: string, sessionId: string }) => {
        try {
                const filter: any = { createdBy: userId };
                if (data.contentId) filter["_id"] = data.contentId
                if (data.sessionId) filter["sessionId"] = data.sessionId;

                const contents = await ContentModel.find(filter).select('-createdBy -__v');

                return {
                        contents: contents,
                        message: "content has been fetched successfully!!"
                }
        } catch (error) {
                console.log('CONTENT FETCHED ERROR::', error)
                throw error
        }
}
const renameContentName = async (userId: string, data: { contentId: string, name: string }) => {
        try {
                const updated = await ContentModel.findOneAndUpdate({ createdBy: userId, _id: data.contentId }, { title: data.name }, { new: true }).select('-createdBy -__v');
                return {
                        content: updated,
                        message: "content update successfully!"
                }
        } catch (error) {
                throw error
        }
}
export default { create, getAllContentByUserId, getContentById, deleteContent, getContent, renameContentName }

