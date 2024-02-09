<script setup>

import VForm from "../baseComponents/VForm.vue";
import VInput from "../baseComponents/VInput.vue";
import VButton from "../baseComponents/VButton.vue";
import VTitle from "../baseComponents/VTitle.vue";

import {reactive} from "vue";

const emit = defineEmits(['onSubmit'])

const formFields = reactive({
  email: '',
  password: ''
})

</script>

<template>
  <VForm
      class="auth-form"
      @on-submit="emit('onSubmit')"
  >
    <template v-slot:title>
      <VTitle
          title="Auth"
      />
    </template>
    <template v-slot:fields>
      <VInput
          :value="formFields.email"
          placeholder="email"
          type="email"
          @on-input="e => formFields.email = e"
      />
      <VInput
          :value="formFields.password"
          type="password"
          placeholder="password"
          @on-input="e => formFields.password = e"
      />
    </template>
    <template v-slot:buttons>
      <VButton
          type="button"
          title="Submit"
          @on-click="emit('onSubmit', formFields)"
      />
    </template>
  </VForm>
</template>

<style scoped>
.auth-form {
  max-width: 500px;
  margin: auto;
}
</style>