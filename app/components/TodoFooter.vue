<script setup lang="ts">
import { useTodoStore } from '../../stores/todo'
import TodoStatistics from './TodoStatistics.vue'
import TodoClearButton from './TodoClearButton.vue'

const store = useTodoStore()
</script>

<template>
  <div class="flex justify-between items-center mt-4">
    <TodoStatistics />
    <TodoClearButton />
  </div>
</template>