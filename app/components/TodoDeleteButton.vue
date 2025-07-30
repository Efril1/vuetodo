<script setup lang="ts">
defineProps<{
  id: number
}>()
import { useTodoStore } from '../../stores/todo'
const store = useTodoStore()
</script>

<template>
  <button
    @click="store.deleteTodo(id)"
    class="text-red-500 hover:text-red-700"
  >
    Delete
  </button>
</template>