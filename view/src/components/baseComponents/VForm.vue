<script setup>
const emit = defineEmits([
  'onSubmit'
])

function onKeyDown(e) {
  if (e.code === 'Enter') {
    emit("onSubmit")
  }
}
</script>

<template>
  <form
      class="v-form"
      @keydown="onKeyDown"
  >
    <div class="title">
      <slot name="title"/>
    </div>
    <div class="fields">
      <slot name="fields"/>
    </div>
    <div class="buttons">
      <slot name="buttons"/>
    </div>
  </form>
</template>

<style>
.v-form {
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 15px;

}
.buttons {
  justify-content: flex-end;
  display: flex;
}

label {
  border-radius: 5px;
  overflow: hidden;
}
</style>