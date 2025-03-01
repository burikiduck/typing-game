<template>
  <div class="border-1 border-gray-300 p-4 rounded-xl mb-4">
    <div class="grid grid-cols-3 gap-4">
      <div class="">
        <slot name="title"></slot>
      </div>
      <div class="col-span-2">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>