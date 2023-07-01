const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const {
  homepage,
  createUser,
  loginUser,
} = require("../controllers/userController");
const authenticate = require("../middleware/authenticate");

router.route("/").get(homepage);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.get("/about", authenticate, (req, res) => {
  console.log("hello my about");
  res.status(200).send(req.rootUser);
});
router.get("/getData", authenticate, (req, res) => {
  console.log("hello getting data");
  res.status(200).send(req.rootUser);
});
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).send({
        error: "Please fill all the fields",
      });
    }
    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();

      res.status(201).json({
        message: "User Contact Successfully sent",
      });
    }
  } catch (e) {
    console.log(e);
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", {
    path: "/",
  });
  res.status(200).send("user logged out");
});
module.exports = router;
