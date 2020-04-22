const connection = require("../database/connection");

exports.createIncident = async (req, res) => {
  try {
    const newIncident = req.body;
    newIncident.ngo_id = req.headers.authorization;

    const result = await connection("incidents").insert(newIncident);

    res.status(200).json({
      status: "success",
      incident: {
        id: result,
        newIncident,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getAllIncidents = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const allIncidents = await connection("incidents")
      .join("ngos", "ngos.id", "=", "incidents.ngo_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ngos.name",
        "ngos.email",
        "ngos.whatsapp",
        "ngos.city",
      ]);

    res.header("X-Total-Count", allIncidents.length);
    res.status(200).json({
      status: "success",
      allIncidents,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteIncident = async (req, res) => {
  try {
    const { id } = req.params;
    const ngoID = req.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ngo_id")
      .first();

    if (incident.ngo_id !== ngoID) {
      return res.status(401).json({
        status: "forbidden",
        message: "You have no authorization to delete this incident",
      });
    }

    await connection("incidents").where("id", id).delete();

    res.status(204).json({
      status: "success",
      message: "Incident Deleted.",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
