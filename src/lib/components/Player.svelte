<script>
  import { playing } from "$lib/stores.js";
  import Icon from "@iconify/svelte";

  let currentPlaying;
  let player;

  let isPlaying = false;

  playing.subscribe((episodeInfo) => {
    currentPlaying = episodeInfo;

    if (currentPlaying && player) {
      player.src = `/podcasts/${episodeInfo.podcast}/s${episodeInfo.season}e${episodeInfo.episode}/audio.mp3`;
      player.play();
      isPlaying = true;
    }
  });

  function togglePlay() {
    if (player.paused) {
      player.play();
      isPlaying = true;
    } else {
      player.pause();
      isPlaying = false;
    }
  }
</script>

{#if currentPlaying}
  <div class="episode bg-black rounded-xl rounded-bl-none text-white p-3 flex gap-3 shadow-lg">
    <div class="relative">
      <img class="h-16 aspect-square rounded-lg" src="/podcasts/{currentPlaying.podcast}/s{currentPlaying.season}e{currentPlaying.episode}/cover.jpg" alt={currentPlaying.title} />
    </div>
    <div class="flex flex-col gap-3">
      <h4 class="text-sm font-display">{currentPlaying.title}</h4>
      <div class="flex text-2xl gap-2 cursor-pointer items-center">
        <span class="cursor-pointer text-xl"><Icon icon="carbon:skip-back-filled" /></span>
        <span class="cursor-pointer" on:click={togglePlay}>
          {#if isPlaying}
            <Icon icon="carbon:pause-filled" />
          {:else}
            <Icon icon="carbon:play-filled-alt" on:click={togglePlay} />
          {/if}
        </span>
        <span class="cursor-pointer text-xl"><Icon icon="carbon:skip-forward-filled" /></span>
      </div>
    </div>
  </div>
{/if}

<audio bind:this={player} class="hidden" />
