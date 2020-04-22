const express = require("express");
const ngoRouter = require("./routers/ngoRoutes");
const incidentsRouter = require("./routers/incidentsRoutes");
const app = express();

app.use(express.json());
app.use("/api/v1/ngos", ngoRouter);
app.use("/api/v1/incidents", incidentsRouter);

app.listen(3334, console.log("App Running"));
