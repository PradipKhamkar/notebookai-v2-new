import youtubeHelper from "../helper/youtube.helper.ts";
import { SourceModel } from "../models/source.model.ts";
import type { NewSourcePayload } from "../types/source.type.ts";
import contentService from "./content.service.ts";

const add = async (userId: string, data: NewSourcePayload) => {
  try {
    const ctx = {
      title: "Untitled",
    };
    // handle source
    switch (data.type) {
      case "youtube":
        const title = await youtubeHelper.getYouTubeTitle(data.url as string);
        if (!title) throw new Error("Failed to fetch youtube title");
        ctx.title = title;
        break;
      default:
        throw new Error("Source type not support yet!");
    }

    // make source
    const res = await SourceModel.create({
      title: ctx.title,
      metaData: {
        url: data.url,
      },
      type: data.type,
      createdBy: userId,
      summary: "This is a summary of the source",
    });

    // create content
    const { content } = await contentService.create(
      "note",
      res._id as string,
      "create note from this source",
      userId,
    );
    res.summary = content.data?.note;
    await res.save();
    const source = await SourceModel.findById(res._id).select("-createdBy")
    return { message: "Source added successfully", source };
  } catch (error) {
    console.log(error);
  }
};

const getUserSources = async (userId: string) => {
  try {
    const sources = await SourceModel.find({ createdBy: userId })
      .sort({ createdAt: -1 })
      .select("-createdBy");
    return { message: "Source fetched successfully", sources };
  } catch (error) {
    console.log(error);
  }
};

const sourceById = async (sourceId: string, userId: string) => {
  try {
    const source = await SourceModel.findOne({ _id: sourceId, createdBy: userId }).select("-createdBy");
    if (!source) throw new Error("Source not found make sure sourceId is correct and you have access to it");
    return { message: "Source fetched successfully", source };
  } catch (error) {
    console.log(error);
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
}
export default { add, getUserSources, sourceById, deleteSource };
