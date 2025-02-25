<script setup lang="ts">
import { ref } from 'vue'

const DEFAULT_LIMIT_COUNT = 30
const props = withDefaults(defineProps<{
  limitCount: number
  isStart: boolean
}>(), {
  limitCount: DEFAULT_LIMIT_COUNT,
  isStart: false
})
const count = ref(props.limitCount)
const isFinish = ref(false)
const timeCount = setInterval(() => {
  console.log(count.value)
  if (props.isStart) {
    if (count.value > 0) {
      count.value--
    } else {
      isFinish.value = true
      clearInterval(timeCount)
    }
  }
}, 1000)
</script>
<template>
  <h1 class="text-4xl">Time Left</h1>
  <div v-if="isFinish" class="px-8 py-2">
    <h2 class="text-2xl">Finish!!</h2>
  </div>
  <div v-else class="px-8 py-2">
    <h2 class="text-2xl">{{ count }}</h2>
  </div>
</template>
