const express = require("express");
const cors = require("cors");

const ngoRouter = require("./routers/ngoRoutes");
const incidentsRouter = require("./routers/incidentsRoutes");
const profileRouter = require("./routers/profileRoutes");
const sessionRouter = require("./routers/sessionRoutes");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/ngos", ngoRouter);
app.use("/api/v1/incidents", incidentsRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/session", sessionRouter);

app.listen(3334, console.log("App Running"));
