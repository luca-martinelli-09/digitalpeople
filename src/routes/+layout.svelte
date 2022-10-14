<script>
  export const prerender = true;
  
  import "../app.css";
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<title>Digital People</title>
</svelte:head>

<Header />

<main class="mt-10 mb-16 px-3">
  <div class="max-w-screen-lg mx-auto">
    <slot />
  </div>
</main>

<Footer />