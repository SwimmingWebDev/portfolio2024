const User = require("../models/userModel");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password) {
      return next(new HttpError("Fill in all fields.", 422));
    }
    const newEmail = email.toLowerCase();

    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return next(new HttpError("Fill in all fields.", 422));
    }

    if (password.trim().length < 6) {
      return next(
        new HttpError("Password should be at least 6 characters.", 422)
      );
    }

    if (password != confirmPassword) {
      return next(new HttpError("Password does not match.", 422));
    }
  } catch (error) {
    return next(new HttpError("Registration Failed.", 422));
  }
};

const loginUser = (req, res, next) => {
  res.json("Login User");
};

const getUser = (req, res, next) => {
  res.json("Get User");
};

module.exports = { registerUser, loginUser, getUser };
