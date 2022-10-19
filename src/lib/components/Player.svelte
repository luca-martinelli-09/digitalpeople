<script>
  import { playingStatus as pS } from "$lib/stores.js";
  import Icon from "@iconify/svelte";

  let podcast;
  let episode;
  let episodes;

  let player;

  let playingStatus;

  pS.subscribe((val) => {
    episode = val?.currentEpisode;
    podcast = val?.currentPodcast;
    episodes = podcast?.episodes;

    const currentEpisode = playingStatus?.currentEpisode;

    if (episode && player) {
      if (currentEpisode?.audio.file !== episode.audio.file) {
        player.src = episode.audio.file;
        player.play();
      }

      if (!playingStatus.isPlaying && val.isPlaying) {
        if (!player.src) {
          player.src = episode.audio.file;
        }
        player.play();
      } else if (playingStatus.isPlaying && !val.isPlaying) {
        player.pause();
      }
    }

    playingStatus = val;
  });

  function togglePlay() {
    if (player.paused) {
      if (!player.src) {
        player.src = episode.audio.file;
      }
      player.play();
    } else {
      player.pause();
    }
  }

  function setPlay() {
    pS.set({
      ...playingStatus,
      isPlaying: true,
    });
  }

  function setPause() {
    pS.set({
      ...playingStatus,
      isPlaying: false,
    });
  }
</script>

{#if episode}
  <div class="episode md:rounded-2xl md:rounded-bl-none p-3 flex gap-5 md:gap-3 shadow-y-2 md:shadow-md items-center" style="background-color: {podcast.scheme[0]}">
    <div class="relative">
      <img class="h-20 md:h-16 aspect-square rounded-xl" src={episode.image} alt={episode.title} />
    </div>
    <div class="flex flex-col gap-3">
      <h4 class="text-base md:text-sm font-semibold">{episode.title}</h4>
      <div class="flex gap-3 items-center text-slate-700">
        <span class="cursor-pointer text-xl"><Icon icon="carbon:skip-back-filled" /></span>
        <span class="cursor-pointer text-3xl" on:click={togglePlay}>
          {#if playingStatus.isPlaying}
            <Icon icon="carbon:pause-filled" />
          {:else}
            <Icon icon="carbon:play-filled-alt" />
          {/if}
        </span>
        <span class="cursor-pointer text-xl"><Icon icon="carbon:skip-forward-filled" /></span>
      </div>
    </div>
  </div>
{/if}

<audio bind:this={player} on:play={setPlay} on:pause={setPause} class="hidden" />
