<script setup lang="ts">
</script>

<template>
  <main class="max-w-80 mx-auto text-center">
    <div class="py-8 mb-8">
      <h1 class="text-4xl">Typing game</h1>
    </div>
    <div class="mb-4">
      <RouterLink to="/practiceMode" class="block text-2xl text-cyan-600 hover:text-cyan-700 active:text-cyan-800 hover:bg-blue-100 rounded-2xl ">Practice mode</RouterLink>
    </div>
    <div class="mb-4">
      <RouterLink to="/timeMode" class="block text-2xl text-cyan-600 hover:text-cyan-700 active:text-cyan-800 hover:bg-blue-100 rounded-2xl ">Time mode</RouterLink>
    </div>
  </main>
</template>
