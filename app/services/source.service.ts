import youtubeHelper from "../helper/youtube.helper.ts";
import { SourceModel } from "../models/source.model.ts";
import type { NewSourcePayload } from "../types/source.type.ts";

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
                                throw new Error('Source type not support yet!')
                };


                // make source
                const res = await SourceModel.create({
                        title: ctx.title,
                        metaData: {
                                url: data.url
                        },
                        type: data.type,
                        createdBy: userId,
                        summary: ""
                });
                console.log('new source cretaed!', res)
                return { message: "Source added successfully", res: res._id }
        } catch (error) {
                console.log(error);
        }
};

const getUserSources = async (userId: string) => {
        try {
                const sources = await SourceModel.find({ createdBy: userId }).sort({ createdAt: -1 }).select('-_id');
                return { message: "Source fetched successfully", sources }
        } catch (error) {
                console.log(error);
        }
};

export default { add, getUserSources }
