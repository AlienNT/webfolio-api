<script setup>
import SkillsImage from "@/components/skills/SkillsImage.vue";
import VInput from "@/components/baseComponents/VInput.vue";
import VButton from "@/components/UI/VButton.vue";
import VForm from "@/components/baseComponents/VForm.vue";

import {computed, reactive, ref, watch} from "vue";
import {onBeforeRouteLeave} from "vue-router";

import {useSkills} from "@/compositions/state/useSkills.js";

const {skills, createSkill, updateSkill, setSkill} = useSkills()

const props = defineProps({
  formTitle: {
    type: String
  },
  isNew: {
    type: Boolean,
    default: false
  },
  skillData: {
    type: Object,
    default: null
  }
})
const emit = defineEmits([
  'onChange',
  'onClear'
])
const image = reactive({
  data: null,
  file: null
})

function clearImage() {
  Object.keys(image).forEach(key => {
    image[key] = null
  })
}

const skillData = computed(() => props.skillData)

const imageData = computed({
  get: () => skillData.value?.image,
  set: (val) => emit('onChange', {fieldName: 'image', value: val})
})
const title = computed({
  get: () => skillData.value?.title,
  set: (val) => emit('onChange', {fieldName: 'title', value: val})
})

const readonlySkillData = ref({})

const isChange = computed(() => {
  return JSON.stringify(skillData.value) !== JSON.stringify(readonlySkillData.value)
})

watch(skillData, (value) => {
  if (props.isNew || value) setReadonlyData(value)
}, {
  immediate: true
})

function setReadonlyData(value) {
  // readonlySkillData.value = cloneByValue(value)
}

async function confirmClear() {
  // return await createDialog(VDialog, 'Отменить изменения?')
}

async function clearFormFields() {
  if (props.isNew) {
    emit('onClear')
    return clearImage()
  }
  setSkill(readonlySkillData.value)
}

async function saveImage() {
  if (!image.file) return

  // await uploadImage(image.file)
  //     .then(({media}) => {
  //       imageData.value = media
  //     })
}

async function onSubmit() {
  if (props.isNew) {
    return await create()
  }
  return await update()
}

async function onReset() {
  const isConfirm = await confirmClear()

  if (isConfirm){
    await clearFormFields()
  }
}

async function update() {
  await saveImage()
  await updateSkill(props.skillData)
}

async function create() {
  await saveImage()
  await createSkill(props.skillData)
  await clearFormFields()
  setReadonlyData(props.skillData)
}

function onPickImage(e) {
  image.data = e.image
  image.file = e.file
  imageData.value = e.image
}

onBeforeRouteLeave(async () => {
  if (!isChange.value) return true
  // return await createDialog(VDialog, 'Уйти без сохранения?')
})

</script>

<template>
  <div class="row skills-form">
    <div class="col image-col">
      <SkillsImage :src="imageData"/>
    </div>
    <div class="col">

      <VForm @onSubmit="onSubmit">
        <template v-slot:fields>
<!--          <ViewTitle-->
<!--              :title="formTitle"-->
<!--          />-->
          <div class="row">
            <div class="col">

              <VInput
                  label="Название навыка"
                  :value="title"
                  :required="true"
                  @onInput="(e) => title = e"
              />
            </div>
            <div class="col">
<!--              <ImagePicker-->
<!--                  :image="imageData"-->
<!--                  label="Иконка"-->
<!--                  @onInput="onPickImage"-->
<!--              />-->
            </div>
          </div>
        </template>
        <template v-slot:buttons>
          <div class="button-wrapper">
            <VButton
                type="submit"
                label="submit"
                :disabled="!isChange"
            />
            <VButton
                :type="'button'"
                label="reset"
                :disabled="!isChange"
                @onClick="onReset"
            />
          </div>
        </template>
      </VForm>
    </div>
  </div>
</template>

<style scoped>
.skills-form {
  max-width: 600px;
  margin: auto;

  .row {
    flex-direction: column;
  }
}

</style>