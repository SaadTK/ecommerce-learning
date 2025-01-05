import express from "express";

const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "API is working Fine.",
  });
});

app.listen(3001, () => {
  console.log(`Server is running are http://localhost:3001`);
});
