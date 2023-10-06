import { fetchEpisodes } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ params, url }) => {
  const podcast = params.slug;
  const filter = url.searchParams.get('filter') ?? '1';

  let allEpisodes = await fetchEpisodes(podcast, parseInt(filter) > 0);

  return json(allEpisodes)
}