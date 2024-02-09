import {Router} from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import AuthController from "../controllers/authController.js";

const router = new Router()

.get('/auth', AuthController.get)
.post('/login', AuthController.login)
.post('/registration', AuthController.registration)
.delete('/auth', authMiddleware, AuthController.delete)

export default router