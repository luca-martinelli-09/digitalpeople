export const fetchPodcasts = async (podcast = null) => {
  const allPodcastsFiles = import.meta.glob('../../routes/podcasts/*/index.md')
  const iterablePodcastsFiles = Object.entries(allPodcastsFiles)

  const allPodcasts = await Promise.all(
    iterablePodcastsFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const tokens = path.split("/")
      const podcast = tokens[tokens.length - 2];

      return {
        id: podcast,
        ...metadata
      }
    })
  )

  if (podcast) {
    return allPodcasts.filter((p) => p.id == podcast)[0] || null;
  }

  return allPodcasts
}

export const fetchEpisodes = async (podcast) => {
  const allEpisodesFiles = import.meta.glob('../../routes/podcasts/*/s*.md')
  const iterableEpisodesFiles = Object.entries(allEpisodesFiles)

  const allEpisodes = await Promise.all(
    iterableEpisodesFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const tokens = path.split("/")
      const folder = tokens[tokens.length - 2];

      if (folder === podcast) {
        const episode = tokens[tokens.length - 1].slice(0, -3)

        return {
          id: episode,
          ...metadata
        }
      }

      return folder;
    })
  )

  return allEpisodes
}