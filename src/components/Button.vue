<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'ButtonOption',
})

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<template>
  <div class="flex gap-4 items-center">
    <button class="bg-red-500 w-10 h-10" @click="increment">+</button>
    <div><input class="w-5" type="text" v-model="count" /></div>
    <button class="bg-green-500 w-10 h-10" @click="decrement">-</button>
  </div>
</template>
