import z from "zod";
declare const createSummary: z.ZodObject<{
    title: z.ZodString;
    data: z.ZodObject<{
        summary: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ICreateSummary = z.infer<typeof createSummary>;
declare const _default: {
    createSummary: z.ZodObject<{
        title: z.ZodString;
        data: z.ZodObject<{
            summary: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
export default _default;
//# sourceMappingURL=source.schema.d.ts.map