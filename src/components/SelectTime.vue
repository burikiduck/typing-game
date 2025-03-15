<script setup lang="ts">
import { ref } from 'vue'
import CardInfo from './common/CardInfo.vue';

const timeOptions = ref(30)
const emit = defineEmits<{
  changeValue: [number]
}>()
</script>
<template>
  <CardInfo>
    <template #title>
      <h1 class="text-4xl">Select Time</h1>
    </template>
    <template #content>
      <div class="py-4">
        <input id="sec-30" v-model="timeOptions" type="radio" name="time" value="30" class="mr-2" @change="emit('changeValue', 30)" />
        <label for="sec-30" class="ml-2 cursor-not-allowed mr-8">30 sec</label>
        <input id="sec-60" v-model="timeOptions" type="radio" name="time" value="60" class="mr-2" @change="emit('changeValue', 60)" />
        <label for="sec-60" class="ml-2 cursor-not-allowed">60 sec</label>
      </div>
    </template>
  </CardInfo>
</template>