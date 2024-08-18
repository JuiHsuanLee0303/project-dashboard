<template>
  <div class="project-overview">
    <h2 class="text-2xl font-bold mb-4 animate-fade-in">項目總覽</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
      >
        <h3 class="text-lg font-semibold mb-2">進行中的項目</h3>
        <p class="text-3xl font-bold text-green-500 animate-number">{{ activeProjects }}</p>
      </div>
      <div
        class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
      >
        <h3 class="text-lg font-semibold mb-2">已完成的項目</h3>
        <p class="text-3xl font-bold text-blue-500 animate-number">{{ completedProjects }}</p>
      </div>
      <div
        class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
      >
        <h3 class="text-lg font-semibold mb-2">總項目數</h3>
        <p class="text-3xl font-bold text-purple-500 animate-number">{{ totalProjects }}</p>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4 animate-fade-in">專案使用語言分布</h3>
      <div class="bg-white p-4 rounded shadow">
        <div class="bg-gray-200 h-6 rounded-full overflow-hidden mb-4">
          <div
            v-for="language in languages"
            :key="language.name"
            class="h-full inline-block transition-all duration-1000 ease-out"
            :class="language.color"
            :style="{ width: `${(language.count / totalProjects) * 100}%` }"
          ></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <div v-for="language in languages" :key="language.name" class="flex items-center">
            <span :class="[language.color, 'w-3 h-3 rounded-full mr-2']"></span>
            <span :class="language.textColor">
              {{ language.name }}: {{ ((language.count / totalProjects) * 100).toFixed(1) }}%
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
const { activeProjects, completedProjects, totalProjects, languages } = storeToRefs(projectStore)

onMounted(() => {
  projectStore.fetchProjects()
})
</script>

<style scoped>
.project-overview {
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

.animate-number {
  animation: numberAnimation 0.8s ease-out;
}
</style>
