import express from "express";
import routes from "./routes/index.ts";
import fileUpload from "express-fileupload";

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

export default app;
