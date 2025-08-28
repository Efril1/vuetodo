export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Record<number, Todo[]>>({})
  const config = useRuntimeConfig()
  const prefix = config.public.TODO_PREFIX

  function addTodo(req: { userId: number, text: string }) {
    if (!todos.value[req.userId])
      todos.value[req.userId] = []
    todos.value[req.userId]?.push({
      id: Date.now(),
      text: req.text,
      completed: false,
    })
    saveTodos(req.userId)
  }

  function getTodos(userId: number) {
    const stored = localStorage.getItem(`${prefix}${userId}`)
    try {
      todos.value[userId] = stored ? JSON.parse(stored) : []
    }
    catch (e) {
      console.error('Invalid todos', e)
      todos.value[userId] = []
    }
  }

  function toggleTodo(userId: number, id: number) {
    const todo = todos.value[userId]?.find(t => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
      saveTodos(userId)
    }
  }

  function editTodo(userId: number, id: number, editedText: string) {
    const todo = todos.value[userId]?.find(t => t.id === id)
    if (todo) {
      todo.text = editedText
      saveTodos(userId)
    }
  }

  function deleteTodo(userId: number, id: number) {
    todos.value[userId] = todos.value[userId]?.filter(t => t.id !== id) ?? []
    saveTodos(userId)
  }

  function clearCompleted(userId: number) {
    todos.value[userId] = todos.value[userId]?.filter(t => !t.completed) ?? []
    saveTodos(userId)
  }

  function saveTodos(userId: number) {
    localStorage.setItem(`${prefix}${userId}`, JSON.stringify(todos.value[userId] || []))
  }

  const completedCount = (userId: number) =>
    computed(() => todos.value[userId]?.filter(t => t.completed).length || 0)

  const totalCount = (userId: number) =>
    computed(() => todos.value[userId]?.length ?? 0)

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
