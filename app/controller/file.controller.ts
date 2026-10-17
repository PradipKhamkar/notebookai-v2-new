import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.js";
import fileService from "../services/file.service.js";
import type { UploadedFile } from "express-fileupload";
import purchaseHelper from "../helper/purchase.helper.js";

const upload = async (req: Request, res: Response) => {
        try {
                await purchaseHelper.checkUsesAndUpdate(req.userId as string, 'content');
                const results = await fileService.upload(req.files?.document as UploadedFile)
                apiResponse.success(res, results, "File uploaded successfully!", 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};

export default { upload }
