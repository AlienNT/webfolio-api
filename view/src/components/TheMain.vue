<script setup>
import {useAuth} from "../compositions/useAuth.js";
import {useAccessToken} from "../compositions/useAccessToken.js";
import {onMounted, watch} from "vue";

const {setIsAuth} = useAuth()

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
    setAccessToken(value)
    setTokenToLocalStorage(value)

    return null
  }

  deleteTokenInLocalStorage()
})


</script>

<template>
  <router-view/>
</template>