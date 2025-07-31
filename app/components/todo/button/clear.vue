<script setup lang="ts">
const store = useTodoStore()
</script>

<template>
  <UButton
    color="error"
    variant="ghost"
    size="sm"
    label="Clear Completed"
    @click="store.clearCompleted()"
  />
</template>
