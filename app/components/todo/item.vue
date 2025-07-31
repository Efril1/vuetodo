<script setup lang="ts">
const props = defineProps<{
  todo: Todo
}>()

const store = useTodoStore()
const isEditing = ref(false)
const editText = ref('')

function startEditing() {
  isEditing.value = true
  editText.value = props.todo.text
}

function saveEdit() {
  if (editText.value.trim()) {
    store.editTodo(props.todo.id, editText.value.trim())
    isEditing.value = false
  }
}

function cancelEdit() {
  isEditing.value = false
}
</script>

<template>
  <li class="flex items-center gap-2 p-2 border-b">
    <input
      type="checkbox"
      :checked="todo.completed"
      class="h-5 w-5"
      @change="store.toggleTodo(todo.id)"
    >

    <span
      v-if="!isEditing"
      :class="{ 'line-through': todo.completed }"
      class="flex-1 cursor-pointer"
      @dblclick="startEditing"
    >
      {{ todo.text }}
    </span>

    <div v-else class="flex-1 flex gap-2">
      <input
        v-model="editText"
        class="flex-1 p-1 border rounded"
        type="text"
        @keyup.enter="saveEdit"
        @blur="saveEdit"
      >
      <button
        class="px-2 text-gray-500 hover:text-gray-700"
        @click="cancelEdit"
      >
        ✕
      </button>
    </div>

    <TodoDeleteButton :id="todo.id" class="ml-2" />
  </li>
</template>
