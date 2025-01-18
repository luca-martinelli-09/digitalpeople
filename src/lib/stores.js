import { writable } from "svelte/store";

export const defaultStatus = {
  isPlaying: false,
  currentTime: 0,
  duration: null,
  currentPodcast: null,
  currentEpisode: null,
}

export let playingStatus = writable({
  ...defaultStatus
});