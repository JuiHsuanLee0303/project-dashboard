<template>
  <footer class="bg-gray-200 p-6 text-center animate-fade-in">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 class="text-lg font-semibold mb-2">關於我們</h3>
          <p class="text-sm">開發項目管理平台致力於提供高效、便捷的項目管理解決方案。</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">聯繫我們</h3>
          <p class="text-sm">電子郵件：info@projectmanagement.com</p>
          <p class="text-sm">電話：+886 123 456 789</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">快速鏈接</h3>
          <ul class="text-sm">
            <li>
              <a href="#" class="hover:text-green-600 transition-colors duration-300">首頁</a>
            </li>
            <li>
              <a href="#" class="hover:text-green-600 transition-colors duration-300">項目概覽</a>
            </li>
            <li>
              <a href="#" class="hover:text-green-600 transition-colors duration-300">進度追蹤</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-6 pt-4 border-t border-gray-300">
        <p class="text-sm hover:text-green-600 transition-colors duration-300">
          &copy; 2023 開發項目管理平台. 保留所有權利。
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

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
  animation: fadeIn 0.5s ease-out;
}
</style>
