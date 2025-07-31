<script setup lang="ts">
defineProps<{
  id: number
}>()
const todoStore = useTodoStore()
</script>

<template>
  <button
    @click="todoStore.deleteTodo(id)"
    class="text-red-500 hover:text-red-700"
  >
    Delete
  </button>
</template>