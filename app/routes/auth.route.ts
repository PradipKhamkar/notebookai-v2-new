import { Router } from "express";
import authController from "../controller/auth.controller.ts";
import { authGurd } from "../middleware/authGurd.ts";

const route = Router();

route.post('/google', authController.googleLogin);
route.get('/me', authGurd, authController.getLoggedUser);
route.get('/new-accessToken/:refreshToken', authController.getNewAccessToken);

export default route;