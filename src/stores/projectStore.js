import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('projectStore', () => {
  const projects = ref([])
  const selectedProject = ref(null)
  const activeProjects = ref(0)
  const completedProjects = ref(0)
  const totalProjects = ref(0)
  const languages = ref([
    { name: 'JavaScript', count: 0, color: 'bg-indigo-700', textColor: 'text-indigo-700' },
    { name: 'Python', count: 0, color: 'bg-purple-700', textColor: 'text-purple-700' },
    { name: 'Java', count: 0, color: 'bg-blue-700', textColor: 'text-blue-700' },
    { name: 'C++', count: 0, color: 'bg-teal-700', textColor: 'text-teal-700' },
    { name: 'Other', count: 0, color: 'bg-gray-700', textColor: 'text-gray-700' }
  ])
  const overallProgress = ref(0)
  const completedTasks = ref(0)
  const remainingTasks = ref(0)

  const fetchProjects = () => {
    // 模擬 API 呼叫來獲取專案列表
    projects.value = [
      {
        id: 1,
        name: '專案A',
        description: '這是專案A的描述',
        startDate: '2023-05-01',
        status: '進行中'
      },
      {
        id: 2,
        name: '專案B',
        description: '這是專案B的描述',
        startDate: '2023-04-15',
        status: '已完成'
      },
      {
        id: 3,
        name: '專案C',
        description: '這是專案C的描述',
        startDate: '2023-05-10',
        status: '計劃中'
      },
      {
        id: 4,
        name: '專案D',
        description: '這是專案D的描述',
        startDate: '2023-03-20',
        status: '暫停'
      }
    ]
    updateProjectStats()
  }

  const selectProject = (id) => {
    selectedProject.value = projects.value.find((project) => project.id === id)
  }

  const updateProjectStats = () => {
    activeProjects.value = projects.value.filter((project) => project.status === '進行中').length
    completedProjects.value = projects.value.filter((project) => project.status === '已完成').length
    totalProjects.value = projects.value.length
    languages.value[0].count = 8
    languages.value[1].count = 5
    languages.value[2].count = 3
    languages.value[3].count = 2
    languages.value[4].count = 2
    overallProgress.value = 65
    completedTasks.value = 87
    remainingTasks.value = 34
  }

  return {
    projects,
    selectedProject,
    activeProjects,
    completedProjects,
    totalProjects,
    languages,
    overallProgress,
    completedTasks,
    remainingTasks,
    fetchProjects,
    selectProject,
    updateProjectStats
  }
})
