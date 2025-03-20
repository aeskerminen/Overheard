import express from "express";
import cors from "cors";

import dataRouter from "./controllers/dataRouter";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/data", dataRouter);

module.exports = app;
