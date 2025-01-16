import express from "express";
import {
  login,
  register,
  logout,
  getMe,
} from "../controllers/authControllers.js";
import { getContactsList } from "../controllers/userControllers.js";
import { userLoginValidationRules } from "../middlewares/validations/validateUserLogin.js";
import { userRegistrationValidationRules } from "../middlewares/validations/validateUserRegistration.js";
import { validate } from "../middlewares/validations/validationResult.js";
import { verifyJwt } from "../middlewares/user/verifyJWT.js";

const router = express.Router();

router.post(
  "/auth/signup",
  userRegistrationValidationRules(),
  validate,
  register
);
router.post("/auth/login", userLoginValidationRules(), validate, login);
router.post("/auth/logout", verifyJwt, logout);
router.get("/auth/me", verifyJwt, getMe);

// SECURE ROUTES
router.get("/contacts/list", verifyJwt, getContactsList);

export default router;
