import { generateText, Output } from "ai";
import purchaseHelper from "../helper/purchase.helper.js";
import youtubeHelper from "../helper/youtube.helper.js";
import { SourceModel } from "../models/source.model.js";
import fileService from "./file.service.js";
import aiHelper from "../helper/ai.helper.js";
import sourcePrompt from "../ai/prompts/source.prompt.js";
import sourceSchema from "../ai/schema/source.schema.js";
const add = async (userId, data) => {
    try {
        await purchaseHelper.checkUsesAndUpdate(userId, 'content');
        const ctx = {
            title: "Untitled",
            uploadId: '',
            url: data.url,
            fileType: ""
        };
        // handle source
        switch (data.type) {
            case "youtube":
                const title = await youtubeHelper.getYouTubeTitle(data.url);
                if (!title)
                    throw new Error("Failed to fetch youtube title");
                ctx.title = title;
                break;
            case "document":
            case "text":
                let dataToUpload = {};
                if (data.type === "document")
                    dataToUpload = data.document;
                else if (data.type)
                    dataToUpload = {
                        data: Buffer.from(data.text, "utf-8"),
                        name: `Text-${Date.now()}.txt`,
                        mimetype: "text/plain",
                    };
                const { name, type, uploadId, url } = await fileService.upload(dataToUpload);
                ctx['title'] = name;
                ctx['uploadId'] = uploadId;
                ctx['url'] = url;
                ctx['fileType'] = type;
                break;
            default:
                throw new Error("Source type not support yet!");
        }
        const model = aiHelper.getModel('gemini', 'gemini-2.5-flash');
        // genearte summry
        const { output } = await generateText({
            model: model,
            instructions: sourcePrompt.getSummryAndTitleOfPrompt,
            messages: [{ role: "user", content: [{ type: 'file', data: ctx.url, mediaType: data.type === "youtube" ? 'video/mp4' : ctx.fileType ?? '' },] }],
            output: Output.object({
                schema: sourceSchema.createSummary
            })
        });
        // make source
        const res = await SourceModel.create({
            title: output.title,
            metaData: {
                url: ctx.url,
                uploadId: ctx.uploadId,
                fileType: ctx.fileType,
            },
            type: data.type,
            createdBy: userId,
            summary: output.data.summary,
        });
        const source = await SourceModel.findById(res._id).select("-createdBy");
        return { message: "Source added successfully", source };
    }
    catch (error) {
        throw error;
    }
};
const getUserSources = async (userId) => {
    try {
        const sources = await SourceModel.find({ createdBy: userId })
            .sort({ createdAt: -1 })
            .select("-createdBy");
        return { message: "Source fetched successfully", sources };
    }
    catch (error) {
        console.log(error);
    }
};
const sourceById = async (sourceId, userId) => {
    try {
        const source = await SourceModel.findOne({ _id: sourceId, createdBy: userId }).select("-createdBy");
        if (!source)
            throw new Error("Source not found make sure sourceId is correct and you have access to it");
        return { message: "Source fetched successfully", source };
    }
    catch (error) {
        console.log(error);
    }
};
const deleteSource = async (sourceId, userId) => {
    try {
        const res = await SourceModel.deleteOne({ _id: sourceId, createdBy: userId });
        if (res.deletedCount === 0)
            throw new Error("Source not found make sure sourceId is correct and you have access to it");
        return { message: "Source deleted successfully" };
    }
    catch (error) {
        throw error;
    }
};
const updateSource = async (sourceId, userId, payload) => {
    try {
        // 1. Remove undefined values or immutable fields (e.g. _id, createdBy)
        const updateFields = {};
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== undefined && key !== "_id" && key !== "createdBy") {
                updateFields[key] = value;
            }
        });
        // 2. Prevent empty updates
        if (Object.keys(updateFields).length === 0)
            throw new Error("No valid fields provided for update");
        // 3. Execute dynamic update query with $set
        const source = await SourceModel.findByIdAndUpdate({ _id: sourceId, createdBy: userId }, { $set: updateFields }, { new: true, runValidators: true } // runValidators ensures updates respect Schema constraints
        ).select("-createdBy");
        console.log('source updated', source);
        return { message: "Source updated successfully", source };
    }
    catch (error) {
        throw error;
    }
};
export default { add, getUserSources, sourceById, deleteSource, updateSource };
//# sourceMappingURL=source.service.js.map