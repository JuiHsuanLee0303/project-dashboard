<template>
  <div class="progress-dashboard">
    <h2 class="text-2xl font-bold mb-4 animate-fade-in">進度儀表板</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
      >
        <h3 class="text-lg font-semibold mb-2">總體進度</h3>
        <div class="relative pt-1">
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
            <div
              :style="{ width: `${overallProgress}%` }"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-1000 ease-out"
            ></div>
          </div>
          <div class="text-right">
            <span class="text-sm font-semibold inline-block text-green-600 animate-number">
              {{ overallProgress }}%
            </span>
          </div>
        </div>
      </div>
      <div
        class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
      >
        <h3 class="text-lg font-semibold mb-2">已完成任務</h3>
        <p class="text-3xl font-bold text-blue-500 animate-number">{{ completedTasks }}</p>
      </div>
      <div
        class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
      >
        <h3 class="text-lg font-semibold mb-2">剩餘任務</h3>
        <p class="text-3xl font-bold text-orange-500 animate-number">{{ remainingTasks }}</p>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4 animate-fade-in">項目進度詳情</h3>
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="mb-4 animate-slide-up"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <h4 class="text-lg font-medium mb-2">{{ project.name }}</h4>
        <div class="relative pt-1">
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              :style="{ width: `${project.progress}%` }"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-1000 ease-out"
            ></div>
          </div>
          <div class="text-right">
            <span class="text-sm font-semibold inline-block text-blue-600 animate-number">
              {{ project.progress }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProjectStore } from '@/stores/projectStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const projectStore = useProjectStore()
const { overallProgress, completedTasks, remainingTasks, projects } = storeToRefs(projectStore)

onMounted(() => {
  projectStore.fetchProjects()
})
</script>

<style scoped>
.progress-dashboard {
  @apply bg-gray-100 p-6 rounded-lg shadow-md;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes numberAnimation {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

.animate-number {
  animation: numberAnimation 0.8s ease-out;
}
</style>
