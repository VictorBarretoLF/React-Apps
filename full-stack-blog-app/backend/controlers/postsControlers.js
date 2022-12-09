const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// %desc Get posts by category
// route GET /api/post?cat=?
// @access Public
const getPostsByCategory = asyncHandler(async (req, res) => {
  const { cat } = req.query;

  const q = cat
    ? {
        where: { cat: req.query.cat.toUpperCase() },
      }
    : {};

  const posts = await prisma.post.findMany(q);

  res.status(200).json(posts);
});

// %desc Get post by url param
// route GET /api/posts/?
// @access Public
const getPost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          email: true,
          image: true,
        },
      },
    },
  });

  if (!post) {
    res.status(404);
    throw new Error("No post found!");
  }

  res.status(200).json(post);
});

const addPost = asyncHandler(async (req, res) => {
  res.json("adding");
});

// %desc Get post by url param
// route DELETE /api/posts/?
// @access Public
const deletePost = asyncHandler(async (req, res) => {
  const { access_token } = req.cookies;

  const postId = req.params.id;

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });

  if (!post) {
    res.status(404);
    throw new Error("Post not found!");
  }

  const token = jwt.decode(access_token, "jwtkey");

  if (token.id !== post.authorId) {
    res.status(403);
    throw new Error("You can only delete your posts!");
  }

  const deletePost = await prisma.post.delete({
    where: {
      id: parseInt(postId),
    },
  });

  return res.status(200).json(deletePost);
});

const updatePost = asyncHandler(async (req, res) => {
  res.json("updating");
});

module.exports = {
  getPostsByCategory,
  getPost,
  addPost,
  deletePost,
  updatePost,
};
