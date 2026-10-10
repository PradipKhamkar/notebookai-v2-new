import type { Content, CreateContentPayload } from "../types/content.type.ts";
declare const create: (userId: string, data: CreateContentPayload) => Promise<{
    message: string;
    content: Content;
}>;
declare const getAllContentByUserId: (userId: string, sourceId: string) => Promise<{
    content: ((import("mongoose").Document<unknown, {}, Content, {}, import("mongoose").DefaultSchemaOptions> & ((import("../types/content.type.ts").FlashcardsContent & {
        _id: import("mongoose").Types.ObjectId;
    }) | (import("../types/content.type.ts").MindmapContent & {
        _id: import("mongoose").Types.ObjectId;
    }) | (import("../types/content.type.ts").NoteContent & {
        _id: import("mongoose").Types.ObjectId;
    }) | (import("../types/content.type.ts").QuizContent & {
        _id: import("mongoose").Types.ObjectId;
    }))) & {
        __v: number;
    } & {
        id: string;
    })[];
    message: string;
}>;
declare const getContentById: (userId: string, contentId: string) => Promise<{
    content: ((import("mongoose").Document<unknown, {}, Content, {}, import("mongoose").DefaultSchemaOptions> & ((import("../types/content.type.ts").FlashcardsContent & {
        _id: import("mongoose").Types.ObjectId;
    }) | (import("../types/content.type.ts").MindmapContent & {
        _id: import("mongoose").Types.ObjectId;
    }) | (import("../types/content.type.ts").NoteContent & {
        _id: import("mongoose").Types.ObjectId;
    }) | (import("../types/content.type.ts").QuizContent & {
        _id: import("mongoose").Types.ObjectId;
    }))) & {
        __v: number;
    } & {
        id: string;
    }) | null;
    message: string;
}>;
declare const deleteContent: (userId: string, contentId: string) => Promise<{
    message: string;
}>;
declare const _default: {
    create: typeof create;
    getAllContentByUserId: typeof getAllContentByUserId;
    getContentById: typeof getContentById;
    deleteContent: typeof deleteContent;
};
export default _default;
//# sourceMappingURL=content.service.d.ts.map