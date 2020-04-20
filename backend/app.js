const express = require("express");
const ongRouter = require("./routers/ongRoutes");

const app = express();

app.use(express.json());
app.use("/api/v1/ongs", ongRouter);

app.listen(3334, console.log("App Running"));
