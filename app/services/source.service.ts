import { generateText, Output } from "ai";
import purchaseHelper from "../helper/purchase.helper.js";
import { SourceModel } from "../models/source.model.js";
import type { NewSourcePayload, Source } from "../types/source.type.js";
import aiHelper from "../helper/ai.helper.js";
import sourcePrompt from "../ai/prompts/source.prompt.js";
import sourceSchema from "../ai/schema/source.schema.js";

const add = async (userId: string, data: NewSourcePayload) => {
  try {
    await purchaseHelper.checkUsesAndUpdate(userId as string, 'content');
    const model = aiHelper.getModel('gemini', 'gemini-2.5-flash');
    console.log('data for source creation::', data,userId);

    // genearte summry
    const { output } = await generateText({
      model: model,
      instructions: sourcePrompt.getSummryAndTitleOfPrompt,
      messages: [{ role: "user", content: [{ type: 'file', data: data.url as string, mediaType: data.type === "youtube" ? 'video/mp4' : data.fileType ?? '' },] }],
      output: Output.object({
        schema: sourceSchema.createSummary
      })
    });

    // make source
    const res = await SourceModel.create({
      title: output.title,
      metaData: {
        url: data.url,
        uploadId: data.uploadId,
        fileType: data.fileType,
      },
      type: data.type,
      createdBy: userId,
      summary: output.data.summary,
      topics: output.data.topics
    });
    const source = await SourceModel.findById(res._id).select("-createdBy")
    return { message: "Source added successfully", source };
  } catch (error) {
    console.log('Error In Create Source', error)
    throw error
  }
};

const getUserSources = async (userId: string) => {
  try {
    const sources = await SourceModel.find({ createdBy: userId })
      .sort({ createdAt: -1 })
      .select("-createdBy");
    return { message: "Source fetched successfully", sources };
  } catch (error) {
    throw error
    console.log(error);
  }
};

const sourceById = async (sourceId: string, userId: string) => {
  try {
    const source = await SourceModel.findOne({ _id: sourceId, createdBy: userId }).select("-createdBy");
    if (!source) throw new Error("Source not found make sure sourceId is correct and you have access to it");
    return { message: "Source fetched successfully", source };
  } catch (error) {
    throw error
  }
};

const deleteSource = async (sourceId: string, userId: string) => {
  try {
    const res = await SourceModel.deleteOne({ _id: sourceId, createdBy: userId });
    if (res.deletedCount === 0) throw new Error("Source not found make sure sourceId is correct and you have access to it");
    return { message: "Source deleted successfully" };
  } catch (error) {
    throw error
  }
};

const updateSource = async (sourceId: string, userId: string, payload: Partial<Source>) => {
  try {
    // 1. Remove undefined values or immutable fields (e.g. _id, createdBy)
    const updateFields: Record<string, any> = {};

    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && key !== "_id" && key !== "createdBy") {
        updateFields[key] = value;
      }
    });

    // 2. Prevent empty updates
    if (Object.keys(updateFields).length === 0) throw new Error("No valid fields provided for update");

    // 3. Execute dynamic update query with $set
    const source = await SourceModel.findByIdAndUpdate(
      { _id: sourceId, createdBy: userId },
      { $set: updateFields },
      { new: true, runValidators: true } // runValidators ensures updates respect Schema constraints
    ).select("-createdBy");

    console.log('source updated', source)
    return { message: "Source updated successfully", source };
  } catch (error) {
    throw error;
  }
};
export default { add, getUserSources, sourceById, deleteSource, updateSource };
