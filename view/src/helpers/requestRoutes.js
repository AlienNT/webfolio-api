export const routeNames = {
    SKILLS: '/skills',
    WORKS: '/works',
    CONTACTS: '/contacts'
}
export const requestRoutes = {
    SKILLS: {
        GET: {
            method: 'get',
            url: routeNames.SKILLS
        },
        CREATE: {
            method: 'post',
            url: routeNames.SKILLS
        },
        UPDATE: {
            method: 'patch',
            url: (id) => routeNames.SKILLS + '/' + id
        },
        DELETE: {
            method: 'delete',
            url: (id) => routeNames.SKILLS + '/' + id
        },
    },
    WORKS: {
        GET: {
            method: 'get',
            url: routeNames.WORKS
        },
        CREATE: {
            method: 'post',
            url: routeNames.WORKS
        },
        UPDATE: {
            method: 'patch',
            url: (id) => routeNames.WORKS + '/' + id
        },
        DELETE: {
            method: 'delete',
            url: (id) => routeNames.WORKS + '/' + id
        },
    },
    CONTACTS: {
        GET: {
            method: 'get',
            url: routeNames.CONTACTS
        },
        CREATE: {
            method: 'post',
            url: routeNames.CONTACTS
        },
        UPDATE: {
            method: 'patch',
            url: (id) => routeNames.CONTACTS + '/' + id
        },
        DELETE: {
            method: 'delete',
            url: (id) => routeNames.CONTACTS + '/' + id
        },
    }

}