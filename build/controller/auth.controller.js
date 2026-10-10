import apiResponse from "../utils/apiResponse.js";
import authService from "../services/auth.service.js";
const googleLogin = async (req, res) => {
    try {
        console.log('request body::', req.body);
        const results = await authService.googleLogin(req.body.authCode);
        apiResponse.success(res, results, "Google Login Sucessfully", 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
const getLoggedUser = async (req, res) => {
    try {
        // console.log('LOGGED USER CALLED::')
        const results = await authService.getLoggedUser(req.userId);
        apiResponse.success(res, results, "Logged User", 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
const getNewAccessToken = async (req, res) => {
    try {
        console.log('get-access token is called!', req.params);
        const results = await authService.getNewAccessToken(req.params.refreshToken);
        apiResponse.success(res, results, "New Access Token Generated Successfully", 200);
    }
    catch (error) {
        apiResponse.error(res, error?.message || "Something went wrong");
    }
};
export default { googleLogin, getLoggedUser, getNewAccessToken };
//# sourceMappingURL=auth.controller.js.map