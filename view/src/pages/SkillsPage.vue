<script setup>
import PageTemplate from "../templates/PageTemplate.vue";
import SkillsList from "@/components/skills/SkillsList.vue";

import {useSkillRequest} from "../compositions/api/useSkillRequest.js";
import {useSkills} from "../compositions/state/useSkills.js";
import {onMounted} from "vue";

const {fetchSkills, patchSkill} = useSkillRequest()
const {skills} = useSkills()

onMounted(() => {
  if (!skills.value?.length) fetchSkills()
})

function editHandler(e) {
  console.log('editHandler', e)
}
function deleteHandler(e) {
  console.log('deleteHandler', e)
}
function toggleActiveHandler(e) {
  const skill = skills.value?.find(skill => skill._id === e)

  if (skill) {
    patchSkill(e, {active: !skill.active})
  }
}


</script>

<template>
  <PageTemplate style-prefix="skills">
    <template v-slot:content>
      <div class="form">
        <router-view/>
      </div>
      <SkillsList
          :skills-list="skills"
          @on-edit="editHandler"
          @on-delete="deleteHandler"
          @on-click="toggleActiveHandler"
      />
    </template>
  </PageTemplate>
</template>

<style scoped>

</style>