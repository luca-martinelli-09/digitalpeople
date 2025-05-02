<script>
  import Episode from "$lib/components/Episode.svelte";
  import { realBaseURI } from "$lib/info";
  import AvailableLinks from "../../../../lib/components/AvailableLinks.svelte";

  export let data;

  const podcast = data.podcast;
  const episodes = data.episodes;
</script>

<svelte:head>
  <title>{podcast.title} - Digital People</title>

  <meta property="og:title" content={podcast.title} />
  <meta property="og:description" content={podcast.summary} />
  <meta property="og:type" content="music.playlist" />
  <meta property="og:site_name" content="Digital People" />
  <meta property="og:image" content={podcast.image.startsWith("http") ? podcast.image : realBaseURI + podcast.imageset[1]} />
  <meta property="og:locale" content="it_IT" />
</svelte:head>

<article class="flex flex-col-reverse md:flex-row gap-10 rounded-3xl p-10" style="background-color: {podcast.scheme?.[0]};">
  <div class="flex flex-col gap-5">
    <h1 class="font-bold text-4xl sm:text-5xl">{podcast.title}</h1>
    <div class="text-justify description">
      <svelte:component this={podcast.description} />
    </div>
    <AvailableLinks {podcast} />
  </div>
  <div class="flex sm:hidden lg:flex items-center">
    <img class="w-full sm:w-80 sm:h-80 max-w-none rounded-2xl" src={podcast.imageset?.[0] || podcast.image} alt={podcast.title} />
  </div>
</article>

<h2 class="text-center font-bold text-3xl my-10">Episodi</h2>

<div class="flex flex-col gap-5">
  {#each episodes as _, i}
    <Episode {podcast} {episodes} {i} />
  {/each}
</div>
