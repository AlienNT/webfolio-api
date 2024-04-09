<script setup>

import PageTemplate from "../templates/PageTemplate.vue";
import {ref} from "vue";
import axios from "axios";

const files = ref(null)

function createFormData(file){
  const form = new FormData()
  form.append('file', file)
  console.log('createFormData', form)
  return form
}
function onSubmit(e) {
  console.log('e', files.value)
  axios.post('http://localhost:5000/file', createFormData(files.value))
}
</script>

<template>
  <PageTemplate style-prefix="profile">
    <template v-slot:content>
      <form @submit.prevent="onSubmit">
        <input type="file" accept="image/*" @input="e => files = e.target.files[0]">
        <input type="submit" value="submit">
      </form>
      <img src="https://web-filehost.s3.eu-central-1.amazonaws.com/161dd1e5-5f06-4843-879c-2d5bfcdceb90.png" alt="">
    </template>
  </PageTemplate>
</template>

<style scoped>

</style>