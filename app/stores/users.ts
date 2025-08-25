export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])

  async function fetchUsers() {
    const { data } = await useFetch<User[]>('https://mockly.atlaxt.me/api/users')
    if (data.value) {
      users.value = data.value
    }
  }

  function getUserById(id: number): User {
    const user = users.value.find(u => u.id === id)
    if (!user) throw new Error(`User ${id} not found`)
    return user
  }
  

  return {
    users,
    fetchUsers,
    getUserById,
  }
})
