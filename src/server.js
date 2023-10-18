const express = require("express");

/** Init **/
const app = express();

/** Middlewares **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Api challenge v1" });
});

module.exports = app;
