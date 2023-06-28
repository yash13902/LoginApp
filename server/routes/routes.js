const express = require("express");
const router = express.Router();

const {
  homepage,
  createUser,
  loginUser,
} = require("../controllers/userController");

router.route("/").get(homepage);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);

// router.get("/about", (req, res) => {
//   console.log("Hi i am about page");
//   res.send("Hello World");
// });
// router.get("/contact", (req, res) => {
//   res.send("Hello World");
// });
// router.get("/signin", (req, res) => {
//   res.send("Hello World");
// });
// router.get("/signup", (req, res) => {
//   res.send("Hello World");
// });

module.exports = router;
