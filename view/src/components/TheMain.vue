<script setup>
import {useAuth} from "../compositions/useAuth.js";
import {useAccessToken} from "../compositions/useAccessToken.js";
import {onMounted, watch} from "vue";
import {useRouter} from "vue-router";
import routerHelper from "@/router/routerHelper.js";

const {setIsAuth, logout} = useAuth()
const router = useRouter()

const {
  accessToken,
  setAccessToken,
  setTokenToLocalStorage,
  deleteTokenInLocalStorage,
  getTokenInLocalStorage
} = useAccessToken()

onMounted(() => {
  const localToken = getTokenInLocalStorage()

  if (!accessToken.value && localToken) {
    setAccessToken(localToken)
  }
})

watch(() => accessToken.value, (value, oldValue) => {
  setIsAuth(!!value)

  if (value && value !== oldValue) {
    setTokenToLocalStorage(value)

    return null
  }

  deleteTokenInLocalStorage()

  if (!accessToken.value) {
    router.push({name: routerHelper.AUTH.name})
  }
})


</script>

<template>
  <router-view/>
</template>