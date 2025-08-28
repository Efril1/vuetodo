import process from 'node:process'
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'green',
        'blue',
        'pink',
        'info',
        'success',
        'warning',
        'error',
        'stone',
        'gray',
        'zinc',
      ],
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      TODO_PREFIX: process.env.NUXT_PUBLIC_TODO_PREFIX || 'todos-',
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/ui'],
})
