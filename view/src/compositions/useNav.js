import {computed, reactive} from "vue";

const state = reactive({
    navigation: [
        {
            _id: 1,
            title: 'profile',
            name: 'profile',
            path: '/profile',
            order: 1
        },
        {
            _id: 2,
            title: 'skills',
            name: 'skills',
            path: '/skills',
            order: 2
        },
        {
            _id: 3,
            title: 'works',
            name: 'works',
            path: '/works',
            order: 3
        }
    ]
})

export function useNav() {
    const navigation = computed(() => {
        return state.navigation
    })

    function setNavigation(value) {
        state.navigation = value
    }

    return {
        navigation, setNavigation
    }
}