<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(project, index) in projectsStore.projectsWithCompletion"
          :key="project.id"
          class="hover"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.taskCount }}</td>
          <td>
            <progress
              class="progress progress-secondary w-56"
              :value="project.completion"
              max="100"
            ></progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <InputModal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectsStore.addProject"
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo proyecto"
  />

  <CustomModal :open="customModalOpen">
    <template #header>
      <h1 class="text-xl">Titulo del modal</h1>
    </template>

    <template #body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque eaque animi
        odit debitis mollitia sed, nihil aliquid ea in alias optio porro labore? Sunt at quisquam
        voluptas qui delectus!
      </p>
    </template>

    <template #actions>
      <div class="flex justify-end">
        <button @click="customModalOpen = false" class="btn mr-3">Close</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </CustomModal>

  <FapButton @click="modalOpen = true">
    <AddCircle @click="() => console.log('click')" />
  </FapButton>

  <FapButton @click="customModalOpen = true" position="bottom-left">
    <AlignVertical @click="() => console.log('click')" />
  </FapButton>
</template>

<script lang="ts" setup>
import FapButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import AlignVertical from '@/modules/common/icons/AlignVertical.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>
