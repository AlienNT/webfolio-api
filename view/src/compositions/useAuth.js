import {computed, reactive} from "vue";

import {useRequest} from "./useRequest.js";
import {useAccessToken} from "./useAccessToken.js";
import {requestRoutes} from "@/helpers/requestRoutes.js";

const {setAccessToken, removeAccessToken, deleteTokenInLocalStorage} = useAccessToken()
const {apiRequest} = useRequest()

const state = reactive({
    isAuth: false,
    errors: []
})

export function useAuth() {
    const isAuth = computed(() => {
        return state.isAuth
    })

    function setIsAuth(value) {
        state.isAuth = value
    }

    async function loginRequest(formData) {
        return await apiRequest({
            method: requestRoutes.AUTH.LOGIN.method,
            route: requestRoutes.AUTH.LOGIN.url,
            body: formData

        }).then(({data}) => {
            setErrors([])
            setAccessToken(data?.accessToken)

            return data?.data
        }).catch(res => {
            const errors = res?.response?.data?.errors

            if (errors) setErrors(errors)
        })
    }

    const errors = computed(() => {
        return state.errors
    })

    function setErrors(errors) {
        state.errors = errors
    }

    function logout() {
        removeAccessToken()
        deleteTokenInLocalStorage()
    }

    return {
        isAuth,
        setIsAuth,
        loginRequest,
        errors,
        setErrors,
        logout
    }
}