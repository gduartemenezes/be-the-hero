const connection = require("../database/connection");

exports.createIncident = async (req, res) => {
  try {
    const newIncident = req.body;
    newIncident.ngo_id = req.headers.authorization;

    const result = await connection("incidents").insert(newIncident);

    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
