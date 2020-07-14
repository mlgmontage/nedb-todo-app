const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        next(new Error(error.message));
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(403);
    next(new Error("Unauthorized"));
  }
};

module.exports = {
  authToken,
};
