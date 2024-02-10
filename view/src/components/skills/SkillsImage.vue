<script setup>
import VImage from "@/components/UI/VImage.vue";

const props = defineProps({
  src: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="skills-image">
    <VImage
        :src="src"
    />
  </div>
</template>

<style scoped>

</style>