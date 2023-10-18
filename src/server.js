const express = require("express");

/** Imports **/
const apiRoutes = require("./routes");

/** Init **/
const app = express();

/** Middlewares **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Api challenge v1" });
});
app.use(apiRoutes);

module.exports = app;
