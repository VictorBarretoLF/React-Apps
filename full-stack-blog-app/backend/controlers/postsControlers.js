const asyncHandler = require("express-async-handler");

const getPosts = asyncHandler(async (req, res) => {
  res.json("all posts");
});

const getPost = asyncHandler(async (req, res) => {
  res.json("single post");
});

const addPost = asyncHandler(async (req, res) => {
  res.json("adding");
});

const deletePost = asyncHandler(async (req, res) => {
  res.json("deleting");
});

const updatePost = asyncHandler(async (req, res) => {
  res.json("updating");
});

module.exports = {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
};
