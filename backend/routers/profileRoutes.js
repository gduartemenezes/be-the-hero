const express = require("express");
const profileController = require("../controllers/profileController");

const router = express.Router();

router.route("/").get(profileController.getNGOIncidents);

module.exports = router;
