export const load = async ({ params, fetch }) => {
  const response = await fetch(`/api/podcasts/${params.slug}`)
  const episodes = await response.json()

  return {
    episodes
  }
}