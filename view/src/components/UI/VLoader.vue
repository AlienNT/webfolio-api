<script setup>
defineProps({
  isShow: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <transition
      name="fade"
      appear
  >
    <div
        v-if="isShow"
        class="preloader"
    />
  </transition>
</template>

<style scoped lang="scss">
$firstColor: #c7c6c6;
$secondColor: #eeeded;
.preloader {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: absolute;
  //background: rgb(131, 58, 180);
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  background: linear-gradient(90deg, $firstColor 0%, $firstColor 5%, $secondColor 50%, $firstColor 95%, $firstColor 100%);
  background-size: 200%;
  animation-name: preloaderGradient;
  backdrop-filter: blur(8px);
}

.preloader__item {
  display: inline-block;

  color: #868686;
}

@for $i from 1 through 10 {
  .preloader__item {
    &:nth-child(#{$i}) {
      animation-delay: calc($i * (1s / 30))
    }
  }
}

@keyframes preloaderPulse {
  0%, 20%, 100% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(20%);
    color: #FFFFFF;
  }
}

@keyframes preloaderGradient {
  0% {
    background-position: 150% 0;
  }
  100% {
    background-position: -50% 0;
  }
}
</style>