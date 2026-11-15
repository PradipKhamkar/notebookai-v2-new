import express from "express";
import routes from "./routes/index.js";
import fileUpload from "express-fileupload";

const app = express();

app.use(fileUpload());

app.use(express.json({ limit: '10mb' }));

// Increase URL-encoded payload limit as well if needed
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

app.get("/", (_req, res) => {
  res.status(200).json({ status: "ok", message: "NotebookAI Backend is running" });
});

app.use("/api/v1", routes);

export default app;
