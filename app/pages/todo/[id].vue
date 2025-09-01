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
  <ClientOnly>
    <div class="w-full max-w-md space-y-4 mt-16 mx-auto">
      <div class="flex gap-2 w-full">
        <UInput
          v-model="newTodo"
          placeholder="Add new todo..."
          class="flex-1"
          @keyup.enter="addTodo"
        />
        <UButton :disabled="!newTodo" @click="addTodo">
          Add
        </UButton>
      </div>

      <div class="w-full">
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
      </div>

      <TodoFooter :user-id="userId" />
    </div>
  </ClientOnly>
</template>
