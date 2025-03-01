import { defineStore } from "pinia";
import { ref } from "vue";

export const useScoreStore = defineStore('high-score', () => {
  type Score = {
    mode_30: number
    mode_60: number
  }
  const score = ref<Score>({
    mode_30: 0,
    mode_60: 0
  })
  function setScore(newScore: number, limit: number) {
    if (limit === 30) {
      score.value.mode_30 = newScore
    } else if (limit === 60) {
      score.value.mode_60 = newScore
    }
  }

  return { score, setScore }
},
{
  persist: true
})