<script>
  let y;
</script>

<svelte:window bind:scrollY={y} />

<div class="z-50 px-3 fixed top-3 left-0 right-0 flex text-base font-semibold">
  <div class="backdrop-blur-lg transition-shadow duration-300 px-3 py-3 rounded-xl w-auto mx-auto bg-white/80 {y > 0 ? 'shadow-md' : 'shadow-md md:shadow-none'}">
    <header class="flex items-center gap-5">
      <h1>
        <a href="/"><img class="h-9" src="/favicon.png" alt="Digital People" /></a>
        <span class="sr-only">Digital People</span>
      </h1>
      <nav class="hidden md:block">
        <ul class="flex gap-5">
          <li><a href="/#chi-siamo">Chi siamo</a></li>
          <li><a href="/#podcast">Podcast</a></li>
          <li><a href="/#contatti">Contatti</a></li>
        </ul>
      </nav>
    </header>
  </div>
</div>

<div class="h-24" />
