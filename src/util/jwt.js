const jsonwebtoken = require("jsonwebtoken");

/** Imports **/
const { JWT } = require("../../config");

/** Function generate token **/
const generateToken = (payload) => {
  return jsonwebtoken.sign(payload, JWT.SECRET, { expiresIn: JWT.EXPIRES });
};
/** Function verify token **/
const verifyToken = (token) => {
  return jsonwebtoken.verify(token, JWT.SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
