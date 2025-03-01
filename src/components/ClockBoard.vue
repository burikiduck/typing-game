<script setup lang="ts">
import { ref, watch } from 'vue'
import CardInfo from './common/CardInfo.vue';

const DEFAULT_LIMIT_COUNT = 30
const props = withDefaults(defineProps<{
  limitCount: number
  isPlaying: boolean
}>(), {
  limitCount: DEFAULT_LIMIT_COUNT,
  isPlaying: false
})
const count = ref(props.limitCount)
const isFinish = ref(props.isPlaying)
function timerStart() {
  const timeCount = setInterval(() => {
    if (count.value > 0) {
      count.value--
    } else {
      isFinish.value = true
      clearInterval(timeCount)
      emit('finish')
    }
  }, 1000)
}
const emit = defineEmits<{
  finish: [void]
}>()
// 制限時間に変更があった場合、カウントを変更する
watch(() => props.limitCount, (newVal) => {
  count.value = newVal
  isFinish.value = false
})
// ゲームが開始された場合、終了フラグをfalseにする
watch(() => props.isPlaying, (newVal, oldVal) => {
  if (newVal && !oldVal) {
    count.value = props.limitCount
    isFinish.value = false
    timerStart()
  }
})
</script>
<template>
  <CardInfo>
    <template #title>
      <div v-if="isFinish" class="py-2">
        <h1 class="text-4xl">Finish!!</h1>
      </div>
      <div v-else class="py-2">
        <h1 class="text-4xl">Time Left</h1>
      </div>
    </template>
    <template #content>
      <div v-if="isFinish" class="py-4">
        <h2 class="text-2xl">Time up!</h2>
      </div>
      <div v-else class="py-4">
        <h2 class="text-2xl">{{ count }}&nbsp;sec</h2>
      </div>
    </template>
  </CardInfo>
</template>
