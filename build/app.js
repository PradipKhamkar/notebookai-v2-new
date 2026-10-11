import express from "express";
import routes from "./routes/index.js";
import fileUpload from "express-fileupload";
const app = express();
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok", uptime: process.uptime() });
});
app.get("/", (_req, res) => {
    res.status(200).json({ status: "ok", message: "NotebookAI Backend is running" });
});
app.use("/api/v1", routes);
export default app;
//# sourceMappingURL=app.js.map