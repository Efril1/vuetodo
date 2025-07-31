import { defineStore } from 'pinia'

type Todo = {
  id: number
  text: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[]
  }),
  actions: {
    addTodo(text: string) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false
      })
    },
    toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) todo.completed = !todo.completed
    },
    editTodo(id: number, editedText: string) {
        const todo = this.todos.find(todo => todo.id === id)
        if (todo) todo.text = editedText
      },
    deleteTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  getters: {
    completedCount: (state) => state.todos.filter(todo => todo.completed).length,
    totalCount: (state) => state.todos.length
  }
})