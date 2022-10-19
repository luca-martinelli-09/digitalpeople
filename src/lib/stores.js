import { writable } from "svelte/store";

export let playingStatus = writable({
  isPlaying: false,
  currentTime: 0,
  currentPodcast: null,
  currentEpisode: null,
});