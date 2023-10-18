/** Imports **/
const Users = require("../models/users");
const { generateToken } = require("../util/jwt");

/** Controller authentication **/
const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "Incorrect credentials!" });
    }
    let validPass = await Users.comparePassword(password, user.password);
    if (!validPass) {
      return res.status(401).json({ msg: "Incorrect credentials!" });
    }
    // Generate token
    let token = generateToken({ id: user._id });

    return res.status(200).json({ msg: "Success", data: token });
  } catch (error) {
    return res
      .status(error.status || 401)
      .json({ msg: error.message || "Unknown" });
  }
};

module.exports = {
  authUser,
};
