const router = require("express").Router();

const { registerUser } = require("../controlers/userControlers");

router.route("/").post(registerUser);

module.exports = router;
