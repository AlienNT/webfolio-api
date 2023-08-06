import {computed, reactive} from "vue";

const state = reactive({
    isAuth: false
})

export function useAuth() {
    const isAuth = computed(() => {
        return state.isAuth
    })

    function setIsAuth(value) {
        state.isAuth = value
    }

    return {isAuth, setIsAuth}
}