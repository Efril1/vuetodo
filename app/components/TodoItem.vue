<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../../stores/todo'
import TodoDeleteButton from './TodoDeleteButton.vue'

const props = defineProps<{
  todo: {
    id: number
    text: string
    completed: boolean
  }
}>()

const store = useTodoStore()
const isEditing = ref(false)
const editText = ref('')

const startEditing = () => {
  isEditing.value = true
  editText.value = props.todo.text
}

const saveEdit = () => {
  if (editText.value.trim()) {
    store.editTodo(props.todo.id, editText.value.trim())
    isEditing.value = false
  }
}

const cancelEdit = () => {
  isEditing.value = false
}
</script>

<template>
  <li class="flex items-center gap-2 p-2 border-b">
    <input 
      type="checkbox" 
      :checked="todo.completed"
      @change="store.toggleTodo(todo.id)"
      class="h-5 w-5"
    >
    
    <span 
      v-if="!isEditing"
      :class="{ 'line-through': todo.completed }"
      @dblclick="startEditing"
      class="flex-1 cursor-pointer"
    >
      {{ todo.text }}
    </span>
    
    <div v-else class="flex-1 flex gap-2">
      <input
        v-model="editText"
        @keyup.enter="saveEdit"
        @blur="saveEdit"
        class="flex-1 p-1 border rounded"
        type="text"
      >
      <button 
        @click="cancelEdit"
        class="px-2 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
    </div>
    
    <TodoDeleteButton :id="todo.id" class="ml-2" />
  </li>
</template>