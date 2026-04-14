const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const URL = process.env.URL;

app.use(cors());
app.use(express.json());

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Sever is running" });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
