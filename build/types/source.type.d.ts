import type { BaseDocument } from "./model.type.ts";
import type { UploadedFile } from "express-fileupload";
type SourceType = 'youtube' | "document" | "text";
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
}
interface NewSourcePayload {
    type: SourceType;
    url?: string;
    document: UploadedFile;
    text?: string;
}
export type { Source, NewSourcePayload };
//# sourceMappingURL=source.type.d.ts.map