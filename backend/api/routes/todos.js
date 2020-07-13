const { Router } = require("express");
const router = Router();
const Todos = require("../models/Todos");

router.get("/", async (req, res) => {
  res.json({
    message: "Hey",
  });
});

module.exports = router;
