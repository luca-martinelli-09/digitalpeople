export const fetchPodcasts = async (podcast = null) => {
  const allPodcastsFiles = import.meta.glob('../../routes/podcasts/*/_index.md')
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

export const fetchEpisodes = async (podcast, filter = true) => {
  const allEpisodesFiles = import.meta.glob('../../routes/podcasts/*/[a-z-0-9]+.md')
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

  const sortedEpisodes = allEpisodes.sort((a, b) => {
    if (a.season === b.season) return a.episode - b.episode;
    return a.season - b.season;
  })

  if (filter)
    return sortedEpisodes.filter((e) => { return new Date() >= new Date(e.date) })

  return sortedEpisodes.filter((e) => { return new Date() >= new Date(e.date) || new Date() <= new Date(e.date) })
}

export const secondsToText = (time, extended = false) => {
  if (isNaN(time)) {
    return "00:00"
  }

  time = parseInt(time, 10);
  let minutes = Math.floor(time / 60);
  let seconds = time - (minutes * 60);

  if (extended) {
    let mS = minutes == 1 ? 'o' : 'i';
    let sS = seconds == 1 ? 'o' : 'i';
    return `${minutes} minut${mS}, ${seconds} second${sS}`
  }

  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }

  return minutes + ':' + seconds;
}