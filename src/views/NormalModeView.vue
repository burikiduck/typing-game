<script lang="ts" setup>
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
  <h1 class="text-4xl">Your Score</h1>
  <div class="p-8">
    <ScoreBord :score="score" />
  </div>
  <div class="pb-8">
    <h2 class="text-2xl">{{ subject }}</h2>
  </div>
  <div v-if="!isFinish">
    <InputForm :subject="subject" @complete="handleScore" />
  </div>
  <div v-else>
    <h2 class="text-2xl">Finish</h2>
  </div>
  <div>
    <RouterLink to="/">Quit game</RouterLink>
  </div>
</template>