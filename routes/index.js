import {Router} from "express";
import _skillRouter from "./_skillRouter.js";
import _workRouter from "./_workRouter.js";
import _contactRouter from "./_contactRouter.js";
import _authRouter from "./_authRouter.js";
import _stayAwakeRouter from "./_stayAwakeRouter.js";

const router = new Router()
    .use(_authRouter)
    .use(_skillRouter)
    .use(_workRouter)
    .use(_contactRouter)
    .use(_stayAwakeRouter)
export default router