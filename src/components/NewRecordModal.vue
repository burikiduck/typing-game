<script setup lang="ts">
const particleOptions = {
  particles: {
    number: { value: 50 },
    shape: { type: "circle" },
    size: { value: 5 },
    move: { enable: true, speed: 5 },
    opacity: { value: 0.7 },
    color: { value: ["#f00", "#ff0", "#0f0", "#00f"] },
  }
}
const emit = defineEmits<{
  closeModal: [void]
}>()
</script>
<template>
  <vue-particles id="tsparticles" :options="particleOptions" />
  <transition name="modal" appear>
    <div class="fixed inset-0 flex items-center justify-center modal-overlay" @click="emit('closeModal')">
      <div class="bg-white p-8 rounded-lg modal-content" @click.stop>
        <h1 class="text-2xl text-center p-4">New High Score!🏆</h1>
        <p class="py-4">You just broke your own record. Keep it up!</p>
        <div class="flex justify-end pt-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:bg-gray-300"
            @click="emit('closeModal')">Close</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  animation: fadeInScale 0.5s ease-out;
}
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>