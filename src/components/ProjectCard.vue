<template>
  <router-link
    v-if="project.id"
    :to="{ name: 'projectDetail', params: { id: project.id } }"
    class="block bg-white shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
  >
    <h2 class="text-2xl font-semibold mb-3 animate-fade-in">{{ project.name }}</h2>
    <p class="text-gray-600 mb-4 animate-slide-up">{{ project.description }}</p>
    <div class="flex justify-between items-center animate-fade-in">
      <span class="text-sm text-gray-500">開始日期: {{ project.startDate }}</span>
      <span
        class="text-sm font-semibold px-2 py-1 rounded-full"
        :class="getStatusColor(project.status)"
      >
        {{ project.status }}
      </span>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  project: {
    type: Object,
    required: true
  }
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

.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}
</style>
