import contentPrompt from "../ai/prompts/content.prompt.ts";
import contentSchema from "../ai/schema/content.schema.ts";
import aiHelper from "../helper/ai.helper.ts";
import { ContentModel } from "../models/content.model.ts";
import { SourceModel } from "../models/source.model.ts";
import type { Content, CreateContentPayload } from "../types/content.type.ts";
import { generateText, Output, type ModelMessage } from 'ai';
import purchaseHelper from "../helper/purchase.helper.ts";

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
                        default:
                                throw new Error("Type Not Supported!");
                };

                const results: any = await generateText({
                        instructions: instrucation,
                        model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
                        messages: [...messages, { role: "user", content: `${message} must be in => ${language} language` }],
                        output: Output.object({
                                schema: outputSchema
                        })
                });

                // save content
                const newContent = await ContentModel.create({
                        createdBy: userId,
                        title: results.output.title,
                        data: results.output.data,
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
export default { create, getAllContentByUserId, getContentById, deleteContent }

