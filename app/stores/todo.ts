export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>()

  function addTodo(text: string) {
    todos.value?.push({
      id: Date.now(),
      text,
      completed: false,
    })
  }

  const getTodos = () => {
    todos.value = JSON.parse(localStorage.getItem('todos') ?? '') ?? undefined
  }
  function toggleTodo(id: number) {
    const todo = todos.value?.find(todo => todo.id === id)
    if (todo)
      todo.completed = !todo.completed
  }
  function editTodo(id: number, editedText: string) {
    const todo = todos.value?.find(todo => todo.id === id)
    if (todo)
      todo.text = editedText
  }
  function deleteTodo(id: number) {
    todos.value = todos.value?.filter(todo => todo.id !== id)
  }
  function clearCompleted() {
    todos.value = todos.value?.filter(todo => !todo.completed)
  }
  const completedCount = computed(() => todos.value?.filter(todo => todo.completed).length)
  const totalCount = computed(() => todos.value?.length)

  watch(todos, (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }, { deep: true })

  return {
    todos,
    addTodo,
    toggleTodo,
    getTodos,
    editTodo,
    deleteTodo,
    clearCompleted,
    completedCount,
    totalCount,

  }
})

// export const useTodoStore = defineStore('todo', {
//   state: () => ({
//     todos: [] as Todo[]
//   }),
//   actions: {
//     addTodo(text: string) {
//       this.todos.push({
//         id: Date.now(),
//         text,
//         completed: false
//       })
//     },
//     toggleTodo(id: number) {
//       const todo = this.todos.find(todo => todo.id === id)
//       if (todo) todo.completed = !todo.completed
//     },
//     editTodo(id: number, editedText: string) {
//         const todo = this.todos.find(todo => todo.id === id)
//         if (todo) todo.text = editedText
//       },
//     deleteTodo(id: number) {
//       this.todos = this.todos.filter(todo => todo.id !== id)
//     },
//     clearCompleted() {
//       this.todos = this.todos.filter(todo => !todo.completed)
//     }
//   },
//   getters: {
//     completedCount: (state) => state.todos.filter(todo => todo.completed).length,
//     totalCount: (state) => state.todos.length
//   }
// })
