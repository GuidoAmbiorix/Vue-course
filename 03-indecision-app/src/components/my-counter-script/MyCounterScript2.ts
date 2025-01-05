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
