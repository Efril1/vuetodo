<script setup lang="ts">
const mounted = ref(false)
const isDark = ref(true)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <UButton
    v-if="mounted"
    variant="link"
    :icon="isDark ? 'lucide:sun' : 'lucide:moon'"
    @click="isDark = !isDark"
  />
</template>
