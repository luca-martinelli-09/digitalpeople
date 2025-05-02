export const load = async ({ params, fetch }) => {
  const podcast = await import(`../../../${params.slug}/_index.md`)
  const episode = await import(`../../../${params.slug}/${params.episode}.md`)

  const response = await fetch(`/api/podcasts/${params.slug}?filter=false`)
  const episodes = await response.json()

  return {
    podcast: {
      ...podcast.metadata,
      description: podcast.default
    },
    episode: {
      ...episode.metadata,
      description: episode.default
    },
    episodes
  }
}