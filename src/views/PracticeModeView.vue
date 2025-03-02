<script lang="ts" setup>
import CardInfo from '@/components/common/CardInfo.vue'
import InputForm from '@/components/InputForm.vue'
import ScoreBord from '@/components/ScoreBord.vue'
import { calcScore } from '@/utils/scoreUtil'
import { getNext } from '@/utils/subjectUtil'
import { ref } from 'vue'

const score = ref(0)
const subject = ref('')
const count = ref(0)
const isFinish = ref(false)
const LIMIT_COUNT = 10

subject.value = getNext()
const handleScore = () => {
  if (count.value < LIMIT_COUNT) {
    count.value++
    score.value += calcScore(subject.value)
    subject.value = getNext()
  } else {
    isFinish.value = true
  }
}
</script>
<template>
  <ScoreBord :score="score" />
  <CardInfo>
    <template #title>
      <h2 class="text-2xl">{{ subject }}</h2>
    </template>
    <template #content>
      <InputForm :subject="subject" :is-disabled="isFinish" @input-done="handleScore" />
    </template>
  </CardInfo>
  <div v-if="isFinish" class="mt-8">
    <h2 class="text-2xl">Now, let's challenge ourselves in the real test!</h2>
  </div>
  <div class="mt-8">
    <RouterLink to="/" class="text-cyan-600 hover:text-cyan-700">Quit practice</RouterLink>
  </div>
</template>