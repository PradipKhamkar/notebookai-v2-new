const success = (res, output = {}, msg = 'Success', status = 200) => {
    return res.status(status).json({
        success: true,
        message: msg,
        results: output
    });
};
const error = (res, message = 'Something went wrong', status = 500, extra = {}) => {
    return res.status(status).json({
        success: false,
        message,
        error: extra
    });
};
export default {
    success,
    error
};
//# sourceMappingURL=apiResponse.js.map