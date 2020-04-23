const express = require("express");
const sessionController = require("../controllers/sessionController");

const router = express.Router();

router.route("/").get(sessionController.startSession);

module.exports = router;
