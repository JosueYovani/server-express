/** Imports **/
const Users = require("../models/users");
const { verifyToken } = require("../util/jwt");

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ msg: "Token required" });

    const token = authorization.replace("Bearer ", "");

    const payload = verifyToken(token);

    req.user = await Users.findById(payload.id);

    next();
  } catch (error) {
    res.status(401).json({ msg: error.message || "Unknown" });
  }
};

module.exports = auth;
