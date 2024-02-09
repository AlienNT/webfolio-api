<script setup>
import {computed} from "vue";

import {useAuth} from "../../compositions/useAuth.js";
import {useRoute, useRouter} from "vue-router";
import {useAccessToken} from "../../compositions/useAccessToken.js";

import routerHelper from "../../router/routerHelper.js";

const route = useRoute()
const router = useRouter()

const {isAuth} = useAuth()
const {deleteTokenInLocalStorage, removeAccessToken} = useAccessToken()

const isActive = computed(() => {
  return route.path === routerHelper.AUTH.path
})

function logout() {
  deleteTokenInLocalStorage()
  removeAccessToken()

  router.push({name: routerHelper.AUTH.name})
}

</script>

<template>
  <div class="auth-wrapper">
    <div
        v-if="isAuth"
        class="title"
    >
      user
    </div>
    <div class="auth-action">
      <router-link
          v-if="!isAuth"
          :class="isActive && 'active'"
          to="/auth"
          v-html="'Sign in'"
      />
      <div
          v-else
          class="logout"
          @click.stop="logout"
      >
        Logout
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$authColor: white;
.auth-wrapper {
  display: flex;
  align-items: center;
  padding: 5px 15px;
  font-family: monospace;
  cursor: pointer;
  gap: 5px;

}

.auth-action {
  * {
    @extend .button-like;
    @include fontLighten(darken($authColor, 40%), 50%)
  }
}

.active {
  color: $authColor;
}
</style>