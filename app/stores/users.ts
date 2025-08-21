export interface User {
  id: number
  name: string
  email: string
  avatar: string
  role: string
  registeredAt: string
  phone: string
  active: boolean
  address: {
    city: string
    country: string
  }
}

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])

  async function fetchUsers() {
    const { data } = await useFetch<User[]>('https://mockly.atlaxt.me/api/users')
    if (data.value) {
      users.value = data.value
    }
  }

  function getUserById(id: number) {
    return users.value.find(u => u.id === id)
  }

  return {
    users,
    fetchUsers,
    getUserById,
  }
})
