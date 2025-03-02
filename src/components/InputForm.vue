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
// 入力完了
watchEffect(() => {
  if (props.subject != '' && text.value === props.subject) {
    text.value = ''
    emit('inputDone')
  }
})
// props.isDisabledの値が変わったらdisabledの値を変更
watch(() => props.isDisabled, () => {
  disabled.value = props.isDisabled
  if (props.isDisabled) {
    text.value = ''
  } else {
    setTimeout(() => {
      document.getElementById('input-form')?.focus()
    }, 0)
  }
})
</script>
<template>
  <input
    id="input-form"
    v-model="text"
    class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none disabled:bg-gray-300"
    :disabled="disabled"
    type="text" />
</template>