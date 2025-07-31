<script setup lang="ts">
const props = defineProps<{
  todo: Todo
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
    store.editTodo(props.todo.id, editText.value.trim())
    isEditing.value = false
  }
}

function cancelEdit() {
  isEditing.value = false
}
</script>

<template>
  <UCard
    class="mb-2 "
  >
    <div class="flex items-center gap-2">
      <UCheckbox
        :model-value="todo.completed"
        @change="store.toggleTodo(todo.id)"
      />
      <span
        v-if="!isEditing"
        :class="{ 'line-through': todo.completed }"
        class="flex-1 cursor-pointer"
        @dblclick="startEditing"
      >
        {{ todo.text }}
      </span>

      <div v-else class="flex-1 flex gap-2">
        <UInput
          v-model="editText"
          type="text"
          autofocus
          @keyup.enter="saveEdit"
          @blur="saveEdit"
        />
        <UButton
          variant="ghost"
          color="error"
          @click="cancelEdit"
        >
          ✕
        </UButton>
      </div>

      <TodoDeleteButton :id="todo.id" />
    </div>
  </UCard>
</template>
