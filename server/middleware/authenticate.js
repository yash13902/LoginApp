const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    console.log(token);
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User Not Found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (e) {
    res.status(401).send("Unauthorized: No token Provided");
    console.log(e);
  }
};

module.exports = authenticate;
