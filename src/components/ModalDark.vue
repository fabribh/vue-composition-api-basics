<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="handleButtonClick">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup >

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No tile specified'
    }
})

const emit = defineEmits(['update:modelValue'])

const handleButtonClick = () => {
    emit('update:modelValue', false)
}

</script>

<style scoped>
.modal-dark {
    background: #333;
    color: #fff;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>