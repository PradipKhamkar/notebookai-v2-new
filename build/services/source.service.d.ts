import type { NewSourcePayload, Source } from "../types/source.type.ts";
declare const add: (userId: string, data: NewSourcePayload) => Promise<{
    message: string;
    source: (import("mongoose").Document<unknown, {}, Source, {}, import("mongoose").DefaultSchemaOptions> & Source & Required<{
        _id: string;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null;
}>;
declare const getUserSources: (userId: string) => Promise<{
    message: string;
    sources: (import("mongoose").Document<unknown, {}, Source, {}, import("mongoose").DefaultSchemaOptions> & Source & Required<{
        _id: string;
    }> & {
        __v: number;
    } & {
        id: string;
    })[];
} | undefined>;
declare const sourceById: (sourceId: string, userId: string) => Promise<{
    message: string;
    source: import("mongoose").Document<unknown, {}, Source, {}, import("mongoose").DefaultSchemaOptions> & Source & Required<{
        _id: string;
    }> & {
        __v: number;
    } & {
        id: string;
    };
} | undefined>;
declare const deleteSource: (sourceId: string, userId: string) => Promise<{
    message: string;
}>;
declare const updateSource: (sourceId: string, userId: string, payload: Partial<Source>) => Promise<{
    message: string;
    source: (import("mongoose").Document<unknown, {}, Source, {}, import("mongoose").DefaultSchemaOptions> & Source & Required<{
        _id: string;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null;
}>;
declare const _default: {
    add: typeof add;
    getUserSources: typeof getUserSources;
    sourceById: typeof sourceById;
    deleteSource: typeof deleteSource;
    updateSource: typeof updateSource;
};
export default _default;
//# sourceMappingURL=source.service.d.ts.map