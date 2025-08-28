<script setup lang="ts">
import type { TableColumn, TableRow } from '@nuxt/ui'

const router = useRouter()
const userStore = useUserStore()
const isLoading = ref(true)

async function initialize() {
  try {
    await userStore.fetchUsers()
  }
  catch (error) {
    console.error('Failed to fetch users:', error)
  }
  finally {
    isLoading.value = false
  }
}

initialize()

function onSelect(row: TableRow<User>) {
  router.push({
    name: 'todo',
    params: { id: row.getValue('id') },
  })
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
  {
    accessorKey: 'registeredAt',
    header: 'registeredAt',
    cell: ({ row }) => formatDate(row.original.registeredAt),
  },
  { accessorKey: 'active', header: 'active' },
  { accessorKey: 'role', header: 'Role' },
]
</script>

<template>
  <div v-if="isLoading" class="p-6 text-center font-bold">
    <div class="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading" />
  </div>

  <div v-else>
    <PrimaryChange class="absolute right-20 mt-5 " />
    <NeutralChange class="absolute right-65 mt-5 " />

    <div class="p-6">
      <UButton color="primary" variant="link" class="flex text-xl font-bold justify-center mx-auto">
        Users Table
      </UButton>
      <UTable
        :data="userStore.users"
        :columns="columns"
        @select="onSelect"
      >
        <template #active-cell="{ getValue }">
          <div
            class="w-2 h-2 rounded-full" :class="{
              'bg-red-500': !getValue(),
              'bg-green-500': getValue(),
            }"
          />
        </template>
      </UTable>
    </div>
  </div>
</template>
