<script setup lang="ts">
import CardInfo from '@/components/common/CardInfo.vue'
import ClockBoard from '@/components/ClockBoard.vue'
import InputForm from '@/components/InputForm.vue'
import ScoreBord from '@/components/ScoreBord.vue'
import SelectTime from '@/components/SelectTime.vue';
import { useScoreStore } from '@/stores/score';
import { calcScore } from '@/utils/scoreUtil';
import { getNext } from '@/utils/subjectUtil';
import { ref } from 'vue';
import NewRecordModal from '@/components/NewRecordModal.vue';

const isPlaying = ref(false)
const isFinish = ref(false)
const score = ref(0)
const limitCount = ref(30)
const subject = ref('')
const useScore = useScoreStore()
const isHighScore = ref(false)

subject.value = getNext()
const setTime = (time:number) => {
  console.log('setTime', time)
  limitCount.value = time
}
const startGame = () => {
  score.value = 0
  isPlaying.value = true
  isFinish.value = false
}
const timeUp = () => {
  isPlaying.value = false
  isFinish.value = true
  // スコアをStoreに保存
  const storeScore = limitCount.value === 30 ? useScore.score.mode_30 : useScore.score.mode_60
  if (storeScore < score.value) {
    // alert('New Record!')
    isHighScore.value = true
    useScore.setScore(score.value, limitCount.value)
  }
}
const handleScore = () => {
  if (isFinish.value) return
  score.value += calcScore(subject.value)
  subject.value = getNext()
}
</script>
<template>
  <div>
    <SelectTime @change-value="setTime" />
    <ClockBoard :limit-count="limitCount" :is-playing="isPlaying" @finish="timeUp" />
    <ScoreBord :score="score" />
    <CardInfo>
      <template #title>
        <h2 class="text-2xl">{{ subject }}</h2>
      </template>
      <template #content>
        <InputForm :subject="subject" :is-disabled="!isPlaying" @input-done="handleScore" />
      </template>
    </CardInfo>
    <div class="pb-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:bg-gray-300"
        :disabled="isPlaying" @click="startGame">Start</button>
    </div>
    <div class="mt-8">
      <RouterLink to="/" class="text-cyan-600 hover:text-cyan-700">Quit game</RouterLink>
    </div>
  </div> 
  <NewRecordModal :is-show="isHighScore" />
</template>