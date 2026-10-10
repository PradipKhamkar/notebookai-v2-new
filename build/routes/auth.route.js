import { Router } from "express";
import authController from "../controller/auth.controller.js";
import { authGurd } from "../middleware/authGurd.js";
const route = Router();
route.post('/google', authController.googleLogin);
route.get('/me', authGurd, authController.getLoggedUser);
route.get('/new-accessToken/:refreshToken', authController.getNewAccessToken);
export default route;
//# sourceMappingURL=auth.route.js.map