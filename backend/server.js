const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(volleyball);
app.use(cors());
app.use(express.json());

app.use("/api/todos", require("./api/routes/todos"));
app.use("/api/notes", require("./api/routes/notes"));
app.use("/api/auth", require("./api/routes/auth"));

// Error handling
app.use((error, req, res, next) => {
  res.status(500);
  res.json({
    message: error.message,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server listenning on http://localhost:${port}`)
);
