<script>
  import Icon from "@iconify/svelte";
  import Episode from "$lib/components/Episode.svelte";

  export let data;

  const podcast = data.podcast;
  const episodes = data.episodes;
</script>

<article class="flex flex-col-reverse md:flex-row gap-10 rounded-3xl p-10" style="background-color: {podcast.scheme?.[0]};">
  <div class="flex flex-col gap-5">
    <h1 class="font-bold text-4xl sm:text-5xl">{podcast.title}</h1>
    <div class="text-justify description">
      <svelte:component this={podcast.description} />
    </div>
    <div class="flex flex-col gap-3">
      <h3 class="font-bold text-xl">Disponibile su</h3>
      <div>
        <div class="inline-flex gap-4 rounded-full bg-white p-2 px-3 text-3xl">
          {#if podcast.platforms?.spotify}
            <a href={podcast.platforms.spotify} target="_blank" rel="noopener noreferrer">
              <Icon icon="logos:spotify-icon" />
            </a>
          {/if}
          {#if podcast.platforms?.apple}
            <a href={podcast.platforms.apple} target="_blank" rel="noopener noreferrer">
              <Icon icon="fa6-solid:podcast" style="color: #B150E2" />
            </a>
          {/if}
          {#if podcast.platforms?.google}
            <a href={podcast.platforms.google} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
                class="iconify iconify--logos"
              >
                <path
                  fill="#0066D9"
                  d="M15.5,152.3c-8.6,0-15.5-6.9-15.5-15.5v-17.5c0-8.6,6.9-15.5,15.5-15.5S31,110.7,31,119.3v17.5
                    C31,145.3,24.1,152.3,15.5,152.3z"
                />
                <path
                  fill="#4285F4"
                  d="M240.5,152.3c-8.6,0-15.5-6.9-15.5-15.5v-17.5c0-8.6,6.9-15.5,15.5-15.5c8.6,0,15.5,6.9,15.5,15.5v17.5
                    C256,145.3,249.1,152.3,240.5,152.3z"
                />
                <path
                  fill="#EA4335"
                  d="M71.8,204.8c-8.6,0-15.5-6.9-15.5-15.5v-17.5c0-8.6,6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5v17.5
                    C87.3,197.8,80.3,204.8,71.8,204.8z M71.8,139.5c-8.6,0-15.5-6.9-15.5-15.5V66.7c0-8.6,6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5V124
                    C87.3,132.6,80.3,139.5,71.8,139.5z"
                />
                <path
                  fill="#34A853"
                  d="M184.2,204.8c-8.6,0-15.5-6.9-15.5-15.5V132c0-8.6,6.9-15.5,15.5-15.5c8.6,0,15.5,6.9,15.5,15.5v57.3
                    C199.8,197.8,192.8,204.8,184.2,204.8z M184.2,99.8c-8.6,0-15.5-6.9-15.5-15.5V66.7c0-8.6,6.9-15.5,15.5-15.5
                    c8.6,0,15.5,6.9,15.5,15.5v17.5C199.8,92.8,192.8,99.8,184.2,99.8z"
                />
                <path
                  fill="#FAB908"
                  d="M128,256c-8.6,0-15.5-6.9-15.5-15.5V223c0-8.6,6.9-15.5,15.5-15.5c8.6,0,15.5,6.9,15.5,15.5v17.5
                    C143.5,249.1,136.6,256,128,256z M128,190.2c-8.6,0-15.5-6.9-15.5-15.5V81.3c0-8.6,6.9-15.5,15.5-15.5c8.6,0,15.5,6.9,15.5,15.5
                    v93.4C143.5,183.3,136.6,190.2,128,190.2z M128,48.5c-8.6,0-15.5-6.9-15.5-15.5V15.5C112.5,6.9,119.4,0,128,0
                    c8.6,0,15.5,6.9,15.5,15.5V33C143.5,41.6,136.6,48.5,128,48.5z"
                />
              </svg>
            </a>
          {/if}
          <a href={"/podcasts/" + podcast.id + "/rss"} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa6-solid:square-rss" style="color: #ea6221" />
          </a>
        </div>
      </div>
    </div>
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
