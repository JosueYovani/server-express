const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: {
      type: String,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email invalid!"],
      required: true,
      unique: true,
    },

    role: {
      type: String,
      enum: {
        values: ["Admin", "User"],
        message: "{VALUE}, is not a valid role",
      },
    },
    password: {
      type: String,
      required: true,
    },
    avatar: { type: String },
  },
  {
    timestamps: true,
    statics: {
      encrypPassword: async (password) => {
        if (
          !password.match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          )
        ) {
          throw new Error(
            "Password should contain upper, lowercase, number and special caracter!"
          );
        }
        const salt = await bcrypt.genSalt(15);
        return await bcrypt.hash(password, salt);
      },
      comparePassword: async (password, hash) => {
        return await bcrypt.compare(password, hash);
      },
    },
  }
);

module.exports = mongoose.model("users", userSchema);
