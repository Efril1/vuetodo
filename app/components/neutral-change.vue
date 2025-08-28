<script setup lang="ts">
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
const config = useAppConfig()
config.ui.colors.primary = 'red'
</script>

<template>
  <UButtonGroup orientation="horizontal" class="">
    <UButton label="Stone" color="stone" @click="setNeutralToColor('stone')" />
    <UButton label="Zinc" color="zinc" @click="setNeutralToColor('zinc')" />
    <UButton label="Gray" color="gray" @click="setNeutralToColor('gray')" />
  </UButtonGroup>
</template>
