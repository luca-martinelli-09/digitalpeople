<script>
  import { onMount } from "svelte";

  export let data;

  const podcasts = data.podcasts;

  onMount(async () => {
    document.body.removeAttribute("style");
  });
</script>

<h1 class="font-display uppercase font-bold text-4xl">Podcast</h1>

<div class="grid grid-cols-3 mt-8 gap-5">
  {#each podcasts as podcast}
    <a class="flex flex-col gap-3 p-7 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-solid-y-2 active:translate-y-0 active:shadow-none border-2 border-black" style="background-color: {podcast.color};" href={podcast.external || "/podcasts/" + podcast.id}>
      <img class="w-full aspect-square rounded-lg" src={podcast.image} alt={podcast.title} />
      <h2 class="font-display font-bold text-2xl">{podcast.title}</h2>
      <p class="text-justify">{podcast.summary}</p>
    </a>
  {/each}
</div>
