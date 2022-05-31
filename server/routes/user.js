import express from"express";
import * as Functions from "../controllers/user.js";

const router = express.Router()

router.route('/user').get(Functions.getAllUser).post(Functions.createUser)
router.route('/user/:userId').get(Functions.getUser)

export default router