const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();

// connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("api running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is started on ${port}`);
});
