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
    <div class="absolute top-10 flex items-center gap-1">
      <TodoToggletheme />
      <span class="text-xl font-bold text-White-800">Todo</span>
    </div>

    <div class="w-full max-w-md space-y-4">
      <div class="flex gap-2 w-full">
        <UInput
          v-model="newTodo"
          placeholder="Add new todo..."
          class="flex-1"
          @keyup.enter="addTodo"
        />
        <UButton
          @click="addTodo"
        >
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
