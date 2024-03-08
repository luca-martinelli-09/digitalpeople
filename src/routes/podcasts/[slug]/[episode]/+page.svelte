<script>
  import PlayButton from "$lib/components/PlayButton.svelte";
  import PodcastCard from "$lib/components/PodcastCard.svelte";
  import AvailableLinks from "../../../../lib/components/AvailableLinks.svelte";

  export let data;

  const podcast = data.podcast;
  const episode = data.episode;
  const episodes = data.episodes;
</script>

<article class="flex flex-col-reverse md:flex-row gap-10 rounded-3xl p-10" style="background-color: {podcast.scheme?.[1]};">
  <div class="flex flex-col gap-5">
    <h1 class="font-bold text-3xl sm:text-4xl">{episode.title}</h1>
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
