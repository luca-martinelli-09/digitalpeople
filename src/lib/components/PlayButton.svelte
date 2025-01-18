<script>
  import { playingStatus as pS } from "$lib/stores.js";
  import { secondsToText } from "$lib/utils";
  import Icon from "@iconify/svelte";

  export let podcast;
  export let episodes;
  export let episode;

  let playingStatus;

  pS.subscribe((val) => (playingStatus = val));

  function togglePlay() {
    if (playingStatus.currentEpisode?.audio.file === episode.audio.file) {
      pS.set({
        ...playingStatus,
        isPlaying: !playingStatus.isPlaying,
      });
    } else {
      pS.set({
        ...playingStatus,
        currentPodcast: {
          ...podcast,
          episodes,
        },
        currentEpisode: episode,
      });
    }
  }
</script>

<div class="rounded-full gap-3 pr-4 flex items-center bg-neutral-50 shadow-sm">
  <span class="cursor-pointer rounded-full text-xl bg-white shadow-md p-3 text-slate-700" on:click={togglePlay}>
    {#if playingStatus.isPlaying && playingStatus.currentEpisode?.audio.file === episode.audio.file}
      <Icon icon="carbon:pause-filled" />
    {:else}
      <Icon icon="carbon:play-filled-alt" />
    {/if}
  </span>
  <span>{secondsToText(episode.audio.duration, true)}</span>
</div>
