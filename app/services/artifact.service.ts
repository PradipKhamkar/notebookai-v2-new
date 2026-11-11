import { ArtifactModel } from "../models/artifact.model.js";
import type { Artifact, ArtifactType, CreateArtifactPayload } from "../types/artifact.type.js";
import type { ArtifactToolResponse } from "../types/session.type.js";

const addArtifact = async (userId: string, sessionId: string, data: CreateArtifactPayload) => {
        try {
                const res = await ArtifactModel.create({
                        data: data.data,
                        title: data.title,
                        icon: data.icon,
                        sessionId: sessionId,
                        isExample: false,
                        type: data.type,
                        createdBy: userId,
                });
                return {
                        success: true,
                        message: "Artifact created successfully",
                        data: res,
                        aiRespose: {
                                artifactId: res._id,
                                artifactType: res.type,
                                title: res.title,
                        } as ArtifactToolResponse
                };
        } catch (error) {
                throw error
        }
};

const getUserArtifact = async (userId: string, sourceId: string) => {
        try {
                // const content = await ContentModel.find({ sourceId: sourceId, createdBy: userId }).select('-createdBy').sort({ createdAt: -1 });
                // return {
                //         content: content,
                //         message: "content has been fetched successfully!!"
                // };
        } catch (error) {
                console.log('CONTENT FETCHED ERROR::', error)
                throw error
        }
};
export default {
        addArtifact
}