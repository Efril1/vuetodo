<script setup lang="ts">
definePageMeta({ name: 'todo' })

const route = useRoute()
const userId = Number(route.params.id)

const store = useTodoStore()
const newTodo = ref('')

function addTodo() {
  if (newTodo.value) {
    store.addTodo(userId, newTodo.value)
    newTodo.value = ''
  }
}

onMounted(() => {
  store.getTodos(userId)
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <div class="absolute top-10 flex flex-col items-center gap-1">
      <div class="flex items-center gap-1">
        <TodoToggletheme />
        <span class="text-xl font-bold text-gray-800 dark:text-gray-200">Todo</span>
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
            v-for="todo in store.todos[userId]"
            :key="todo.id"
            :todo="todo"
            :user-id="userId"
          />
        </div>
      </UCard>

      <TodoFooter :user-id="userId" />
    </div>
  </div>
</template>
