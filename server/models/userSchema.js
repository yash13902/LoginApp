const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name"],
  },
  email: {
    type: String,
    required: [true, "Please provide the email"],
  },
  phone: {
    type: Number,
    required: [true, "Please provide the number"],
  },
  work: {
    type: String,
    required: [true, "Please provide your work"],
  },
  password: {
    type: String,
    required: [true, "Please provide your work"],
  },
  cpassword: {
    type: String,
    required: [true, "Please provide your work"],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//generate auth token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

userSchema.methods.addMessage = async function (name, email, phone, message) {
  try {
    this.messages = this.messages.concat({ name, email, phone, message });
    await this.save();
    return this.message;
  } catch (e) {
    console.log(e);
  }
};

const User = mongoose.model("USER", userSchema);

module.exports = User;
