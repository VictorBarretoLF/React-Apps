const asyncHandler = require("express-async-handler");

const getPosts = asyncHandler(async (req, res) => {
  res.json("this is a post");
});

module.exports = {
  getPosts,
};
