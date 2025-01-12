<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-4">{{ subtitle ?? '' }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder ?? 'Ingrese un valor'"
            class="input input-bordered input-primary w-full flex-1"
            v-model="inputValue"
          />

          <div class="flex justify-end mt-5">
            <button class="btn mr-3" @click="$emit('close')">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div
    class="modal-backdrop fixed top-0 left-0 z-0 bg-black opacity-30 w-screen h-screen"
    v-if="open"
  ></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  open: boolean;
  placeholder?: string;
  title: string;
  subtitle?: string;
}

defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

const submitValue = () => {
  if (!inputValue.value.trim()) {
    inputRef.value?.focus();
    return;
  }

  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
};
</script>
