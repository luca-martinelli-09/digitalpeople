<script>
  import { onMount } from "svelte";
  import PodcastCard from "$lib/components/PodcastCard.svelte";

  export let data;

  const podcasts = data.podcasts;

  onMount(async () => {
    document.body.removeAttribute("style");
  });
</script>

<svelte:head>
  <title>Digital People</title>
</svelte:head>

<h1 class="text-center font-bold text-4xl">Podcasts</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-5">
  {#each podcasts as podcast}
    <PodcastCard {podcast} />
  {/each}
</div>
