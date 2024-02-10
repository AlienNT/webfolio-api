<script setup>
import SkillsForm from "@/components/skills/SkillsForm.vue";

import {useRoute} from "vue-router";
import {useSkills} from "@/compositions/state/useSkills.js";
import {computed} from "vue";

const {skill, updateField} = useSkills()
const route = useRoute()

const id = computed(() => route.params.id)
const skillData = computed(() => skill(id.value))

function changeField({fieldName, value}) {
  updateField(id.value, fieldName, value)
}
</script>

<template>
<div class="skill-edit">
  <SkillsForm
      :skill-data="skillData.value"
      @onChange="changeField"
  />
</div>
</template>

<style scoped>

</style>