<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  title: {
    type: String,
    default: 'button'
  },
  customClass: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'button'
  },
})
defineEmits([
  'onClick'
])
</script>

<template>
  <button
      class="v-button"
      :class="customClass"
      :type="type"
      :aria-label="ariaLabel"
      :title="title"
      :disabled="disabled"
      @click="$emit('onClick')"
  >
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variables/for-extends";

.v-button {
  @extend .button-like;
  @include bgDarken($buttonBGColor);

  font-size: 16px;
  border-radius: 5px;
  padding: 5px 15px;
  color: $buttonFontColor;
  font-family: monospace;
}
</style>