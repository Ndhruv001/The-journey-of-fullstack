import express from 'express';
import loginController from '../controllers/loginController.js'
import { userLoginValidationRules, validate } from '../middlewares/validateUserLogin.js'

const router = express.Router();

router.post('/auth/login', userLoginValidationRules(), validate, loginController);

export default router;