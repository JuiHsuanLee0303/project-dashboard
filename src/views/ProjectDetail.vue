<template>
  <div class="max-w-3xl mx-auto px-5 animate-fade-in" v-if="project">
    <h1 class="text-4xl font-bold mb-8 animate-slide-down">{{ project.name }}</h1>
    <div
      class="bg-white shadow-md rounded-lg p-6 transform transition duration-300 hover:shadow-lg"
    >
      <p class="text-gray-600 mb-4 animate-fade-in">{{ project.description }}</p>
      <div class="flex justify-between items-center mb-4 animate-fade-in">
        <span class="text-sm text-gray-500">開始日期: {{ project.startDate }}</span>
        <span
          class="text-sm font-semibold px-2 py-1 rounded-full"
          :class="getStatusColor(project.status)"
        >
          {{ project.status }}
        </span>
      </div>
      <div class="mb-4 animate-slide-up">
        <h2 class="text-2xl font-semibold mb-2">項目進度</h2>
        <div class="bg-gray-300 h-5 rounded-full overflow-hidden">
          <div
            class="bg-green-500 h-full transition-all duration-1000 ease-out"
            :style="{ width: overallProgress + '%' }"
          ></div>
        </div>
        <p class="text-lg mt-2">進度: {{ overallProgress }}%</p>
      </div>
      <div class="mb-4 animate-slide-up" style="animation-delay: 200ms">
        <h2 class="text-2xl font-semibold mb-2">項目成員</h2>
        <ul class="list-disc list-inside">
          <li
            v-for="(member, index) in project.members"
            :key="member"
            class="transition-all duration-300 hover:translate-x-2"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            {{ member }}
          </li>
        </ul>
      </div>
      <div class="animate-slide-up" style="animation-delay: 400ms">
        <h2 class="text-2xl font-semibold mb-2">任務統計</h2>
        <p>已完成任務: {{ completedTasks }}</p>
        <p>剩餘任務: {{ remainingTasks }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProjectStore } from '@/stores/projectStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const projectStore = useProjectStore()
const {
  selectedProject: project,
  overallProgress,
  completedTasks,
  remainingTasks
} = storeToRefs(projectStore)
const route = useRoute()

onMounted(() => {
  projectStore.selectProject(Number(route.params.id))
})

const getStatusColor = (status) => {
  switch (status) {
    case '進行中':
      return 'bg-blue-100 text-blue-600'
    case '已完成':
      return 'bg-green-100 text-green-600'
    case '計劃中':
      return 'bg-yellow-100 text-yellow-600'
    case '暫停':
      return 'bg-red-100 text-red-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
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

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-down {
  animation: slideDown 0.5s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}
</style>
