const router = require("express").Router();

const { createPin } = require("../controlers/pinControlers");

router.route("/").post(createPin);

module.exports = router;
