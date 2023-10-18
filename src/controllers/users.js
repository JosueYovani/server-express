/** Imports **/
const Users = require("../models/users");

/** Controller create new user  **/
const createUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    newUser.password = await Users.encrypPassword(newUser.password);
    if (!newUser) {
      return res.status(502).send({ msg: "User not created", err: newUser });
    }
    await newUser.save();
    return res.status(201).json({ msg: "User created!", data: newUser });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ msg: error.message || "Unknown" });
  }
};

module.exports = {
  createUser,
};
