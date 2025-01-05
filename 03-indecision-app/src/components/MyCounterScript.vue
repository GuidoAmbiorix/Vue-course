<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <!-- <h4>{{ text }}</h4> -->
  </section>

  <div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup() {
    const { counter, squareCounter } = useCounter(5);

    return {
      counter,
      squareCounter,
    };
  },
});
// import { computed, defineComponent, ref } from 'vue';

// export default defineComponent({
//   props: {
//     value: { type: Number, required: true },
//   },
//   setup(props) {
//     const counter = ref(props.value);
//     const squareCounter = computed(() => counter.value * counter.value);

//     return {
//       counter,
//       squareCounter,
//     };
//   },
// });
</script>

<!-- <script lang="ts">
import { computed, ref } from 'vue';

interface Props {
  value: number;
  text?: string;
}

const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
</script>

<style>
h1 {
  color: green;
}
</style> -->
