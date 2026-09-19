import contentPrompt from "../ai/prompts/content.prompt.ts";
import contentSchema from "../ai/schema/content.schema.ts";
import aiHelper from "../helper/ai.helper.ts";
import { ContentModel } from "../models/content.model.ts";
import { SourceModel } from "../models/source.model.ts";
import type { ContentType } from "../types/content.type.ts";
import { generateText, Output, type ModelMessage } from 'ai';

const create = async (type: ContentType, sourceId: string, message: string, userId: string) => {
        try {
                let instrucation = '', outputSchema: any, messages: ModelMessage[] = [];

                const source = await SourceModel.findById(sourceId).select('metaData type');
                if (!source) throw new Error('Source Not Found Please Source Id!!');
                switch (type) {
                        case "note":
                                instrucation = contentPrompt.createNote;
                                outputSchema = contentSchema.createNote;
                                messages = [{ role: "user", content: [{ type: 'file', data: source.metaData.url, mediaType: 'video/mp4' },] }]
                                break;
                        default:
                                throw new Error("Type Not Supported!");
                }
                const results: any = await generateText({
                        instructions: instrucation,
                        model: aiHelper.getModel('gemini', 'gemini-2.5-flash'),
                        messages: [...messages, { role: "user", content: message }],
                        output: Output.object({
                                schema: outputSchema
                        })
                });

                // save content
                const newContent = await ContentModel.create({
                        createdBy: userId,
                        title: results.output.title,
                        data: {
                                note: results.output?.note
                        },
                        sourceId: sourceId,
                        type: type
                });

                console.log('CONTENT CREATED::', newContent)
                return {
                        message: "Content has been created successfully!!",
                        content: newContent
                }
        } catch (error) {
                throw error
        }
};

const getAllContentByUserId = async (userId: string, sourceId: string) => {
        try {
                const content = await ContentModel.find({ sourceId: sourceId, createdBy: userId }).select('-createdBy');
                return {
                        contents: content,
                        message: "content has been fetched successfully!!"
                };
        } catch (error) {
                throw error
        }
};

export default { create, getAllContentByUserId }

