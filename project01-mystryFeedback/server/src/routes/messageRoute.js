import express from 'express';
import { verifyJwt } from '../middlewares/verifyJwtMiddleware.js';
import { setMessagesValidationRules, getMessagesValidationRules, validate} from '../middlewares/validationMiddleware.js';
import { getMessages, setMessages } from '../controllers/messageController.js';

const router = express.Router();

router.post('/set-messages',  setMessages);
router.post('/get-messages',  getMessages);

export default router;