import {createRouter, createWebHashHistory} from "vue-router";
import routes from "./routes.js";
import {useAuth} from "../compositions/useAuth.js";
import routerHelper from "./routerHelper.js";

const {isAuth} = useAuth()

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (!isAuth.value && to.path !== routerHelper.AUTH.path) {
        return next(routerHelper.AUTH.path)
    }

    return next()
})
export default router