function workLocaleFields() {
    return {
        TITLE: {
            name: 'title',
            label: 'title',
            value: null
        },
        DESCRIPTION: {
            name: 'description',
            label: 'description',
            value: null
        },
    }
}

export const workFormFields = {
    EN: workLocaleFields(),
    RU: workLocaleFields(),
    UA: workLocaleFields(),
    CODE_PATH: {
        name: 'codePath',
        label: 'code path',
        value: null
    },
    IMAGE: {
        name: 'image',
        label: 'image',
        value: null
    },
    PATH: {
        name: 'path',
        label: 'path',
        value: null
    },
    CHIPS: {
        name: 'chips',
        label: 'skills',
        value: null
    },
}

export const skillFormFields = {
    TITLE: {
        name: 'title',
        label: 'title',
        value: null
    },
    IMAGE: {
        name: 'image',
        label: 'image',
        value: null
    },
    ACTIVE: {
        name: 'active',
        label: 'active',
        value: null
    }
}
