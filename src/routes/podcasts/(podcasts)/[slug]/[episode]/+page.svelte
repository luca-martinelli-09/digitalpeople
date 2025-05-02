<script>
  import PlayButton from "$lib/components/PlayButton.svelte";
  import PodcastCard from "$lib/components/PodcastCard.svelte";
  import AvailableLinks from "../../../../../lib/components/AvailableLinks.svelte";
  import { realBaseURI } from "$lib/info";

  export let data;

  const podcast = data.podcast;
  const episode = data.episode;
  const episodes = data.episodes;

  let episodeImageUri = null;

  if (episode.image.startsWith("http")) episodeImageUri = episode.image;
  else if (episode.imageset && episode.imageset.length >= 1) episodeImageUri = realBaseURI + episode.imageset[1];

  if (!episodeImageUri) {
    episodeImageUri = podcast.image.startsWith("http") ? podcast.image : realBaseURI + podcast.imageset[1];
  }
</script>

<svelte:head>
  <title>{episode.title} - {podcast.title} - Digital People</title>

  <meta property="og:title" content={episode.title + " - " + podcast.title} />
  <meta property="og:description" content={episode.summary} />
  <meta property="og:type" content="music.song" />
  <meta property="og:audio" content={episode.audio?.file.startsWith("http") ? episode.audio?.file : realBaseURI + episode.audio?.file} />
  <meta property="og:site_name" content="Digital People" />
  <meta property="og:image" content={episodeImageUri} />
  <meta property="og:locale" content="it_IT" />
</svelte:head>

<article class="flex flex-col-reverse md:flex-row gap-10 rounded-3xl p-10" style="background-color: {podcast.scheme?.[1]};">
  <div class="flex flex-col gap-5">
    <h1 class="font-bold text-3xl">{episode.title}</h1>
    <div class="text-justify description">
      <svelte:component this={episode.description} />
    </div>
    <div class="flex flex-1 items-end">
      <PlayButton {podcast} {episodes} {episode} />
    </div>
    <AvailableLinks {podcast} {episode} />
  </div>
  <div class="flex sm:hidden lg:flex items-start">
    <img class="w-full sm:w-80 sm:h-80 max-w-none rounded-2xl" src={episode.imageset?.[0] || episode.image} alt={episode.title} />
  </div>
</article>

<h2 class="text-center font-bold text-3xl my-10">Podcast</h2>

<PodcastCard {podcast} horizontal={true} />
