export const load = async ({ params, fetch }) => {
  const podcast = await import(`../${params.slug}/_index.md`)

  const response = await fetch(`/api/podcasts/${params.slug}`)
  const episodes = await response.json()

  return {
    podcast: {
      ...podcast.metadata,
      description: podcast.default
    },
    episodes,
  }
}