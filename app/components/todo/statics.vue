<script setup lang="ts">
const props = defineProps<{ userId: number }>()
const store = useTodoStore()
const completed = computed(() => store.completedCount(props.userId).value)
const total = computed(() => store.totalCount(props.userId).value)
</script>

<template>
  <div class="text-sm text-gray-500">
    {{ completed }} / {{ total }} completed
  </div>
</template>
