<script>
  import { playing } from "$lib/stores.js";
  import Icon from "@iconify/svelte";

  export let data;

  const podcast = data.podcast;
  const episodes = data.episodes;

  function secondsToText(time) {
    const minutes = parseInt(time / 60);
    const seconds = time - minutes * 60;

    return `${minutes} min, ${seconds} sec`;
  }

  function playEpisode(e) {
    e.preventDefault();
    playing.set(e.currentTarget.dataset);
  }
</script>

<article class="flex gap-10 rounded-xl">
  <img class="w-80 aspect-square rounded-xl" src={podcast.image} alt={podcast.title} />
  <div class="flex flex-col gap-5">
    <h1 class="font-display uppercase font-bold text-4xl mt-3">{podcast.title}</h1>
    <div class="text-justify">
      <svelte:component this={podcast.description} />
    </div>
    {#if podcast.platforms}
      <div class="text-3xl flex flex-col gap-3">
        <h3 class="font-display font-bold text-xl">Ascoltalo su</h3>
        <div class="flex">
          {#if podcast.platforms.spotify}
            <a href={podcast.platforms.spotify} target="_blank" rel="noopener noreferrer">
              <Icon icon="logos:spotify-icon" />
            </a>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</article>

<h2 class="font-display font-bold text-3xl my-10">Episodi</h2>

<div class="flex flex-col gap-5">
  {#each episodes as episode}
    <a
      href="{podcast.id}/s{episode.season}e{episode.episode}"
      class="episode flex gap-5 p-5 border-2 border-black bg-white rounded-xl shadow-solid relative"
      style="border-color: {podcast.colorDark}; --tw-shadow-color: {podcast.colorDark}; --tw-shadow: var(--tw-shadow-colored);"
      data-podcast={podcast.id}
      data-season={episode.season}
      data-episode={episode.episode}
      data-title={episode.title}
      on:click={playEpisode}
    >
      <div class="h-52 aspect-square relative">
        <div class="player-hover text-white text-5xl">
          <Icon icon="carbon:play-filled-alt" />
        </div>
        <img class="w-full rounded-lg" src={episode.image} alt={episode.title} />
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-sm text-blue-800 font-bold mt-3">
          {#if episode.season && episode.season > 0}
            Stagione {episode.season}, Episodio {episode.episode}
          {:else}
            Trailer
          {/if}
        </span>
        <h3 class="font-display font-bold text-xl border-b border-slate-300 pb-2">{episode.title}</h3>
        <div class="text-justify text-sm">{@html episode.description}</div>
        <div class="mt-3">
          <span class="rounded-full px-3 py-1 text-sm text-white font-display" style="background-color: {podcast.colorDark};">{secondsToText(episode.audio.duration)}</span>
        </div>
      </div>
    </a>
  {/each}
</div>
