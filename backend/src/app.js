const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 AI Code Review Assistant Backend is Running...");
});

module.exports = app;