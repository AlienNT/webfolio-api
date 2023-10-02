import routerHelper from "./routerHelper.js";

const routes = [
    {
        path: routerHelper.PROFILE.path,
        name: routerHelper.PROFILE.name,
        component: () => import('../pages/ProfilePage.vue')
    },
    {
        path: routerHelper.PROFILE.path,
        name: routerHelper.PROFILE.name,
        component: () => import('../pages/ProfilePage.vue')
    },
    {
        path: routerHelper.SKILLS.path,
        name: routerHelper.SKILLS.name,
        component: () => import('../pages/SkillsPage.vue')
    },
    {
        path: routerHelper.WORKS.path,
        name: routerHelper.WORKS.name,
        component: () => import('../pages/WorksPage.vue')
    },
    {
        path: routerHelper.AUTH.path,
        name: routerHelper.AUTH.name,
        component: () => import('../pages/AuthPage.vue')
    },
]
export default routes