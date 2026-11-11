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

const getUserArtifact = async (userId: string) => {
        try {
                const artifacts = await ArtifactModel.find({ createdBy: userId }).select('-createdBy').sort({ createdAt: -1 });
                return {
                        artifacts: artifacts,
                        message: "Artifact has been fetched successfully!!"
                };
        } catch (error) {
                console.log('ARTIFACT FETCHED ERROR::', error)
                throw error
        }
};

const getArtifacts = async (userId: string, data: { artifactId?: string; sessionId?: string; limit?: number, fetchData?: boolean }
) => {
        try {
                let select = ['-createdBy', '-__v', '-data']
                const filter: Record<string, any> = { createdBy: userId };
                if (data?.artifactId) filter._id = data.artifactId;
                if (data?.sessionId) filter.sessionId = data.sessionId;
                if (data?.fetchData) select.splice(select.indexOf('-data'), 1);


                let query = ArtifactModel.find(filter).select(select).sort({ createdAt: -1 });

                // apply limit only if provided and valid
                if (data?.limit && data.limit > 0) {
                        query = query.limit(data.limit);
                }

                const artifacts = await query;

                return {
                        artifacts: artifacts,
                        message: "Artifact has been fetched successfully!!",
                };
        } catch (error) {
                console.log('CONTENT FETCHED ERROR::', error)
                throw error
        }
};

const deleteArtifact = async (userId: string, artifactId: string) => {
        try {
                await ArtifactModel.findOneAndDelete({ _id: artifactId, createdBy: userId });
                return {
                        message: "Artifact has been deleted successfully!!",
                }
        } catch (error) {
                console.log('ARTIFACT DELETED ERROR::', error)
                throw error
        }
}

const renameArtifact = async (userId: string, data: { artifactId: string, name: string }) => {
        try {
                const updated = await ArtifactModel.findOneAndUpdate({ createdBy: userId, _id: data.artifactId }, { title: data.name }, { new: true }).select('-createdBy -__v');
                return {
                        artifact: updated,
                        message: "Artifact update successfully!"
                }
        } catch (error) {
                throw error
        }
};


export default {
        addArtifact,
        getArtifacts,
        getUserArtifact,
        deleteArtifact,
        renameArtifact
}