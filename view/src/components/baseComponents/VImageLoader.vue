<script setup>

</script>

<template>
  <div class="image-loader"/>
</template>

<style scoped lang="scss">
.image-loader {
  height: 100%;
  width: 100%;
  animation: ease infinite imageLoader 4s;
  background: linear-gradient(90deg, rgb(82, 81, 81) 0%, rgb(154, 152, 152) 100%);
  background-size: 200%;
}

@keyframes imageLoader {
  0%, 25%, 100% {
    background-position: 0;
  }
  75% {
    background-position: 100%;
  }
}
</style>