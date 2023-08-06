const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/ProfilePage.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../pages/ProfilePage.vue')
    },
    {
        path: '/skills',
        name: 'skills',
        component: () => import('../pages/SkillsPage.vue')
    },
    {
        path: '/works',
        name: 'works',
        component: () => import('../pages/WorksPage.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../pages/AuthPage.vue')
    },
]
export default routes