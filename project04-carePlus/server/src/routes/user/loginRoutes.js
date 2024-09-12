import express from 'express';
import login from '../../controllers/user/loginControllers.js'
import { userLoginValidationRules } from '../../middlewares/user/validateUserLogin.js'
import validate from '../../utils/validationResult.js'

const router = express.Router();

router.post('/auth/login', userLoginValidationRules(), validate, login);

export default router;