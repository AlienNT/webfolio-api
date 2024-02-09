import {computed, reactive} from "vue";

import {useRequest} from "./useRequest.js";
import {useAccessToken} from "./useAccessToken.js";

const {setAccessToken} = useAccessToken()
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
        return await apiRequest('POST', '/login', formData)
            .then(({data}) => {
                setErrors([])
                setAccessToken(data?.data?.accessToken)

                return data?.data
            })
            .catch(res => {
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

    return {
        isAuth,
        setIsAuth,
        loginRequest,
        errors,
        setErrors
    }
}