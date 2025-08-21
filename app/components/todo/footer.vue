<script setup lang="ts">
const props = defineProps<{ userId: number }>()
</script>

<template>
  <div class="flex justify-between items-center mt-4">
    <TodoStatics :user-id="props.userId" />
    <TodoButtonClear :user-id="props.userId" />
  </div>
</template>
