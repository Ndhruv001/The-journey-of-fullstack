import express from 'express';
import { userQueryValidationRules } from '../../middlewares/user/validateUserQuery.js'
import { contactUs } from '../../controllers/user/contactUsControllers.js'
import validate from '../../utils/validationResult.js'

const router = express.Router();

router.post('/contact-us', userQueryValidationRules(), validate, contactUs)

export default router;