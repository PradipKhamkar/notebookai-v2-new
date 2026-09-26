import type { UploadedFile } from "express-fileupload";
import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
import env from "../config/env.ts";

// Configure Cloudinary
cloudinary.config({
        cloud_name: env.CLOUDINARY.CLOUD_NAME,
        api_key: env.CLOUDINARY.API_KEY,
        api_secret: env.CLOUDINARY.API_SECRET,
});

const upload = async (file: UploadedFile) => {
        try {
                const result: UploadApiResponse = await new Promise((resolve, reject) => {
                        cloudinary.uploader.upload_stream({ folder: 'claira_files', resource_type: "auto" }, (error, result) => {
                                if (error) reject(error);
                                // @ts-ignore
                                resolve(result);
                        }).end(file.data);
                });
                return {
                        uploadId: result.public_id,
                        url: result.secure_url,
                        type: file.mimetype,
                        name: file.name,
                };
        } catch (error) {
                console.log("error::", error);
                throw error;
        }
};

const remove = async (public_id: string) => {
        try {
                await cloudinary.uploader.destroy(public_id);
                return true;
        } catch (error) {
                console.log("error::", error);
                throw error;
        }
};

export default { upload, remove }
