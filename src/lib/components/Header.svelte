<script>
  let y;
</script>

<svelte:window bind:scrollY={y} />

<div class="z-50 px-3 bg-white fixed left-0 right-0 top-0 transition-shadow duration-300 {y > 0 ? 'md:shadow-md' : ''}">
  <header class="flex py-5 items-center gap-5 max-w-screen-xl mx-auto">
    <a href="/"><img class="h-10" src="/logo.svg" alt="Digital People" /></a>
    <span class="flex-1" />
  </header>
</div>

<div class="h-24" />
