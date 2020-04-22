const express = require("express");

const incidentController = require("../controllers/incidentController");

const router = express.Router();

router
  .route("/")
  .post(incidentController.createIncident)
  .get(incidentController.getAllIncidents);

router.route("/:id").delete(incidentController.deleteIncident);

module.exports = router;
