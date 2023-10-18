const express = require("express");
const router = express.Router();

/** Imports **/
const { authUser } = require("../controllers/auth");

/** Routes **/
router.post("/login", authUser);

module.exports = router;
