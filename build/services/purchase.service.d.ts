declare const revenuecatEvent: (event: any) => Promise<{}>;
declare const getUserUsesAndTranscationHistory: (userId: string) => Promise<{
    uses: (import("mongoose").Document<unknown, {}, import("../types/user.type.js").USER_USES, {}, import("mongoose").DefaultSchemaOptions> & import("../types/user.type.js").USER_USES & Required<{
        _id: string;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null;
    transcations: (import("mongoose").Document<unknown, {}, import("../types/transcation.type.js").TRANSACTION, {}, import("mongoose").DefaultSchemaOptions> & import("../types/transcation.type.js").TRANSACTION & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[];
}>;
declare const _default: {
    revenuecatEvent: typeof revenuecatEvent;
    getUserUsesAndTranscationHistory: typeof getUserUsesAndTranscationHistory;
};
export default _default;
//# sourceMappingURL=purchase.service.d.ts.map