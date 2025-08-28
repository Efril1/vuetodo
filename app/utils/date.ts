export function formatDate(dateString: string) {
  if (!dateString)
    return

  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.toLocaleString('tr-TR', { month: 'long' })
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}
