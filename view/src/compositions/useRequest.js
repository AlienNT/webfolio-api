import axios from "axios";
import config from "../../config.js";

import {useAccessToken} from "./useAccessToken.js";
import {useAuth} from "@/compositions/useAuth.js";

import routerHelper from "@/router/routerHelper.js";
import {requestRoutes} from "@/helpers/requestRoutes.js";

const {accessToken, setAccessToken} = useAccessToken()
const {logout} = useAuth()

export function useRequest() {
    async function apiRequest({method = 'GET', route, body}) {
        const tokenExpired = route !== routerHelper.AUTH.path ? isTokenExpired(accessToken.value) : false

        if (tokenExpired) {
            await refreshTokenRequest()
        }
        return request({method, route, body});
    }

    async function refreshTokenRequest() {
        return await request({
            method: requestRoutes.AUTH.REFRESH.method,
            route: requestRoutes.AUTH.REFRESH.url

        }).then(({data}) => {
            setAccessToken(data?.accessToken)

            return data?.accessToken
        })
    }

    function request({method = 'GET', route, body}) {
        return axios({
            method,
            baseURL: import.meta.env.PROD ? config.HOST.prod : config.HOST.dev,
            url: route,
            data: body,
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${accessToken.value}`,
            }
        }).then(({data, status}) => {
            return {
                data: data?.data,
                status
            }
        }).catch(({response}) => {
            if (response.status === 401) {
                logout()
            }

            return response
        })
    }

    return {
        apiRequest
    }
}

function isTokenExpired(token) {
    if (!token) return true

    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    const {exp} = JSON.parse(jsonPayload);
    return Date.now() >= (exp) * 1000
}