<script setup>
import SkillsForm from "@/components/skills/SkillsForm.vue";
import {reactive} from "vue";


const skillData = reactive({
  title: null,
  active: null,
  image: null,
})
function clearFormFields () {
  Object.keys(skillData).forEach(key => skillData[key] = null)
  console.log('clearFormFields', skillData)
}
function changeField({fieldName, value}) {
  skillData[fieldName] = value
}
</script>

<template>
<div class="skill-add">
  <SkillsForm
      :is-new="true"
      :skill-data="skillData"
      @onChange="changeField"
      @onClear="clearFormFields"
  />
</div>
</template>

<style scoped>

</style>