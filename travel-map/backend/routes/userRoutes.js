const router = require("express").Router();

const { registerUser, loginUser } = require("../controlers/userControlers");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
