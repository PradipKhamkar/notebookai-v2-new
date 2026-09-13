import express from "express";
import route from "./routes/index.ts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);

app.listen(8080, () => {
        console.log("Server is running on port 8080");
});

export default app;
