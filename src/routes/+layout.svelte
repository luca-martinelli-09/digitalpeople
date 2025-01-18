<script>
  export const prerender = true;

  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />

<main class="mt-10 mb-16 px-3">
  <slot />
</main>

<Footer />
