import express from"express";
import * as Functions from "../controllers/conversation.js";

const router = express.Router()

router.route('/conversations').get(Functions.getAllConversation).post(Functions.createConversation)
router.route('/conversations/:conversationId').get(Functions.getConversation)

export default router