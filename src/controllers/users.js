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
      .json({ msg: error.message || "unknown" });
  }
};

/** Controller authentication **/
const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    let validPass = await Users.comparePassword(password, user.password);
    if (!validPass) {
      return res.status(401).json({ msg: "Incorrect password" });
    }
    // Generate token
    let token = auth.generateToken(user);
    return res.status(200).json({ msg: "Success", data: token });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ msg: error.message || "unknown" });
  }
};

module.exports = {
  createUser,
  authUser,
};
