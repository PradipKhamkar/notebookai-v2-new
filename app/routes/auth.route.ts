import { Router } from "express";
import authController from "../controller/auth.controller.ts";

const route = Router();

route.post('/google-login', authController.googleLogin);

export default route;