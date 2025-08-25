<script setup lang="ts">
definePageMeta({
  name: 'todo',
})

const route = useRoute()
const userId = Number(route.params.id)
const store = useTodoStore()
const newTodo = ref('')

onMounted(() => {
  store.getTodos(userId)
})

function addTodo() {
  if (newTodo.value) {
    store.addTodo({
      userId,
      text: newTodo.value,
    })
    newTodo.value = ''
  }
}

const userTodos = computed(() => store.todos[userId] ?? [])
</script>

<template>
  <UButton
    icon="i-lucide-github"
    class="absolute top-0 right-0 m-3"
    color="neutral"
    to="https://github.com/Efril1"
    variant="ghost"
  />
  <ClientOnly>
    <div class="min-h-screen flex flex-col items-center p-4">
      <div class="absolute top-10 flex flex-col items-center gap-1">
        <div class="flex items-center gap-1">
          <TodoToggletheme />
          <div class="relative inline-block hover:[&>span:first-child]:opacity-90 mx-auto">
            <span
              class="ml-2 absolute inset-0 blur-sm opacity-0 hover:opacity-90 scale-200 transition-all duration-300 pointer-events-none"
            >
              todo
            </span>
            <ULink
              to="/"
              class="text-xl font-bold text-gray-800 dark:text-gray-200"
            >
              Todo
            </ULink>
          </div>
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
          <UButton :disabled="!newTodo" color="primary" @click="addTodo">
            Add
          </UButton>
        </div>

        <UCard class="w-full">
          <div v-if="userTodos.length">
            <TodoItem
              v-for="todo in userTodos"
              :key="todo.id"
              :todo="todo"
              :user-id="userId"
            />
          </div>
          <div v-else class="p-4 text-center text-gray-500">
            No todos yet. Add one above!
          </div>
        </UCard>

        <TodoFooter :user-id="userId" />
      </div>
    </div>
  </ClientOnly>
</template>
