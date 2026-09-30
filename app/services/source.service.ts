import youtubeHelper from "../helper/youtube.helper.ts";
import { SourceModel } from "../models/source.model.ts";
import type { NewSourcePayload, Source } from "../types/source.type.ts";
import contentService from "./content.service.ts";
import fileService from "./file.service.ts";

const add = async (userId: string, data: NewSourcePayload) => {
  try {
    const ctx = {
      title: "Untitled",
      uploadId: '',
      url: data.url,
      fileType: ""
    };
    // handle source
    switch (data.type) {
      case "youtube":
        const title = await youtubeHelper.getYouTubeTitle(data.url as string);
        if (!title) throw new Error("Failed to fetch youtube title");
        ctx.title = title;
        break;
      case "document":
      case "text":
        let dataToUpload: any = {};
        if (data.type === "document") dataToUpload = data.document;
        else if (data.type) dataToUpload = {
          data: Buffer.from(data.text as string, "utf-8"),
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

    // make source
    const res = await SourceModel.create({
      title: ctx.title,
      metaData: {
        url: ctx.url,
        uploadId: ctx.uploadId,
        fileType: ctx.fileType,
      },
      type: data.type,
      createdBy: userId,
      summary: "This is a summary of the source",
    });

    // create content
    const { content } = await contentService.create(
      userId,
      {
        instruction: "create note from this source",
        sourceId: res._id as string,
        type: "note",
        language: "en"
      }
    );
    // @ts-ignore
    res.summary = content.data?.note as string;
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
