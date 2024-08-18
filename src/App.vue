<script setup>
import { RouterView } from 'vue-router'
import 'tailwindcss/tailwind.css'
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'
import { useI18n } from 'vue-i18n'
useI18n()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavigationBar />
    <main class="container mx-auto px-4 py-8 flex-grow">
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>

<style>
/* 全局样式可以在这里添加 */
</style>
