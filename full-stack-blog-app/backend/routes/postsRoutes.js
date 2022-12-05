const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getPostsByCategory,
  getPost,
  addPost,
  deletePost,
  updatePost,
} = require("../controlers/postsControlers");

router.route("/").get(getPostsByCategory).post(addPost);
router.route("/:id").get(getPost).delete(protect, deletePost).put(updatePost);

module.exports = router;
