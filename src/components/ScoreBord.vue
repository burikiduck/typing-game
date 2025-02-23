<script setup lang="ts">
const props = withDefaults(defineProps<{
  score: number
}>(), {
  score: 0
})
</script>
<template>
  <div>
    <h1 class="text-4xl">{{ props.score }}</h1>
  </div>
</template>