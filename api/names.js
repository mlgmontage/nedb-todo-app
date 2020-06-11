const router = require("express").Router();
const datastore = require("nedb-promise");

// database
const store = datastore({
  filename: "data/names.json",
  autoload: true,
});

router.get("/", async (req, res) => {
  const data = await store.find({});
  res.json({
    message: "list",
    data,
  });
});

router.get("/get", async (req, res) => {
  res.json({
    message: "get",
  });
});

router.post("/insert", async (req, res) => {
  const name = req.body.name;
  const inserted = await store.insert({
    name: name,
  });
  res.json({
    message: "Record has been inserted",
    data: inserted,
  });
});

router.put("/update", async (req, res) => {
  res.json({
    message: "update",
  });
});

router.delete("/delete", async (req, res) => {
  const id = req.body.id;
  const deleted = await store.delete({ _id: id });
  res.json({
    message: "record has been deleted",
    data: deleted,
  });
});

module.exports = router;
