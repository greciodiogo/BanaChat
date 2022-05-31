import express from"express";
import * as Functions from "../controllers/message.js";

const router = express.Router()

router.route('/messages').get(Functions.getAllMessage).post(Functions.createMessage)
router.route('/messages/:messageId').get(Functions.getMessage)

export default router