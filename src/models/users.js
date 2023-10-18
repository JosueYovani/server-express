const mongoose = require("mongoose");

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
    password: { type: String, required: true },
    avatar: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
