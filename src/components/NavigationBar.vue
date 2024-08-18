<template>
  <header
    class="bg-green-600 text-white shadow-md top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
  >
    <nav class="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
      <div class="w-full md:w-fit flex items-center justify-between">
        <RouterLink
          to="/"
          class="text-2xl font-bold hover:text-green-200 transition duration-300 transform hover:scale-105 md:mb-0"
          >{{ $t('navigation.title') }}</RouterLink
        >
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-screen"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-screen"
        leave-to-class="opacity-0 max-h-0"
      >
        <div
          v-show="isMenuOpen || !isMobile"
          :class="[
            'flex',
            'md:flex',
            'flex-col',
            'mt-4',
            'md:mt-0',
            'md:flex-row',
            'md:space-y-0',
            'md:space-x-6',
            'overflow-hidden'
          ]"
        >
          <RouterLink
            to="/"
            class="hover:text-green-200 transition duration-300 text-lg relative overflow-hidden nav-link"
            @click="closeMenu"
          >
            {{ $t('navigation.home') }}
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"
            ></span>
          </RouterLink>
          <RouterLink
            to="/projects"
            class="hover:text-green-200 transition duration-300 text-lg relative overflow-hidden nav-link"
            @click="closeMenu"
          >
            {{ $t('navigation.overview') }}
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"
            ></span>
          </RouterLink>
          <RouterLink
            to="/progress"
            class="hover:text-green-200 transition duration-300 text-lg relative overflow-hidden nav-link"
            @click="closeMenu"
          >
            {{ $t('navigation.progress') }}
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"
            ></span>
          </RouterLink>
          <button
            @click="showModal = true"
            class="hover:text-green-200 transition duration-300 text-lg relative overflow-hidden nav-link"
          >
            {{ $t('navigation.switch') }}
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"
            ></span>
          </button>
        </div>
      </transition>
    </nav>
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showModal = false"
    >
      <transition name="modal">
        <div
          v-if="showModal"
          class="bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 ease-out max-w-md w-full mx-4"
        >
          <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">選擇語言</h2>
          <div class="space-y-4">
            <button
              v-for="(lang, index) in languages"
              :key="index"
              @click="changeLanguage(lang.code)"
              class="w-full text-left px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-between"
            >
              <span>{{ lang.name }}</span>
              <span v-if="locale === lang.code" class="text-green-500">✓</span>
            </button>
          </div>
          <div class="mt-8 flex justify-end">
            <button
              @click="showModal = false"
              class="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              取消
            </button>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const showModal = ref(false)
const isMenuOpen = ref(false)
const isMobile = ref(false)

const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' }
]

const changeLanguage = (lang) => {
  locale.value = lang
  showModal.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

header {
  animation: fadeIn 0.5s ease-out;
}

nav {
  transition: all 0.3s ease;
}

.router-link-active {
  border-bottom: 2px solid white;
}

.router-link-active span {
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.modal-enter-active,
.modal-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 768px) {
  nav {
    text-align: center;
  }

  .nav-link {
    margin-bottom: 10px;
  }
}
</style>
