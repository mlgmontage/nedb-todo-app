const { Router } = require("express");
const router = Router();
const Notes = require("../models/Notes");

router.get("/", async (req, res) => {
  const notes = await Notes.find({});
  res.json(notes);
});

router.post("/", async (req, res) => {
  const { title, note } = req.body;

  const inserted = await Notes.insert({
    title,
    note,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.json(inserted);
});

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;

  const { title, note } = req.body;

  const { createdAt } = await Notes.findOne({ _id });

  const numberOfUpdated = await Notes.update(
    { _id },
    {
      title,
      note,
      updatedAt: new Date(),
      createdAt,
    },
    {}
  );

  res.json({
    numberOfUpdated,
  });
});

router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;

  const numberOfDeleted = await Notes.remove({ _id });
  res.json({
    numberOfDeleted,
  });
});

module.exports = router;
