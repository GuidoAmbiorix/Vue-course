import {
  defineComponent,
  onActivated,
  onBeforeMount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

export default defineComponent({
  setup: () => {
    const counter = ref(0);
    onMounted(() => {
      console.log('onMounted');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });

    return {
      counter,
    };
  },
});
