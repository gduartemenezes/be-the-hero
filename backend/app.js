const express = require("express");
const ngoRouter = require("./routers/ngoRoutes");

const app = express();

app.use(express.json());
app.use("/api/v1/ngos", ngoRouter);

app.listen(3334, console.log("App Running"));
