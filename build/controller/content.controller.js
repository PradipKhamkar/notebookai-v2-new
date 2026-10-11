import apiResponse from "../utils/apiResponse.js";
import contentService from "../services/content.service.js";
const getAllContentByUserId = async (req, res) => {
    try {
        const results = await contentService.getAllContentByUserId(req.userId, req.params.sourceId);
        apiResponse.success(res, results, results?.message, 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
const getContentById = async (req, res) => {
    try {
        const results = await contentService.getContentById(req.userId, req.params.contentId);
        apiResponse.success(res, results, results?.message, 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
const create = async (req, res) => {
    try {
        const results = await contentService.create(req.userId, req.body);
        apiResponse.success(res, results, results?.message, 201);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong", 400);
    }
};
const deleteContent = async (req, res) => {
    try {
        const { contentId } = req.params;
        const results = await contentService.deleteContent(req.userId, contentId);
        apiResponse.success(res, results, results?.message, 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
export default { getAllContentByUserId, getContentById, create, deleteContent };
//# sourceMappingURL=content.controller.js.map