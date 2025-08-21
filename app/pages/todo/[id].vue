<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTodoStore } from '~/stores/todo'

const route = useRoute()
const userId = Number(route.params.id)
const todoStore = useTodoStore()

todoStore.getTodos(userId)
</script>

<template>
  <div>
    <h1>User {{ userId }} Todos</h1>
    <ul>
      <li v-for="todo in todoStore.todos[userId]" :key="todo.id">
        <input v-model="todo.completed" type="checkbox" @change="todoStore.toggleTodo(userId, todo.id)">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>
