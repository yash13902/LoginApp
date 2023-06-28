const express = require("express");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.homepage = async (req, res) => {
  res.send("Hello World");
};

exports.createUser = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all fields" });
  }

  if (password !== cpassword) {
    return res.status(422).json({ error: "Passwords do not match" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res
      .status(422)
      .json({ message: "User with this email already exists" });
  }

  const user = await User.create(req.body);

  return res.status(201).json({
    message: "User Created Successfully!",
    user,
  });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json("Please enter the fields");
  }

  const user = await User.findOne({ email: email });

  let isMatch = false;

  if (user) isMatch = await bcrypt.compare(password, user.password);

  if (!user || !isMatch) {
    return res.status(422).json({
      message: "Invalid credentials ",
    });
  }

  const token = await user.generateAuthToken();

  res.cookie("jwtoken", token, {
    expires: new Date(Date.now() + 25982000000),
    httpOnly: true,
  });

  return res.status(201).json({
    message: "Successful",
    user,
  });
};
