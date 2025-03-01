<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'

const props = withDefaults(defineProps<{
  subject: string
  isDisabled: boolean
}>(), {
  subject: '',
  isDisabled: false
})
const emit = defineEmits<{
  inputDone: [void]
}>()
const text = ref('')
const disabled = ref(props.isDisabled)
watchEffect(() => {
  if (props.subject != '' && text.value === props.subject) {
    text.value = ''
    emit('inputDone')
  }
})
watch(() => props.isDisabled, () => {
  disabled.value = props.isDisabled
  text.value = ''
})
</script>
<template>
  <input
    v-model="text"
    class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none disabled:bg-gray-300"
    :disabled="disabled"
    type="text" />
</template>