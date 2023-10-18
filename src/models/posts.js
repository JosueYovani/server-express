const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img_url: { type: String, required: true },
    description: { type: String },
    content: { type: String, required: true },
    date_post: { type: Date, default: Date.now },
    author: { type: mongoose.Schema.ObjectId, ref: "users", required: true },
    category: { type: String },
    tags: { type: Array, default: [], required: true },
    reactions: { type: Array, default: [] },
    time_read: { type: Number, default: 8 },
    comments: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("posts", postSchema);
