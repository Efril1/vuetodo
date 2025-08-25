<script setup lang="ts">
import { updateAppConfig } from '#app'

const neutralCookie = useCookie<string>('neutral_color')

function setNeutralToColor(color: string) {
  updateAppConfig({
    ui: {
      colors: {
        neutral: color,
      },
    },
  })
  neutralCookie.value = color
}
</script>

<template>
  <UButtonGroup orientation="horizontal">
    <UButton label="Stone" @click="setNeutralToColor('stone')" />
    <UButton label="Zinc" @click="setNeutralToColor('zinc')" />
    <UButton label="Gray" @click="setNeutralToColor('gray')" />
  </UButtonGroup>
</template>
