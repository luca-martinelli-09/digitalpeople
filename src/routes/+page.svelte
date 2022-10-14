<script>
  import { onMount } from "svelte";

  export let data;

  const podcasts = data.podcasts;

  onMount(async () => {
    document.body.removeAttribute("style");
  });
</script>

<h1 class="font-display uppercase font-bold text-4xl">Podcast</h1>

<div class="grid grid-cols-3 mt-8">
  {#each podcasts as podcast}
    <a class="flex flex-col gap-3 p-7" style="background-color: {podcast.color}; {podcast.fixed ? "border: 5px solid; border-image-slice: 1; border-image-source: linear-gradient(to left, #FF7C7C, #F65A83);" : ""}" href={podcast.external || "/podcasts/" + podcast.id}>
      <img class="w-full aspect-square" src={podcast.image} alt={podcast.title} />
      <h2 class="font-display font-bold text-2xl">{podcast.title}</h2>
      <p class="text-justify">{podcast.summary}</p>
    </a>
  {/each}
</div>
