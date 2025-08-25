<script setup lang="ts">
import { updateAppConfig } from '#app'

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
    <UButton label="Blue" color="blue" @click="setPrimaryColor('blue')" />
    <UButton label="Pink" color="pink" @click="setPrimaryColor('pink')" />
    <UButton label="Green" color="green" @click="setPrimaryColor('green')" />
  </UButtonGroup>
</template>
