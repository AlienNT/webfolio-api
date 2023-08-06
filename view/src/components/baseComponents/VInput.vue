<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: [String, Number],
    default: String
  },
  placeholder: {
    type: String,
    default: null
  },
  readonly: {
    type: Boolean,
    default: false
  },
})
defineEmits([
  'onInput'
])
</script>

<template>
  <label class="label">
    <input
        :type="type"
        class="v-input"
        :value="value"
        :placeholder="placeholder"
        :readonly="readonly"
        @input="e => $emit('onInput', e.target.value)"
    >
  </label>
</template>

<style scoped lang="scss">
$inputColor: white;
input {
  padding: 5px 15px;
  font-size: 16px;
  background: lighten($primaryColor, 2%);
  color: $inputColor;
  font-family: monospace;
}
</style>