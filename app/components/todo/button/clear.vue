<script setup lang="ts">
const store = useTodoStore()
</script>

<template>
  <button
    class="text-sm text-red-500 hover:text-red-700"
    @click="store.clearCompleted()"
  >
    Clear Completed
  </button>
</template>
