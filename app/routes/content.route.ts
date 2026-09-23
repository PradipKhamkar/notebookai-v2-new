import { Router } from "express";
import contentController from "../controller/content.controller.ts";

const route = Router();

route.get('/me/:sourceId', contentController.getAllContentByUserId);
route.get('/:contentId', contentController.getContentById);
route.post('/create', contentController.create);

export default route;