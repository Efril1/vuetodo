<script setup lang="ts">
import { onMounted } from 'vue'

useHead({
  title: 'todo List',
})

const colorCookie = useCookie<string>('primary_color')

onMounted(() => {
  if (colorCookie.value) {
    updateAppConfig({
      ui: {
        colors: {
          primary: colorCookie.value,
        },
      },
    })
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
