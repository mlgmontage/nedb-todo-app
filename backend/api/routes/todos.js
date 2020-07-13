const { Router } = require("express");
const router = Router();
const Todos = require("../models/Todos");

router.get("/", async (req, res) => {
  const todos = await Todos.find({});
  res.json(todos);
});

router.post("/", async (req, res) => {
  const { task, isCompleted = false } = req.body;

  const inserted = await Todos.insert({
    task,
    isCompleted,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.json(inserted);
});

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;

  const { task, isCompleted } = req.body;

  const { createdAt } = await Todos.findOne({ _id });

  const numberOfUpdated = await Todos.update(
    { _id },
    {
      task,
      isCompleted,
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

  const numberOfDeleted = await Todos.remove({ _id });
  res.json({
    numberOfDeleted,
  });
});

module.exports = router;
