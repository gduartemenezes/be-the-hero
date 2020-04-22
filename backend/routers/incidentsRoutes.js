const express = require("express");

const incidentController = require("../controllers/incidentController");

const router = express.Router();

router.route("/").post(incidentController.createIncident);

module.exports = router;
