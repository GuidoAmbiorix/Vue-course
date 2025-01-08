<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <!-- <h4>{{ text }}</h4> -->
  </section>

  <div>
    <button class="btn" @click="counter++">+1</button>
    <button class="btn" @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const { counter, squareCounter } = useCounter(5);
</script>

<style scoped>
.btn {
  @apply p-2 m-1 bg-blue-500 hover:bg-blue-400 text-white rounded-md;
}
</style>
