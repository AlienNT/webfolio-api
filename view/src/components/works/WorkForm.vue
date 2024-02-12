<script setup>

import {onMounted, reactive} from "vue";
import {workFormFields} from "@/helpers/formFields.js";


const state = reactive({
  formFields: null,
  locales: workFormFields.locales
})

onMounted(() => {
  state.formFields = createForm([
    workFormFields.fields.IMAGE,
    workFormFields.fields.PATH,
    workFormFields.fields.CODE_PATH,
    workFormFields.fields.CHIPS,
  ])

  state.locales = createTabs([
    workFormFields.locales.RU,
    workFormFields.locales.EN,
    workFormFields.locales.UA
  ])

  console.log(state)
})

function createForm(...fields) {
  const res = []
  fields.forEach(field => res.push(...field))
  return res
}

function createTabs(...tabs) {
  const res = []
  tabs.forEach(tab => res.push(...tab))
  return res
}
</script>

<template>
  <form
      class="work-form"
  >
    <ul class="tabs-list">
      <li
          class="tabs-list-item"
          v-for="(locale, index) in state.locales"
          :key="index"
      >
        <div class="tab">
          <div class="tab-button">
            {{ locale.label }}
          </div>
          <div class="tab-fields">
            <div class="tab-field">
              <label class="tab-field-label">
                <span class="tab-field-title"
                >
                  {{ locale.fields.TITLE.label }}
                </span>
                <input
                    class="tab-field-input"
                    :value="locale.fields.TITLE.value"
                    @input="e => locale.fields.TITLE.value = e.target.value"
                >
              </label>
            </div>
            <div class="tab-field">

              <label class="tab-field-label">
                <span
                    class="tab-field-title"
                >
                  {{ locale.fields.DESCRIPTION.label }}
                </span>
                <input
                    class="tab-field-input"
                    :value="locale.fields.DESCRIPTION.value"
                    @input="e => locale.fields.DESCRIPTION.value = e.target.value"
                >
              </label>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul class="fields">
      <li
          class="field"
          v-for="(field, index) in state.formFields"
          :key="index"
      >
        <label class="work-field-label">
          <span class="work-field-title">
            {{ field.label }}
          </span>
          <input
              class="work-field-input"
              :value="field.value"
              :placeholder="field.label"
          >
        </label>
      </li>
    </ul>
  </form>
</template>

<style scoped lang="scss">
.fields {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.field {
  padding: 5px 15px;
  //background: white;
}

.work-field-input,
.work-field-title {
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
}

.work-field-title {
  color: #FFFFFF;
}

.tabs-list {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.tabs-list-item {
  flex: 1 1 200px;
  color: #FFFFFF;
}

.tab-button {
  border-radius: 5px;
  background: #3676e8;
  padding: 5px 15px;
  flex: none;
  width: fit-content;
}
.tab-field-input {
  padding: 10px 15px;
  border-radius: 5px;
}
</style>