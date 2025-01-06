import express from "express";

// const morgan = require("morgan");
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

//middleware
const isLoggedIn = (req, res, next) => {
  const login = false;
  if (login) {
    next();
  } else {
    return res.status(401).json({ message: "Please Login first." });
  }
  // console.log("isLoggedIn middleware");
};

app.get("/api/user", isLoggedIn, (req, res) => {
  console.log("User Profile.");
  res.status(200).send({
    message: "User profile is returned.",
  });
});

app.listen(3001, () => {
  console.log(`Server is running are http://localhost:3001`);
});
