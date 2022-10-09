import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
  const season = params.season;
  const episode = params.episode;

  return json({
    season: season,
    episode: episode
  })
}