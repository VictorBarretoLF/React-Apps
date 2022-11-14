const asyncHandler = require("express-async-handler");
const db = require("../config/db");

const getPostsByCategory = asyncHandler(async (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
});

const getPost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const q = `
  SELECT p.id, u.username, p.title, p.description, p.img, u.image AS userImg, p.cat, p.createdAt 
  FROM users u 
  INNER JOIN posts p ON u.id = p.userID WHERE p.id = ?`;

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("No post found!");
    return res.status(200).json(data[0]);
  });
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
  getPostsByCategory,
  getPost,
  addPost,
  deletePost,
  updatePost,
};
