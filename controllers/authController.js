import User from "../models/userModel.js";
import {
  compareAnswer,
  comparePassword,
  hashPassword,
} from "../utils/authUtils.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, answer } = req.body;
    // Check for Existing User
    let user = await User.findOne({ email });
    if (user) {
      return res.status(501).send({ success: false, message: "User Exists" });
    }
    //Hash Password
    const hashedPassword = await hashPassword(password);
    //Hash Password
    const hashedAnswer = await hashPassword(answer);
    user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      answer: hashedAnswer,
    });
    res
      .status(200)
      .send({ success: true, message: "User Registered Successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "User Registration Failed",
      error: error.messages,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check for Existing User
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(501)
        .send({ success: false, message: "User Not Found" });
    }
    //Comapre Password
    const compare = await comparePassword(password, user.password);

    if (!compare) {
      return res
        .status(501)
        .send({ success: false, message: "Incorrect Username or Password" });
    }
    //Generate Token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "User LoggedIn Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "User Login Failed",
      error: error.message,
    });
  }
};

//Admin Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      success: true,
      message: "Successfully Fetched All Users",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed To Fetch All Users",
      error: error.messages,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      return res
        .status(401)
        .send({ success: false, message: "Email is Required" });
    }
    if (!answer) {
      return res
        .status(401)
        .send({ success: false, message: "Answer is Required" });
    }
    if (!newPassword) {
      return res
        .status(401)
        .send({ success: false, message: "New Password is Required" });
    }
    //Check for existing user
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: "User Doesn't Exists" });
    }
    //compare passwords
    const match = await compareAnswer(answer, user.answer);
    if (!match) {
      return res
        .status(401)
        .send({ success: false, message: "Please Enter Valid Answer" });
    }
    //Hash New Password
    const newHashedPassword = await hashPassword(newPassword);
    user = await User.findByIdAndUpdate(user._id, {
      password: newHashedPassword,
    });
    res
      .status(200)
      .send({ success: true, message: "Password Reset Successfully", user });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to Reset Password",
      error: error.message,
    });
  }
};
