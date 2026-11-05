import type { BaseDocument } from "./model.type.js";

interface File extends BaseDocument {
        mimeType: string;
        url: string;
        uploadId: string;
        size: number;
        createdBy: string;
        sessionId?: string;
        name: string;
};


export type { File }