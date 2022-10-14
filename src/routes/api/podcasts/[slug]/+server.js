import { fetchEpisodes } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
  const podcast = params.slug;

  let allEpisodes = await fetchEpisodes(podcast);

  return json(allEpisodes)
}