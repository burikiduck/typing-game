<script setup lang="ts">
import ClockBoard from '@/components/ClockBoard.vue'
import InputForm from '@/components/InputForm.vue'
import ScoreBord from '@/components/ScoreBord.vue'
import { calcScore } from '@/utils/scoreUtil';
import { getNext } from '@/utils/subjectUtil';
import { ref } from 'vue';

const isStart = ref(false)
const isFinish = ref(false)
const score = ref(0)
const subject = ref('')

subject.value = getNext()
const startGame = () => {
  isStart.value = true
}
const timeUp = () => {
  isFinish.value = true
}
const handleScore = () => {
  if (isFinish.value) return
  score.value += calcScore(subject.value)
  subject.value = getNext()
}
</script>
<template>
  <div>
    <ClockBoard :limit-count="30" :is-start="isStart" @finish="timeUp" />
    <div class="px-4 py-2">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:bg-gray-300" :disabled="isStart" @click="startGame">Start</button>
    </div>
    <h1 class="text-4xl">Your Score</h1>
    <div class="p-8">
      <ScoreBord :score="score" />
    </div>
    <div v-if="isStart">
      <div class="pb-8">
        <h2 class="text-2xl">{{ subject }}</h2>
      </div>
      <div v-if="!isFinish">
        <InputForm :subject="subject" @complete="handleScore" />
      </div>
    </div>
    <div>
      <RouterLink to="/">Quit game</RouterLink>
    </div>
  </div> 
</template>