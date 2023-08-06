<script setup>
import TheMain from "./components/TheMain.vue";
import TheHeader from "./components/TheHeader.vue";

function setHeight() {
  document.documentElement.style.setProperty('--app-h', `${window.innerHeight}px`)
}

setHeight()

window.onresize = () => {
  setHeight()
}
</script>

<template>
  <div class="app-wrapper">
    <div class="header-wrapper">
      <TheHeader/>
    </div>
    <div class="main-wrapper">
      <TheMain/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header-wrapper {
  padding-bottom: 5px;
  background: lighten($primaryColor, 5%);
}

.main-wrapper {
  flex: 1 1 auto;
  background: lighten($primaryColor, 5%);
}
</style>
