<script setup>
defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  type: {
    type: String,
    default: 'button'
  },
  customClass: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['onClick'])
</script>

<template>
  <button
    class="button"
    :class="customClass"
    :disabled="disabled"
    :type="type"
    @click="emit('onClick')"
  >
    <span class="label">{{ label }}</span>
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
