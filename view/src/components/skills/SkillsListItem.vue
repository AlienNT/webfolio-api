<script setup>
import {computed} from "vue";
import VImage from "@/components/UI/VImage.vue";
import VButton from "@/components/UI/VButton.vue";

const props = defineProps({
  skillData: {
    type: Object,
    default: null
  }
})
const emit = defineEmits([
  'onClick',
  'onEdit',
  'onDelete'
])

const id = computed(() => {
  return props.skillData?._id
})

const active = computed(() => {
  return props.skillData?.active
})

const image = computed(() => {
  return props.skillData?.image
})

const title = computed(() => {
  return props.skillData?.title
})

</script>

<template>
  <li class="skills-list-item">
    <div
        class="item-wrapper"
        :class="active ? 'active': ''"
        @click="emit('onClick', id)"
    >
      <VImage
          :src="image"
          :alt="title"
          :title="title"
      />
      <div class="buttons-wrapper">
        <VButton
            custom-class="edit-button"
            @click.stop="emit('onEdit', id)"
        />
        <VButton
            custom-class="delete-button"
            @click.stop="emit('onDelete', id)"
        />
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
$editBGColor: green;
$deleteBGColor: red;

.skills-list-item {
  flex: 0 0 10%;
  padding: 10px;
  min-width: 100px;
}

.item-wrapper {
  position: relative;
  cursor: pointer;
  padding: 10px;
  overflow: hidden;
  border-radius: 15px;
  border: 3px solid rgba(0, 0, 0, 0.5);

  &:hover {
    .buttons-wrapper {
      display: flex;
    }
  }
}

.active {
  border-color: rgba(100, 149, 237, 0.63);
}

.buttons-wrapper {
  transition: .2s ease;
  width: 100%;
  height: 100%;
  gap: 10px;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  justify-content: flex-end;

  .active & {
    background: rgba(100, 149, 237, 0.3);
  }
}

.edit-button,
.delete-button {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 0;
  padding: 2px;
  transition: .2s ease;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background: #FFFFFF;
  }
}

.edit-button {
  background: $editBGColor;

  &:hover {
    background: darken($editBGColor, 5%);
  }

  &:after {
    mask-image: url("../../../assets/images/edit-1-svgrepo-com.svg");
  }
}

.delete-button {
  background: $deleteBGColor;

  &:hover {
    background: darken($deleteBGColor, 10%);
  }

  &:after {
    mask-image: url("../../../assets/images/delete-2-svgrepo-com.svg");
  }
}
</style>