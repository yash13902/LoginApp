const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./.env" });
const app = express();
const connectDB = require("./DB/connect");

const DB = process.env.MONGODB_URL;

connectDB(DB);

app.use(express.json());

//we link the router files
app.use(require("./routes/routes"));

const User = require("./models/userSchema");

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
