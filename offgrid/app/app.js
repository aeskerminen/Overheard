const express = require("express");
const cors = require("cors");

const dataRouter = require("./controllers/dataRouter");
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/data", dataRouter);

module.exports = app;
