<template>
  <div>
    <textarea
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value ?? '')"
      @blur="$emit('blur')"
      class="form-control"
      :class="[
        'form-control shadow h-32 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        { 'border-red-500': error },
      ]"
    ></textarea>
    <span class="text-red-500 capitalize" v-if="error">{{ error }}</span>
  </div>
</template>

<style scoped>
.form-control {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>

<script setup lang="ts">
interface Props {
  modelValue?: string;
  error?: string;
  type?: 'text';
}

withDefaults(defineProps<Props>(), {
  type: 'text',
});

defineEmits(['update:modelValue', 'blur']);
</script>
