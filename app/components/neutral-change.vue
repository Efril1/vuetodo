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
    <UButton label="Stone" color="stone" @click="setNeutralToColor('stone')" />
    <UButton label="Zinc" color="zinc" @click="setNeutralToColor('zinc')" />
    <UButton label="Gray" color="gray" @click="setNeutralToColor('gray')" />
  </UButtonGroup>
</template>
