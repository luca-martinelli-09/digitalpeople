<script>
  import { playingStatus as pS } from "$lib/stores.js";

  export let podcast;
  export let episodes;
  export let i;

  const episode = episodes[i];

  let playingStatus;

  function playEpisode(e) {
    e.preventDefault();
    pS.set({
      ...playingStatus,
      isPlaying: true,
      currentPodcast: {
        ...podcast,
        episodes,
      },
      currentEpisode: episode,
    });
  }
</script>

<a href="{podcast.id}/{episode.id}" class="flex gap-5 p-7 rounded-3xl overflow-hidden" style="background-color: {podcast.scheme?.[1]}">
  <div class="hidden md:flex items-center">
    <img class="h-52 w-52 max-w-none rounded-xl" src={(episode.imageset?.[0] || episode.image)} alt={episode.title} />
  </div>
  <div class="flex flex-col gap-3">
    <span class="text-sm font-bold mt-3" style="color: {podcast.scheme?.[3]}">Stagione {episode.season}, Episodio {episode.episode}</span>
    <h3 class="font-bold text-xl">{episode.title}</h3>
    <div class="text-justify text-sm">{@html episode.summary}</div>
    <div class="flex mt-2">
      <span class="button" on:click={playEpisode}>Ascolta ora</span>
    </div>
  </div>
</a>
