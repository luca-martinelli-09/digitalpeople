export const load = async ({ params, fetch }) => {
  const podcast = await import(`../../${params.slug}/index.md`)
  const episode = await import(`../../${params.slug}/s${params.season}e${params.episode}.md`)

  const response = await fetch(`/api/podcasts/${params.slug}`)
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