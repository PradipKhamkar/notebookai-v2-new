import { Router } from "express";
import contentController from "../controller/content.controller.ts";

const route = Router();

route.get('/me/:sourceId', contentController.getAllContentByUserId);
route.get('/:contentId', contentController.getContentById);
route.post('/create', contentController.create);
route.delete('/:contentId', contentController.deleteContent);

export default route;