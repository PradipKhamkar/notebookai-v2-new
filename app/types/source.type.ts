import type { BaseDocument } from "./model.type.ts";

type SourceType = 'youtube' | "file"
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
};

interface NewSourcePayload {
        type: SourceType;
        url?: string;
};

export type { Source, NewSourcePayload }