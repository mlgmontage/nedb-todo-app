const { Router, json } = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SaltRounds = 10;
const router = Router();

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, SaltRounds);
  const user = await Users.findOne({ username });

  if (!user) {
    const created = await Users.insert({ username, hashed });
    res.json({
      message: "User has been created",
      username,
    });
  } else {
    next(new Error("Username is already taken"));
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ username });
  if (user) {
    const isValidPassword = await bcrypt.compare(password, user.hashed);
    if (isValidPassword) {
      jwt.sign(
        { username },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        },
        (error, token) => {
          res.json({
            token,
          });
        }
      );
    } else {
      next(new Error("Unable to authorize"));
    }
  } else {
    next(new Error("Unable to authorize"));
  }
});

module.exports = router;
