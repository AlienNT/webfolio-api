import routerHelper from "@/router/routerHelper.js";

const routes = [
    {
        path: routerHelper.PROFILE.path,
        name: routerHelper.PROFILE.name,
        component: () => import('@/pages/ProfilePage.vue')
    },
    {
        path: routerHelper.SKILLS.path,
        name: routerHelper.SKILLS.name,
        component: () => import('@/pages/SkillsPage.vue'),
        children: [
            {
                path: routerHelper.SKILL_ADD.path,
                name: routerHelper.SKILL_ADD.name,
                component: () => import('@/components/skills/SkillsAdd.vue')
            },
            {
                path: routerHelper.SKILL_EDIT.path,
                name: routerHelper.SKILL_EDIT.name,
                component: () => import('@/components/skills/SkillsEdit.vue')
            }
        ]
    },
    {
        path: routerHelper.WORKS.path,
        name: routerHelper.WORKS.name,
        component: () => import('@/pages/WorksPage.vue')
    },
    {
        path: routerHelper.AUTH.path,
        name: routerHelper.AUTH.name,
        component: () => import('@/pages/AuthPage.vue')
    },
]
export default routes