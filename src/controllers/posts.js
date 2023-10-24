/** Imports **/
const Posts = require("../models/posts");

/** Controller get all post **/
const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find().populate("author", {
      avatar: true,
      first_name: true,
    });
    return res.status(200).send({ msg: "Success!", data: posts });
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ msg: error.message || "Unknown" });
  }
};

/** Controller get one post **/
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Posts.findById(id);
    if (!post) return res.status(404).send({ msg: "Post not found" });
    return res.status(200).send({ msg: "Success!", data: post });
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ msg: error.message || "Unknown" });
  }
};

/** Controller create new post **/
const createPost = async (req, res) => {
  try {
    const newPost = await Posts.create(req.body);
    if (!newPost) return res.status(404).send({ msg: "Post not created" });
    await newPost.save();
    return res.status(201).send({ msg: "User created!", data: newPost });
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ msg: error.message || "Unknown" });
  }
};

/** Controller update post **/
const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;
    const updatedPost = await Posts.findByIdAndUpdate(id, dataUpdate, {
      new: true,
    });
    if (!updatedPost) {
      return res
        .status(404)
        .send({ msg: "Post not updated!", data: updatedPost });
    }
    return res.status(201).send({ msg: "Post updated!", data: updatedPost });
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ msg: error.message || "Unknown" });
  }
};

/** Controller delete post **/
const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Posts.findByIdAndDelete(id);
    if (!deletedPost) return res.status(404).send({ msg: "Post not deleted!" });
    return res.status(200).send({ msg: "Post deleted!" });
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ msg: error.message || "Unknown" });
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};
