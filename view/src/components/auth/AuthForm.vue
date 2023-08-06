<script setup>

import VForm from "../baseComponents/VForm.vue";
import VInput from "../baseComponents/VInput.vue";
import VButton from "../baseComponents/VButton.vue";
import {computed, reactive} from "vue";
import VTitle from "../baseComponents/VTitle.vue";

function onSubmit() {
  alert('onKeyDown: ' + JSON.stringify(formFields))
}

const formFields = reactive({
  email: '',
  password: ''
})

const email = computed({
  get() {
    return formFields.email
  },
  set(e) {
    formFields.email = e
  }
})

const password = computed({
  get() {
    return formFields.password
  },
  set(e) {
    formFields.password = e
  }
})
</script>

<template>
  <VForm
      class="auth-form"
      @on-submit="onSubmit"
  >
    <template v-slot:title>
      <VTitle
          title="Auth"
      />
    </template>
    <template v-slot:fields>
      <VInput
          :value="email"
          placeholder="email"
          type="email"
          @on-input="e => email = e"
      />
      <VInput
          :value="password"
          type="password"
          placeholder="password"
          @on-input="e => password = e"
      />
    </template>
    <template v-slot:buttons>
      <VButton
          type="button"
          title="Submit"
          @on-click="onSubmit"
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