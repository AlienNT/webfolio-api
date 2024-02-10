<script setup>


import SkillsListItem from "@/components/skills/SkillsListItem.vue";

defineProps({
  skillsList: {
    type: Array,
    default: null
  }
})
const emit = defineEmits(['onClick', 'onDelete', 'onEdit'])

</script>

<template>
  <ul class="skills-list">
    <SkillsListItem
        v-for="(skill, key) in skillsList"
        :key="skill?._id || key"
        :skill-data="skill"
        @onClick="e => emit('onClick', e)"
        @onDelete="e => emit('onDelete', e)"
        @onEdit="e => emit('onEdit', e)"
    />
  </ul>
</template>

<style scoped>
.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>