const express = require("express");
const router = express.Router();

const { getPosts } = require("../controlers/postsControlers");

router.route("/").get(getPosts);
router.route("/:id").get(getPosts);
router.route("/").get(getPosts);

module.exports = router;
