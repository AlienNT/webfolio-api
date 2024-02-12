<script setup>
import PageTemplate from "../templates/PageTemplate.vue";
import {useWorkRequest} from "@/compositions/api/useWorkRequest.js";
import {useWorks} from "@/compositions/state/useWorks.js";
import {onMounted} from "vue";
import WorkForm from "@/components/works/WorkForm.vue";

const {fetchWorks} = useWorkRequest()
const {works} = useWorks()

onMounted(() => {
  if (!works.value?.length) fetchWorks()
})
</script>

<template>
  <PageTemplate style-prefix="works">
    <template v-slot:content>
      <WorkForm/>
      {{ works }}
    </template>
  </PageTemplate>
</template>

<style scoped>

</style>