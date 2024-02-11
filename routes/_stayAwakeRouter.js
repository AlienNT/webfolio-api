import {Router} from "express";
import stayAwakeController from "../controllers/stayAwakeController.js";

const router = new Router()
    .get('/stay-awake', stayAwakeController.stayAwayRequest)

export default router