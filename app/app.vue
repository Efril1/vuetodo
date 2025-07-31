<script setup lang="ts">
import { TodoToggletheme } from '#components'

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
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <div class="absolute top-10 flex flex-col items-center gap-1">
      <div class="flex items-center gap-1">
        <TodoToggletheme />

        <span class="text-xl font-bold text-gray-800 dark:text-gray-200">Todo</span>
        <a
          href="https://github.com/Efril1"
          target="_blank"
          class="mt-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          <UIcon name="i-lucide-github" class="w-10 h-6" />
        </a>
      </div>
    </div>

    <div class="w-full max-w-md space-y-4 mt-16">
      <div class="flex gap-2 w-full">
        <UInput
          v-model="newTodo"
          placeholder="Add new todo..."
          class="flex-1"
          @keyup.enter="addTodo"
        />
        <UButton @click="addTodo">
          Add
        </UButton>
      </div>

      <UCard class="w-full">
        <div>
          <TodoItem
            v-for="todo in store.todos"
            :key="todo.id"
            :todo="todo"
          />
        </div>
      </UCard>

      <TodoFooter />
    </div>
  </div>
</template>
