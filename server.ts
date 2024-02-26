import express from "express";
import dotenv from "dotenv";
import morgan = require("morgan");
import { AppDataSource } from "./data-source";
dotenv.config();

const app = express();
const PORT = process.env.port;

app.use(express.json());
app.use(morgan("dev"));

AppDataSource.initialize()
  .then(() => console.log("initialized"))
  .catch((error) => console.log(error));
app.get("/", (req, res) => {
  res.json("Hi");
});

// app.use("/api/user", userRoutes)
// app.use("/api/user", wordRoutes)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
