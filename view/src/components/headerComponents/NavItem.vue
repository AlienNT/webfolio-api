<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";

const props = defineProps({
  navItem: {
    type: Object
  }
})

const title = computed(() => {
  return props.navItem?.title
})

const name = computed(() => {
  return props.navItem?.name
})

const path = computed(() => {
  return props.navItem?.path
})

const route = useRoute()

const isActive = computed(() => {
  return path.value === route.path
})

</script>

<template>
  <div class="navigation-item" :class="isActive && 'active'">
    <router-link
        :to="path"
        class="navigation-item__link"
        :aria-label="name"
        :title="name"
    >
      {{ title }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
$linkColor: #939393;
$linkActiveColor: #fff;
.navigation-item {
  display: flex;
  height: 100%;
}

.navigation-item__link {
  height: 100%;
  color: $linkColor;
  padding: 5px 5px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  transition: .2s ease;

  .active & {
    color: $linkActiveColor;
    border-bottom-color: $linkActiveColor;
  }
}
</style>