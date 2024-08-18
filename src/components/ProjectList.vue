<template>
  <div>
    <ul class="space-y-4">
      <li
        v-for="(project, index) in limitedProjects"
        :key="project.id"
        class="p-4 animate-fade-in"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <ProjectCard :project="project" class="transform transition duration-300 hover:scale-105" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  limit: {
    type: Number,
    default: 10
  }
})

const limitedProjects = computed(() => {
  return props.projects?.slice(0, props.limit) || []
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
