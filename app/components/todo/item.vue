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
  <UListItem
    class="rounded-lg px-3 py-2 flex items-center gap-2 hover:bg-gray-900 transition cursor-pointer"
    :class="[{ 'opacity-60': todo.completed }]"
    @click="toggleTodo"
  >
    <UCheckbox
      :model-value="todo.completed"
      class="pointer-events-none"
    />

    <span
      v-if="!isEditing"
      class="flex-1"
      :class="{ 'line-through': todo.completed }"
      @dblclick.stop="startEditing"
    >
      {{ todo.text }}
    </span>

    <div v-else class="flex-1 flex gap-2" @click.stop>
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
      @click.stop="startEditing"
    />
  </UListItem>
</template>
