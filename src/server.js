const express = require("express");
const cors = require("cors");

/** Imports **/
const apiRoutes = require("./routes");

/** Init **/
const app = express();

/** Middlewares **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

// Routes
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Api challenge v1" });
});
app.use(apiRoutes);

module.exports = app;
