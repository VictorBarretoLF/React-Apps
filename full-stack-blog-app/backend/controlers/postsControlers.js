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

const deletePost = asyncHandler(async (req, res) => {
  const { access_token } = req.cookies;
  console.log(access_token);
  // if (!access_token) {
  //   res.status(401);
  //   throw new Error("Not authenticated!");
  // }

  // const postId = req.params.id;

  // const j = jwt.verify(access_token, "jwtkey", (err, userInfo) => {
  //   return userInfo;
  // });

  return res.json({ data: "hello" });
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
