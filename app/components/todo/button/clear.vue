<script setup lang="ts">
const props = defineProps<{ userId: number }>()
const store = useTodoStore()

function clearCompleted() {
  store.clearCompleted(props.userId)
}
</script>

<template>
  <UButton
    color="error"
    variant="ghost"
    size="sm"
    label="Clear Completed"
    @click="clearCompleted"
  />
</template>
