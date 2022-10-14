<script>
  import { onMount } from "svelte";

  export let data;

  const podcast = data.podcast;
  const episodes = data.episodes;

  onMount(async () => {
    document.body.style.backgroundColor = podcast.color;
  });
</script>

<article class="flex flex-col gap-10">
  <div class="flex gap-10">
    <img class="w-60 aspect-square" src={podcast.image} alt={podcast.title} />
    <div>
      <h1 class="font-display uppercase font-bold text-4xl">{podcast.title}</h1>
      <div class="mt-5 text-justify">
        <svelte:component this={podcast.description} />
      </div>
    </div>
  </div>

  <h2 class="font-display font-bold text-3xl">Episodi</h2>

  <div class="flex flex-col gap-2">
    {#each episodes as episode}
      <div class="flex gap-5 p-3 border-2 border-black bg-white">
        <img class="w-40" src={episode.image} alt={episode.title} />
        <div class="flex flex-col gap-3">
          <h3 class="font-display font-bold text-xl">{episode.title}</h3>
          <div class="text-justify text-sm">{@html episode.description}</div>
        </div>
      </div>
    {/each}
  </div>
</article>
