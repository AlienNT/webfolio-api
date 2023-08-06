<script setup>
import {computed, reactive, watch} from "vue";
import VImageLoader from "./VImageLoader.vue";

const props = defineProps({
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: 'image'
  }
})

function onLoad(e) {
  console.log('onLoad', e)
  imageStatus.load = true
}

function onError(e) {
  console.log('onError', e)
  imageStatus.error = true
}

watch(() => props.src, (value, oldValue) => {
  if (value !== oldValue) {
    imageStatus.load = false;
    imageStatus.error = false;
  }
})

const imageStatus = reactive({
  load: false,
  error: false
})
const isLoad = computed(() => {
  return props.src && imageStatus.load
})
</script>

<template>
  <div class="v-image">
    <img
        v-if="src"
        :src="src"
        alt="alt"
        @load="onLoad"
        @error="onError"
    >
    <div v-else-if="imageStatus.error" class="error">
      error
    </div>
    <div v-else-if="imageStatus.load" class="loading">
      <VImageLoader/>
    </div>
    <div
        v-else
        class="empty"
        v-html="`no image`"
    />
  </div>
</template>

<style scoped lang="scss">
.v-image, img {
  width: 100%;
  height: 100%;
}

.v-image {
  display: flex;
  border-radius: 5px;
  overflow: hidden;

  > * {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
.empty {
  background: #5e5e5e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b6b6b6;
  text-transform: uppercase;
  font-size: 12px;
  font-family: monospace;
}
</style>