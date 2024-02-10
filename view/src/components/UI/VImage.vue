<script setup>
import {computed, reactive} from "vue";
import VLoader from "@/components/UI/VLoader.vue";

const props = defineProps({
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: null
  },
})
const imageStatus = reactive({
  loaded: false,
  error: false
})

const isError = computed(() => {
  return imageStatus.error
})

const isLoading = computed(() => {
  return props.src && !imageStatus.loaded && !isError.value
})

function onLoad() {
  imageStatus.loaded = true
}

function onError() {
  imageStatus.error = true
}
</script>

<template>
  <div class="image-wrapper">
    <div class="image-container">
      <transition-group
          name="fade"
          appear
      >
        <img
            v-if="src"
            :src="src"
            :alt="alt"
            @load="onLoad"
            @error="onError"
        >
        <VLoader
            v-if="isLoading"
            :is-show="isLoading"
        />
        <div
            v-else-if="isError"
            class="error-load"
        >
          Ошибка загрузки
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  padding-right: 100%;
  padding-top: 100%;
  width: 0;
  height: 0;
  position: relative;
  //background: #000;
}

.image-container,
.error-load,
img {
  width: 100%;
  height: 100%;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

}

img {
  display: block;
  object-fit: cover;
  object-position: center;
}

.error-load {
  position: absolute;
  color: #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>