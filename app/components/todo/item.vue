<script setup lang="ts">
const props = defineProps<{
  todo: Todo
  userId: number
}>()

const store = useTodoStore()
const isEditing = ref(false)
const editText = ref('')

function startEditing() {
  isEditing.value = true
  editText.value = props.todo.text
}

function saveEdit() {
  if (editText.value.trim()) {
    store.editTodo(props.userId, props.todo.id, editText.value.trim())
    isEditing.value = false
  }
}

function cancelEdit() {
  isEditing.value = false
}

function toggleTodo() {
  store.toggleTodo(props.userId, props.todo.id)
}
</script>

<template>
  <UCard class="mb-2">
    <div class="flex items-center gap-2">
      <UCheckbox
        :model-value="todo.completed"
        @change="toggleTodo"
      />

      <span
        v-if="!isEditing"
        class="flex-1 cursor-pointer"
        :class="[todo.completed ? 'text-primary' : '']"
        @dblclick="startEditing"
      >
        {{ todo.text }}
      </span>

      <div v-else class="flex-1 flex gap-2">
        <UInput
          v-model="editText"
          type="text"
          class="flex-1 py-1.5 h-10 text-base"
          autofocus
          @keyup.enter="saveEdit"
          @blur="saveEdit"
        />
        <UButton icon="lucide:x" variant="ghost" color="error" @click="cancelEdit" />
      </div>

      <UButton
        v-if="!isEditing"
        icon="lucide:pencil"
        variant="ghost"
        color="primary"
        @click="startEditing"
      />
    </div>
  </UCard>
</template>
