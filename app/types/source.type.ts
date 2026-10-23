import type { BaseDocument } from "./model.type.js";
import type { UploadedFile } from "express-fileupload"
type SourceType = 'youtube' | "document" | "text"
interface Source extends BaseDocument {
        type: SourceType;
        metaData: {
                uploadId?: string;
                url: string;
                fileType?: string;
        };
        title: string;
        createdBy: any;
        summary: string;
        topics: string[];
        suggestedQuestions: string[];
        isExample?: boolean;
};

interface NewSourcePayload {
        type: SourceType;
        url?: string;
        text?: string;
        uploadId?: string;
        fileType?: string
};

interface LegacySourcePayload {
        type: SourceType;
        url?: string;
        document: UploadedFile;
        text?: string
}

export type { Source, NewSourcePayload,LegacySourcePayload }