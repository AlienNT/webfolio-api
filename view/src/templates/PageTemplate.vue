<script setup>
defineProps({
  stylePrefix: {
    type: String,
    default: 'page'
  }
})
</script>

<template>
  <div :class="`${stylePrefix}-container container`">
    <div :class="`${stylePrefix}-row row`">
      <div :class="`${stylePrefix}-col col`">
        <slot name="content"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.col {
  flex: 1 1 auto;
  padding: 15px;
}
</style>