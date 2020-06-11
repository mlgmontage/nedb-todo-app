const express = require("express");
const app = express();
const cors = require("cors");
const datastore = require("nedb-promise");

// database
const store = datastore({
  filename: "data/db.json",
  autoload: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  await store.insert({
    name: "Hello, world",
  });
  const data = await store.find({});
  res.json(data);
});

app.use("/name", require("./api/names"));

app.listen(8000);
