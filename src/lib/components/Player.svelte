<script>
  import { onMount } from "svelte";
  import { playingStatus as pS } from "$lib/stores.js";
  import Icon from "@iconify/svelte";
  import { secondsToText } from "$lib/utils";
  import Slider from "@bulatdashiev/svelte-slider";

  let podcast;
  let episode;
  let episodes;

  let player;
  let currentTime;

  let playingStatus;

  let mediaSession;

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

    if (mediaSession) {
      mediaSession.playbackState = "playing";

      mediaSession.metadata = new MediaMetadata({
        title: playingStatus.currentEpisode.title,
        artist: playingStatus.currentPodcast.title,
        artwork: [{ src: playingStatus.currentEpisode.image }],
      });
    }
  }

  function setPause() {
    pS.set({
      ...playingStatus,
      isPlaying: false,
    });

    if (mediaSession) {
      mediaSession.playbackState = "paused";
    }
  }

  function setTime() {
    pS.set({
      ...playingStatus,
      currentTime: player.currentTime,
      duration: player.duration,
    });
    currentTime = [(player.currentTime / player.duration) * 100, 100];

    mediaSession.setPositionState({
      duration: player.duration,
      playbackRate: player.playbackRate,
      position: player.currentTime,
    });
  }

  function setTimeSlider(e) {
    const val = e.detail[0];
    try {
      player.currentTime = (val / 100) * (player.duration || 0);
    } catch (error) {}
  }

  onMount(() => {
    if ("mediaSession" in navigator) {
      mediaSession = navigator.mediaSession;

      navigator.mediaSession.setActionHandler("play", () => player.play());
      navigator.mediaSession.setActionHandler("pause", () => player.pause());
      navigator.mediaSession.setActionHandler("seekbackward", (e) => (player.currentTime = Math.max(player.currentTime - (e.seekOffset || 10), 0)));
      navigator.mediaSession.setActionHandler("seekforward", (e) => (player.currentTime = Math.min(player.currentTime + (e.seekOffset || 10), player.duration)));
      navigator.mediaSession.setActionHandler("seekto", (e) => {
        if (e.fastSeek && "fastSeek" in player) {
          player.fastSeek(e.seekTime);
          return;
        }

        player.currentTime = e.seekTime;
      });
    }

    return;
  });
</script>

{#if episode}
  <div class="episode md:rounded-2xl md:rounded-bl-none p-3 flex gap-5 md:gap-3 shadow-y-2 md:shadow-md items-center" style="background-color: {podcast.scheme[0]}">
    <div class="relative">
      <img class="h-20 w-20 md:h-16 md:w-16 max-w-none aspect-square rounded-xl" src={episode.image} alt={episode.title} />
    </div>
    <div class="flex flex-1 flex-col gap-3">
      <h4 class="text-base md:text-sm font-semibold">{episode.title}</h4>
      <div class="flex gap-3 items-center text-slate-700">
        <!--<span class="cursor-pointer text-xl"><Icon icon="carbon:skip-back-filled" /></span>-->
        <span class="cursor-pointer text-3xl" on:click={togglePlay}>
          {#if playingStatus.isPlaying}
            <Icon icon="carbon:pause-filled" />
          {:else}
            <Icon icon="carbon:play-filled-alt" />
          {/if}
        </span>
        <!--<span class="cursor-pointer text-xl"><Icon icon="carbon:skip-forward-filled" /></span>-->
        <Slider bind:value={currentTime} on:input={setTimeSlider}>
          <span class="block w-3 h-3 rounded-full bg-slate-700 cursor-pointer" />
        </Slider>
        <span class="text-slate-700">{secondsToText(playingStatus.duration - playingStatus.currentTime)}</span>
      </div>
    </div>
  </div>
{/if}

<audio bind:this={player} on:play={setPlay} on:pause={setPause} on:timeupdate={setTime} class="hidden" />
