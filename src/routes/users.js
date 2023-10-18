const express = require("express");
const router = express.Router();

/** Imports **/
const { createUser } = require("../controllers/users");

/** Routes **/
router.post("/", createUser);

module.exports = router;
