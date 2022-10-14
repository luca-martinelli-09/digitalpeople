export const fetchPodcasts = async (podcast = null) => {
  const allPodcastsFiles = import.meta.glob('../../routes/podcasts/*/index.md')
  const iterablePodcastsFiles = Object.entries(allPodcastsFiles)

  let allPodcasts = await Promise.all(
    iterablePodcastsFiles.map(async ([path, resolver]) => {
      const resolve = await resolver()
      const tokens = path.split("/")
      const podcast = tokens[tokens.length - 2];

      return {
        id: podcast,
        ...resolve.metadata,
        description: resolve.default.render().html
      }
    })
  )
  
  allPodcasts = allPodcasts.sort((a, b) => (b.fixed * 1 || 0) - (a.fixed * 1 || 0))

  if (podcast) {
    return allPodcasts.filter(p => p.id == podcast).pop() || null;
  }

  return allPodcasts.filter(p => p.visible !== false)
}

export const fetchEpisodes = async (podcast) => {
  const allEpisodesFiles = import.meta.glob('../../routes/podcasts/*/s*.md')
  const iterableEpisodesFiles = Object.entries(allEpisodesFiles)

  const allEpisodes = await Promise.all(
    iterableEpisodesFiles.map(async ([path, resolver]) => {
      const resolve = await resolver()

      const tokens = path.split("/")
      const folder = tokens[tokens.length - 2];

      if (folder === podcast) {
        const episode = tokens[tokens.length - 1].slice(0, -3)

        return {
          id: episode,
          ...resolve.metadata,
          description: resolve.default.render().html
        }
      }

      return folder;
    })
  )

  return allEpisodes.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  }).filter((e) => { return new Date() >= new Date(e.date) })
}