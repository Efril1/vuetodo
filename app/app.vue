<script setup lang="ts">
const store = useTodoStore()
const newTodo = ref('')

function addTodo() {
  if (newTodo.value) {
    store.addTodo(newTodo.value)
    newTodo.value = ''
  }
}
onMounted(() => {
  store.getTodos()
})
</script>

<template>
  <div class="max-w-md mx-auto">
    <div class="flex gap-2 mb-4">
      <input
        v-model="newTodo"
        placeholder="Add new todo..."
        class="flex-1 p-2 border rounded"
        @keyup.enter="addTodo"
      >
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded"
        @click="addTodo"
      >
        Add
      </button>
    </div>

    <ul class="border rounded divide-y">
      <TodoItem
        v-for="todo in store.todos"
        :key="todo.id"
        :todo="todo"
      />  <!-- v-for array döngüsü -->
    </ul>

    <TodoFooter />
  </div>
</template>
