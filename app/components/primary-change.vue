<script setup lang="ts">
const colorCookie = useCookie<string>('primary_color')

function setPrimaryColor(color: string) {
  updateAppConfig({
    ui: {
      colors: {
        primary: color,
      },
    },
  })
  colorCookie.value = color
}
</script>

<template>
  <UButtonGroup orientation="horizontal">
    <UButton label="Blue" class="bg-blue-600 text-white hover:bg-blue-700" @click="setPrimaryColor('blue')" />
    <UButton label="Pink" class="bg-pink-600 text-white hover:bg-pink-700" @click="setPrimaryColor('pink')" />
    <UButton label="Green" class="bg-green-600 text-white hover:bg-green-700" @click="setPrimaryColor('green')" />
  </UButtonGroup>
</template>
