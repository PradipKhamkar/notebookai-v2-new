import apiResponse from "../utils/apiResponse.js";
import sourceService from "../services/source.service.js";
const add = async (req, res) => {
    try {
        // @ts-ignore
        const results = await sourceService.add(req.userId, { ...req.body, document: req?.files?.document });
        apiResponse.success(res, results, '', 201);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
const getUserSources = async (req, res) => {
    try {
        // @ts-ignore
        const results = await sourceService.getUserSources(req.userId);
        apiResponse.success(res, results, results?.message, 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
const getSourceById = async (req, res) => {
    try {
        const { sourceId } = req.params;
        // @ts-ignore
        const results = await sourceService.sourceById(sourceId, req.userId);
        apiResponse.success(res, results, results?.message, 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
const deleteSource = async (req, res) => {
    try {
        const { sourceId } = req.params;
        // @ts-ignore
        const results = await sourceService.deleteSource(sourceId, req.userId);
        apiResponse.success(res, results, results?.message, 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
const updateSource = async (req, res) => {
    try {
        const { sourceId } = req.params;
        const results = await sourceService.updateSource(sourceId, req.userId, req.body);
        apiResponse.success(res, results, results?.message, 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
export default { add, getUserSources, getSourceById, deleteSource, updateSource };
//# sourceMappingURL=source.controller.js.map