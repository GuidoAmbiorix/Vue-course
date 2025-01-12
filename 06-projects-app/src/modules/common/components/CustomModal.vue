<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <div class="border-b border-b-blue-500">
        <!--Header-->

        <slot name="header" />
      </div>

      <div class="my-5">
        <slot name="body" />
      </div>

      <div class="border-t border-t-blue-500 pt-2">
        <slot name="actions" />
      </div>
    </div>
  </dialog>

  <div
    class="modal-backdrop fixed top-0 left-0 z-0 bg-black opacity-30 w-screen h-screen"
    v-if="open"
  ></div>
</template>

<script lang="ts" setup>
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), { open: false });
</script>
