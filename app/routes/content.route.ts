import { Router } from "express";
import contentController from "../controller/content.controller.js";

const route = Router();

route.get('/me/:sourceId', contentController.getAllContentByUserId);
route.get('/:contentId', contentController.getContentById);
route.post('/create', contentController.create);
route.delete('/:contentId', contentController.deleteContent);
route.post('/me/get', contentController.getContent);
route.patch('/:contentId', contentController.renameContentName);

export default route;