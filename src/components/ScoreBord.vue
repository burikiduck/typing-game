<script setup lang="ts">
import CardInfo from './common/CardInfo.vue';

const props = withDefaults(defineProps<{
  score: number
}>(), {
  score: 0
})
</script>
<template>
  <CardInfo>
    <template #title>
      <h1 class="text-4xl">Your Score</h1>
    </template>
    <template #content>
      <h1 class="text-4xl">{{ props.score }}</h1>
    </template>
  </CardInfo>
  <div>
  </div>
</template>