<script setup>

import AuthForm from "../components/auth/AuthForm.vue";
import PageTemplate from "../templates/PageTemplate.vue";
</script>

<template>
  <section class="auth-page">
    <PageTemplate style-prefix="auth">
      <template v-slot:content>
        <AuthForm/>
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

</style>