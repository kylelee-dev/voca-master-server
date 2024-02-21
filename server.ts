import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.port;

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hi");
});

// app.use("/api/user", userRoutes)
// app.use("/api/user", wordRoutes)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
