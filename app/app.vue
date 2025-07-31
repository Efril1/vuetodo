<script setup lang="ts">

const todoStore = useTodoStore()
onMounted(() => {
  todoStore.getTodos()
})
</script>

<template>
  <div class="p-4">
    <TodoList />
  </div>
</template>