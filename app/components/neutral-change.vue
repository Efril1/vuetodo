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
    <UButton label="Stone" class="bg-stone-500 text-white hover:bg-stone-600" @click="setNeutralToColor('stone')" />
    <UButton label="Zinc" class="bg-zinc-500 text-white hover:bg-zinc-600" @click="setNeutralToColor('zinc')" />
    <UButton label="Gray" class="bg-gray-500 text-white hover:bg-gray-600" @click="setNeutralToColor('gray')" />
  </UButtonGroup>
</template>
