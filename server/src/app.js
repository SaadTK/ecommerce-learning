import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser"; //3rd party middleware
import createError from "http-errors";

const app = express();

app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/user", (req, res) => {
  console.log(req.body.id);
  res.status(200).send({
    message: "User profile is returned.",
  });
});

//client error handling
app.use((req, res, next) => {
  //   res.status(404).send({ message: "Route not found." });
  next(createError(404, "createError says route not found"));
});
//server error handling -> all the server related errors from all the pages will come here
app.use((err, req, res, next) => {
  //   console.error(err.stack);
  //   res.status(500).send({ message: "Server problem." });
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

// module.export = app;
export default app;
