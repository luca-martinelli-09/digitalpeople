import { fetchEpisodes } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
  const podcast = params.slug;

  let allEpisodes = await fetchEpisodes(podcast);

  allEpisodes = allEpisodes.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  }).filter((e) => { return new Date() >= new Date(e.date) })

  return json(allEpisodes)
}