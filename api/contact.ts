import express from "express";
import contactRouter from "../server/routes/contact";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", contactRouter);

export default app;