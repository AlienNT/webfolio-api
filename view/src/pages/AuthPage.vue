<script setup>

import AuthForm from "../components/auth/AuthForm.vue";
import PageTemplate from "../templates/PageTemplate.vue";

import {reactive} from "vue";
import {useAuth} from "../compositions/useAuth.js";
import {useRouter} from "vue-router";

import routerHelper from "../router/routerHelper.js";

const {loginRequest} = useAuth()
const router = useRouter()

const state = reactive({
  errors: []
})

async function login(formData) {
  await loginRequest(formData).then(() => router.push(routerHelper.DEFAULT.path))
}
</script>

<template>
  <section class="auth-page">
    <PageTemplate style-prefix="auth">
      <template v-slot:content>
        <AuthForm
            @on-submit="login"
        />
        <div class="errors-wrapper">
          <div v-for="error in state.errors"> {{ error }}</div>
        </div>
      </template>
    </PageTemplate>
  </section>
</template>

<style scoped>
.auth-page {
  display: flex;
  align-items: center;
  height: 100%;
}
.errors-wrapper {
  text-align: center;
  color: #ff4d4d;
}

</style>