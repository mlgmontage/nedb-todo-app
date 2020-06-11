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

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;
  const data = await store.findOne({ _id: id });

  res.json({
    message: "get",
    data: data,
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
  const id = req.body.id;
  const newName = req.body.name;
  const updated = await store.update({ _id: id }, { name: newName }, {});
  res.json({
    message: "update",
    data: updated,
  });
});

router.delete("/delete", async (req, res) => {
  const id = req.body.id;
  const deleted = await store.remove({ _id: id });
  res.json({
    message: "record has been deleted",
    data: deleted,
  });
});

module.exports = router;
