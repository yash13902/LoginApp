const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  console.log("Hi i am about page");
  res.send("Hello World");
});
app.get("/contact", (req, res) => {
  res.send("Hello World");
});
app.get("/signin", (req, res) => {
  res.send("Hello World");
});
app.get("/signup", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
