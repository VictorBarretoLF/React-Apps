const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
} = require("../controlers/postsControlers");

router.route("/").get(getPosts).post(addPost);
router.route("/:id").get(getPost).delete(deletePost).put(updatePost);

module.exports = router;
