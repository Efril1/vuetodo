<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../../stores/todo'
import TodoItem from './TodoItem.vue'

const store = useTodoStore()
const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value) {
    store.addTodo(newTodo.value)
    newTodo.value = ''
  }
}
</script>

<template>
  <div class="max-w-md mx-auto">
    <div class="flex gap-2 mb-4">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add new todo..."
        class="flex-1 p-2 border rounded"
      >
      <button 
        @click="addTodo"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
    
    <ul class="border rounded divide-y">
      <TodoItem 
        v-for="todo in store.todos" 
        :key="todo.id"
        :todo="todo"
      />  <!-- v-for array döngüsü-->
    </ul>
    
    <TodoFooter />
  </div>
</template>