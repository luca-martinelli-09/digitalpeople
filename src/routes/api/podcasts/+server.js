import { fetchPodcasts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPodcasts = await fetchPodcasts();

  return json(allPodcasts)
}