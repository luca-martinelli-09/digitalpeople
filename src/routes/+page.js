export const load = async ({ fetch }) => {
  const response = await fetch(`/api/podcasts`)
  const podcasts = await response.json()

  return {
    podcasts
  }
}