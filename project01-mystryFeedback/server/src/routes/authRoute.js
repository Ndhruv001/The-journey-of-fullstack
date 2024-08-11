import express from 'express';
import { signup, login, logout, getUser} from '../controllers/authController.js';
import {verifyJwt} from '../middlewares/verifyJwtMiddleware.js';
import { validate, signupValidationRules, signinValidationRules } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post("/sign-up", signupValidationRules(), validate, signup);
router.post("/sign-in", signinValidationRules(), validate, login);
router.post("/sign-out", verifyJwt, logout);
router.get("/get-user", verifyJwt, getUser);

export default router;