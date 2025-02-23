<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = withDefaults(defineProps<{
  subject: string
}>(), {
  subject: ''
})
const emit = defineEmits<{
  complete: [void]
}>()
const text = ref('')
watchEffect(() => {
  if (props.subject != '' && text.value === props.subject) {
    text.value = ''
    emit('complete')
  }
})
</script>
<template>
  <input v-model="text" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" type="text" />
</template>