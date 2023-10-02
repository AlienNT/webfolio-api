import {Router} from "express";
import _skillRouter from "./_skillRouter.js";
import _workRouter from "./_workRouter.js";
import _contactRouter from "./_contactRouter.js";

const router = new Router()

    .use(_skillRouter)
    .use(_workRouter)
    .use(_contactRouter)

export default router