<script setup lang="ts">
import type { TableColumn, TableRow } from '@nuxt/ui'

const router = useRouter()
const userStore = useUserStore()
await userStore.fetchUsers()

function onSelect(row: TableRow<User>) {
  router.push(`/todo/${row.original.id}`)
}

const columns: TableColumn<User>[] = [
  { accessorKey: 'id', header: 'id' },
  {
    accessorKey: 'avatar',
    header: '',
    cell: ({ row }) =>
      h(resolveComponent('UAvatar'), { src: row.original.avatar, size: 'xs' }),
  },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  {
    accessorKey: 'address',
    header: 'address',
    cell: ({ row }) =>
      `${row.original.address.city}, ${row.original.address.country}`,
  },
  { accessorKey: 'phone', header: 'phone' },
  { accessorKey: 'registeredAt', header: 'registeredAt' },
  { accessorKey: 'active', header: 'active' },
  { accessorKey: 'role', header: 'Role' },
]
</script>

<template>
  <div class="p-6">
    <h1 class="flex text-xl font-bold justify-center">
      Users Table
    </h1>
    <UTable
      :data="userStore.users"
      :columns="columns"
      class="flex"
      @select="onSelect"
    />
  </div>
</template>
