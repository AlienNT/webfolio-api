<script setup>

import HeaderLogo from "./headerComponents/HeaderLogo.vue";
import NavList from "./headerComponents/NavList.vue";
import {useNav} from "../compositions/useNav.js";
import AuthComponent from "./auth/AuthComponent.vue";

const {navigation} = useNav()
</script>

<template>
  <header class="header">
    <div class="container">
      <HeaderLogo/>
      <NavList
          :nav-list="navigation"
      />
      <AuthComponent/>
    </div>
  </header>
</template>

<style scoped lang="scss">

$bgColor: $primaryColor;
$fontColor: #fff;

.header {
  display: flex;
  min-height: $headerHeight;
  background: $bgColor;
  color: $fontColor;
  box-shadow: 0 0 7px 0 rgba(136, 136, 136, 0.55);
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

</style>