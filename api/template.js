const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json({
    message: "list",
  });
});

router.get("/get", async (req, res) => {
  res.json({
    message: "get",
  });
});

router.post("/insert", async (req, res) => {
  res.json({
    message: "insert",
  });
});

router.put("/update", async (req, res) => {
  res.json({
    message: "update",
  });
});

router.delete("/delete", async (req, res) => {
  res.json({
    message: "delete",
  });
});

module.exports = router;