const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/health", (_, res) => {
    res.status(200).json({
        status: 200,
        message: "Success",
    });
});

module.exports = app;
