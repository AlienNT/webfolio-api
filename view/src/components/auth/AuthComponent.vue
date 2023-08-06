<script setup>
import {useAuth} from "../../compositions/useAuth.js";
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()
const {isAuth} = useAuth()

const isActive = computed(() => {
  return route.path === '/auth'
})

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