import express from "express";
import { getMessages, sendMessage } from "../controllers/messageControllers.js";
import { verifyJwt } from "../middlewares/user/verifyJWT.js";

const router = express.Router();

// SECURE ROUTES
router.get("/messages/:receiver_id", verifyJwt, getMessages);
router.post("/messages/send", verifyJwt, sendMessage);

export default router;
