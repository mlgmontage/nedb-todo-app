const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", express.static("frontend/build"));
app.use("/name", require("./api/names"));

app.listen(8000);
