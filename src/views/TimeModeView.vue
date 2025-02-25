<script setup lang="ts">
import ClockBoard from '@/components/ClockBoard.vue'
import { ref } from 'vue';

const isStart = ref(false)
const startGame = () => {
  isStart.value = true
}
</script>
<template>
  <div>
    <ClockBoard :limit-count="30" :is-start="isStart" />
    <div class="px-4 py-2">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:bg-gray-300" :disabled="isStart" @click="startGame">Start</button>
    </div>
    <div>
      <RouterLink to="/">Quit game</RouterLink>
    </div>
  </div> 
</template>