<script>
  import ToggleTheme from "./ToggleTheme.svelte";
</script>

<header class="flex py-5 px-3 lg:px-5 items-center gap-5">
  <div>
    <img class="h-10 hidden sm:block" src="/logo.svg" alt="Digital People" />
    <img class="h-14 sm:hidden" src="/logo-square.svg" alt="Digital People" />
  </div>
  <nav class="flex flex-1 items-center gap-5 justify-end">
    <a href="#podcasts">Podcast</a>
    <a href="#chi-siamo">Chi siamo</a>
  </nav>
  <div class="pl-5 border-l border-l-slate-200 dark:border-l-slate-700">
    <ToggleTheme />
  </div>
</header>
