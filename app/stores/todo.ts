export const useTodoStore = defineStore('todo', () => {
  // todos per user: { [userId]: Todo[] }
  const todos = ref<Record<number, Todo[]>>({})

  function addTodo(userId: number, text: string) {
    if (!todos.value[userId])
      todos.value[userId] = []
    todos.value[userId].push({
      id: Date.now(),
      text,
      completed: false,
    })
  }

  function getTodos(userId: number) {
    const stored = localStorage.getItem(`todos-${userId}`)
    try {
      todos.value[userId] = stored ? JSON.parse(stored) : []
    }
    catch (e) {
      console.error('Invalid todos in localStorage', e)
      todos.value[userId] = []
    }
  }

  function toggleTodo(userId: number, id: number) {
    const todo = todos.value[userId]?.find(t => t.id === id)
    if (todo)
      todo.completed = !todo.completed
  }

  function editTodo(userId: number, id: number, editedText: string) {
    const todo = todos.value[userId]?.find(t => t.id === id)
    if (todo)
      todo.text = editedText
  }

  function deleteTodo(userId: number, id: number) {
    todos.value[userId] = todos.value[userId]?.filter(t => t.id !== id) ?? []
  }

  function clearCompleted(userId: number) {
    todos.value[userId] = todos.value[userId]?.filter(t => !t.completed) ?? []
  }

  function saveTodos(userId: number) {
    localStorage.setItem(`todos-${userId}`, JSON.stringify(todos.value[userId] || []))
  }

  // watch all user todos to auto-save
  watch(
    todos,
    (newTodos) => {
      for (const userId in newTodos) {
        localStorage.setItem(`todos-${userId}`, JSON.stringify(newTodos[userId]))
      }
    },
    { deep: true },
  )

  const completedCount = (userId: number) =>
    computed(() => todos.value[userId]?.filter(t => t.completed).length || 0)

  const totalCount = (userId: number) =>
    computed(() => todos.value[userId]?.length || 0)

  return {
    todos,
    addTodo,
    getTodos,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted,
    saveTodos,
    completedCount,
    totalCount,
  }
})
