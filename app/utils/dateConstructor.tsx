export default function dateConstructor() {
  const today = new Date()
  const year = String(today.getFullYear()).padStart(2, "0")
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate() - 1).padStart(2, "0")  // newsApi's "recent news" is yesterday's news

  const dateString = `${year}-${month}-${day}`

  const testDate = "2023-08-30"
  
  return dateString
}
