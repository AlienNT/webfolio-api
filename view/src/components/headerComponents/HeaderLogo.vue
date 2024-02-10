<script setup>

import VImage from "../baseComponents/VImage.vue";
import routerHelper from "../../router/routerHelper.js";

defineProps({
  path: {
    type: String,
    default: routerHelper.DEFAULT.path
  }
})
</script>

<template>
  <router-link
      :to="path"
      class="header-logo"
  >
    <VImage/>
  </router-link>
</template>

<style scoped lang="scss">
.header-logo {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60px;
  padding: 5px 0;
  @media  #{$mediaMedium}{
    max-width: 100px;
  }
}
</style>