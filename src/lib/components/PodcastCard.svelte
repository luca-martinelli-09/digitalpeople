<script>
  export let podcast;
  export let horizontal = false;
</script>

{#if horizontal}
  <a
    target={podcast.external ? "_blank" : ""}
    rel={podcast.external ? "noopener noreferrer" : ""}
    class="flex gap-5 p-7 rounded-3xl text-base text-left"
    style="background-color: {podcast.scheme?.[0]};"
    href={podcast.coming ? null : podcast.external || "/podcasts/" + podcast.id}
    on:click={(e) => podcast.coming && e.preventDefault()}
  >
    <div class="hidden md:flex items-center">
      <img class="h-52 w-52 max-w-none rounded-xl" src={podcast.imageset?.[0] || podcast.image} alt={podcast.title} />
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="font-bold text-xl">{podcast.title}</h2>
      <p class="text-left">{podcast.summary}</p>
      <button class="flex flex-1 items-end" disabled={podcast.coming}>
        <span class="button {podcast.coming ? 'disabled' : ''}">{podcast.coming ? "In arrivo" : "Ascolta ora"}</span>
      </button>
    </div>
  </a>
{:else}
  <a
    target={podcast.external ? "_blank" : ""}
    rel={podcast.external ? "noopener noreferrer" : ""}
    class="flex gap-3 p-7 rounded-3xl flex-col text-base text-left"
    style="background-color: {podcast.scheme?.[0]};"
    href={podcast.coming ? null : podcast.external || "/podcasts/" + podcast.id}
    on:click={(e) => podcast.coming && e.preventDefault()}
  >
    <img class="w-full aspect-square rounded-xl" src={podcast.imageset?.[0] || podcast.image} alt={podcast.title} />
    <h2 class="font-bold text-xl">{podcast.title}</h2>
    <div class="h-20 overflow-hidden relative">
      <p class="text-left">{podcast.summary}</p>
      <span style="color: {podcast.scheme?.[0]};" class="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-current" />
    </div>
    <button class="flex flex-1 mt-2 items-end justify-center" disabled={podcast.coming}>
      <span class="button flex-1 {podcast.coming ? 'disabled' : ''}">{podcast.coming ? "In arrivo" : "Ascolta ora"}</span>
    </button>
  </a>
{/if}
