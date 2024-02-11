import {computed, reactive} from "vue";

const state = reactive({
    accessToken: null
})

export function useAccessToken() {
    const accessToken = computed(() => {
        return state.accessToken
    })

    function setAccessToken(token) {
        return state.accessToken = token
    }

    function removeAccessToken() {
        return setAccessToken(null)
    }

    function setTokenToLocalStorage(token) {
        return localStorage.setItem('accessToken', token)
    }

    function getTokenInLocalStorage() {
        return localStorage.getItem('accessToken')
    }

    function deleteTokenInLocalStorage() {
        return localStorage.removeItem('accessToken')
    }

    return {
        accessToken,
        setAccessToken,
        removeAccessToken,
        setTokenToLocalStorage,
        getTokenInLocalStorage,
        deleteTokenInLocalStorage,
    }
}