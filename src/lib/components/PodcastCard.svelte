<script>
  export let podcast;
  export let horizontal = false;
</script>

{#if horizontal}
  <a
    target={podcast.external ? "_blank" : ""}
    rel={podcast.external ? "noopener noreferrer" : ""}
    class="flex gap-5 p-7 rounded-3xl"
    style="background-color: {podcast.scheme[0]};"
    href={podcast.external || "/podcasts/" + podcast.id}
  >
    <div class="hidden md:flex items-center">
      <img class="h-52 w-52 max-w-none rounded-xl" src={podcast.image} alt={podcast.title} />
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="font-bold text-2xl">{podcast.title}</h2>
      <p class="text-justify">{podcast.summary}</p>
      <div class="flex flex-1 items-end">
        <span class="button">Ascolta ora</span>
      </div>
    </div>
  </a>
{:else}
  <a
    target={podcast.external ? "_blank" : ""}
    rel={podcast.external ? "noopener noreferrer" : ""}
    class="flex gap-3 p-7 rounded-3xl flex-col"
    style="background-color: {podcast.scheme[0]};"
    href={podcast.external || "/podcasts/" + podcast.id}
  >
    <img class="w-full aspect-square rounded-xl" src={podcast.image} alt={podcast.title} />
    <h2 class="font-bold text-2xl">{podcast.title}</h2>
    <div class="h-20 overflow-hidden relative">
      <p class="text-justify">{podcast.summary}</p>
      <span style="color: {podcast.scheme[0]};" class="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-current" />
    </div>
    <div class="flex flex-1 mt-2 items-end justify-center">
      <span class="button flex-1">Ascolta ora</span>
    </div>
  </a>
{/if}
