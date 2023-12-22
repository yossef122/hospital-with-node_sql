const express = require("express");
const { join2Qeury } = require("../services/joinsServices");

const router = express.Router();

router.route("/").get(join2Qeury);

module.exports = router;
