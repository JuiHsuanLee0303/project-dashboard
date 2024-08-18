<template>
  <div class="max-w-3xl mx-auto px-5">
    <h1 class="text-4xl font-bold mb-8 animate-fade-in">项目进度跟踪</h1>
    <div class="space-y-6">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg animate-slide-up"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <h2 class="text-2xl font-semibold mb-4 text-green-600">{{ project.name }}</h2>
        <div class="mb-4">
          <h3 class="text-lg font-medium mb-2 text-blue-500">组件:</h3>
          <ul class="list-disc list-inside">
            <li
              v-for="component in project.components"
              :key="component"
              class="transition-all duration-200 hover:translate-x-2"
            >
              {{ component }}
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <h3 class="text-lg font-medium mb-2 text-blue-500">依赖:</h3>
          <ul class="list-disc list-inside">
            <li
              v-for="dependency in project.dependencies"
              :key="dependency"
              class="transition-all duration-200 hover:translate-x-2"
            >
              {{ dependency }}
            </li>
          </ul>
        </div>
        <div class="text-sm text-gray-500 animate-pulse">最后更新: {{ project.lastUpdated }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: '项目A',
    components: ['前端', '后端', '数据库'],
    dependencies: ['Vue.js', 'Node.js', 'MongoDB'],
    lastUpdated: '2023-05-15'
  },
  {
    id: 2,
    name: '项目B',
    components: ['移动应用', '服务器', 'API'],
    dependencies: ['React Native', 'Express.js', 'PostgreSQL'],
    lastUpdated: '2023-05-14'
  },
  {
    id: 3,
    name: '项目C',
    components: ['微服务', '消息队列', '缓存'],
    dependencies: ['Spring Boot', 'RabbitMQ', 'Redis'],
    lastUpdated: '2023-05-13'
  }
])
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
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
