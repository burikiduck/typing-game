<script lang="ts" setup>
import InputForm from '@/components/InputForm.vue'
import ScoreBord from '@/components/ScoreBord.vue'
import { subjectList } from '@/utils/subjectList'
import { ref } from 'vue'

const score = ref(0)
const subject = ref('')
const count = ref(0)
const isFinish = ref(false)

const getNext = () => {
  const randomIndex = Math.floor(Math.random() * subjectList.length)
  subject.value = subjectList[randomIndex]
}
const calcScore = () => {
  if (count.value < 10) {
    count.value++
    console.log(subject.value.length)
    score.value += subject.value.length * 10
    getNext()
  } else {
    isFinish.value = true
  }
}
getNext()
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
    <InputForm :subject="subject" @complete="calcScore" />
  </div>
  <div v-else>
    <h2 class="text-2xl">Finish</h2>
  </div>
  <div>
    <RouterLink to="/">Quit game</RouterLink>
  </div>
</template>