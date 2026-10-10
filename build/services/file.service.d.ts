import type { UploadedFile } from "express-fileupload";
declare const upload: (file: UploadedFile) => Promise<{
    uploadId: string;
    url: string;
    type: string;
    name: string;
}>;
declare const remove: (public_id: string) => Promise<boolean>;
declare const _default: {
    upload: typeof upload;
    remove: typeof remove;
};
export default _default;
//# sourceMappingURL=file.service.d.ts.map