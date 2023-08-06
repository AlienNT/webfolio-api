<script setup>

import NavItem from "./NavItem.vue";

defineProps({
  navList: {
    type: Array
  }
})
</script>

<template>
  <nav class="nav">
    <ul v-if="navList" class="navigation-list">
      <li
          v-for="(item, key) in navList"
          class="navigation-li"
          :key="key"
      >
        <NavItem
            :nav-item="item"
        />
      </li>
    </ul>
    <div v-else>navList</div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  margin-left: auto;
}

.navigation-list {
  display: flex;
  gap: 10px;
  font-family: monospace;
  text-transform: uppercase;
  @media #{$mediaMedium} {
    font-size: 16px;
  }
}


</style>