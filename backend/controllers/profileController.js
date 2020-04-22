const connection = require("../database/connection");

exports.getNGOIncidents = async (req, res) => {
  try {
    const ngoID = req.headers.authorization;

    const ngoIncidents = await connection("incidents")
      .where("ngo_id", ngoID)
      .select("*");

    res.status(200).json({
      status: "success",
      ngoIncidents,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
