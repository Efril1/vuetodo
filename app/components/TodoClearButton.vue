<script setup lang="ts">
import { useTodoStore } from '../../stores/todo'
const store = useTodoStore()
</script>

<template>
  <button
    @click="store.clearCompleted()"
    class="text-sm text-red-500 hover:text-red-700"
  >
    Clear Completed
  </button>
</template>