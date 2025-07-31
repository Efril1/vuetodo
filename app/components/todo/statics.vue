<script setup lang="ts">
const store = useTodoStore()
</script>

<template>
  <div class="text-sm text-gray-500">
    {{ store.completedCount }} / {{ store.totalCount }} completed
  </div>
</template>