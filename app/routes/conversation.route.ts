import { Router } from "express";
import conversationController from "../controller/conversation.controller.ts";

const route = Router();

route.post('/chat', conversationController.chat);

export default route;