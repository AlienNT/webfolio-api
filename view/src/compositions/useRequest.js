import axios from "axios";
import config from "../../config.js";
import {useAccessToken} from "./useAccessToken.js";

const {accessToken} = useAccessToken()

export function useRequest() {
    // axios.defaults.withCredentials = true
    axios.defaults.headers = {
        Authorization: `Bearer ${accessToken.value}`,
    }
    async function apiRequest(method = 'GET', route, body) {
        return axios({
            method,
            baseURL: config.HOST.dev,
            url: route,
            data: body
        }, {
            headers: {
                Authorization: `Bearer ${accessToken.value}`,
            }
        })
    }

    return {
        apiRequest
    }
}