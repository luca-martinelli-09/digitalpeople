<script>
  export const prerender = true;
  
  import "../app.css";
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<Header />

<main class="my-16 min-h-screen px-3">
  <div class="max-w-screen-lg mx-auto">
    <slot />
  </div>
</main>

<Footer />