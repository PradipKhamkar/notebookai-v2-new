import { Router } from "express";
import conversationController from "../controller/conversation.controller.js";

const route = Router();

route.post('/chat', conversationController.chat);
route.get('/:sourceId', conversationController.getConversationBySourceId);

export default route;