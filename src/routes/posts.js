const express = require("express");
const router = express.Router();

/** Imports **/
const {
  getPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
} = require("../controllers/posts");
const auth = require("../middlewares/auth");

/** Routes **/

/** Get All Posts **/
router.get("/", getPosts);
/** Get All Posts **/
router.get("/:id", getPostById);
/** Create New Posts **/
router.post("/", createPost);
/** Update Post **/
router.put("/:id", auth, updatePostById);
/** Delete Posts **/
router.delete("/:id", auth, deletePostById);

module.exports = router;
