import express from "express";
import {
  forgotPasswordController,
  getAllUsers,
  loginController,
  registerController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

const router = express.Router();

//REGISTER USER - POST
router.post("/register", registerController);
//LOGIN USER - POST
router.post("/login", loginController);
router.put("/forgot-password", forgotPasswordController);
//GET ALL USERS
router.get("/get-all-users", requireSignIn, isAdmin, getAllUsers);
router.get("/verify-user", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get("/verify-admin", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
