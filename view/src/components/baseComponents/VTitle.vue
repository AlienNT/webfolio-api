<script setup>
defineProps({
  title: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="v-title">
    {{ title }}
  </div>
</template>

<style scoped lang="scss">
$titleColor: rgba(100, 149, 237, 1);
.v-title {
  font-family: monospace;
  font-size: 24px;
  color: $titleColor;
  text-align: center;
  font-weight: 600;
}
</style>