import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

const messages = {
  en,
  zh
}

const i18n = createI18n({
  legacy: false, // 禁用 legacy 模式
  locale: 'zh', // 設置默認語言
  fallbackLocale: 'en', // 設置回退語言
  messages
})

// 增加切換語言函數
export function changeLanguage(lang) {
  i18n.global.locale.value = lang
}

export default i18n
