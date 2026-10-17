import express from "express";
import fileController from "../controller/file.controller.js";
const router = express.Router();

router.post('/upload', fileController.upload);

export default router
