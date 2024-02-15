<script setup>
import PageTemplate from "@/templates/PageTemplate.vue";

import {useContacts} from "@/compositions/state/useContacts.js";
import {useContactRequest} from "@/compositions/api/useContactRequest.js";
import {onMounted} from "vue";

const {contacts} = useContacts()
const {fetchContacts} = useContactRequest()

onMounted(() => {
  if (!contacts.value?.length) fetchContacts()
})
</script>

<template>
  <section class="contacts-page">
    <PageTemplate>
      <template v-slot:content>
        {{ contacts }}
      </template>
    </PageTemplate>
  </section>
</template>

<style scoped lang="scss">

</style>