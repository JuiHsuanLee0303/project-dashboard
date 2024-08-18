<template>
  <div class="max-w-3xl mx-auto px-5">
    <h1 class="text-4xl font-bold mb-5 text-center animate-fade-in">{{ $t('homePage.title') }}</h1>
    <p class="text-lg mb-8 text-center animate-slide-up">
      {{ $t('homePage.welcome') }}
    </p>

    <div class="flex justify-around mb-10 animate-bounce-in">
      <RouterLink
        to="/projects"
        class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 transform hover:scale-105"
        >{{ $t('homePage.viewAllProjects') }}</RouterLink
      >
      <RouterLink
        to="/progress"
        class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 transform hover:scale-105"
        >{{ $t('homePage.progressTracking') }}</RouterLink
      >
    </div>

    <div class="mt-12 animate-fade-in">
      <h2 class="text-2xl font-semibold mb-4">{{ $t('homePage.recentlyUpdatedProjects') }}</h2>
      <ProjectList :limit="2" :projects="projects" />
    </div>

    <div class="mt-12 animate-fade-in">
      <h2 class="text-2xl font-semibold mb-4">{{ $t('homePage.projectOverview') }}</h2>
      <ProjectOverview />
    </div>

    <div class="mt-12 animate-fade-in">
      <h2 class="text-2xl font-semibold mb-4">{{ $t('homePage.progressDashboard') }}</h2>
      <ProgressDashboard />
    </div>
  </div>
</template>

<script setup>
import { useProjectStore } from '@/stores/projectStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import ProjectList from '../components/ProjectList.vue'
import ProjectOverview from '../components/ProjectOverview.vue'
import ProgressDashboard from '../components/ProgressDashboard.vue'

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)

onMounted(() => {
  projectStore.fetchProjects()
})
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

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-bounce-in {
  animation: bounceIn 0.8s ease-out;
}
</style>
