<script>
  let y;
</script>

<svelte:window bind:scrollY={y} />

<svg
  class="w-full top-[-60%] opacity-20 inset-0 z-[-2] absolute pointer-events-none gradient-fade"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:svgjs="http://svgjs.dev/svgjs"
  viewBox="0 0 700 700"
  ><defs
    ><radialGradient id="ffflux-gradient">
      <stop offset="0%" stop-color="hsv(194, 84%, 72%)"></stop>
      <stop offset="100%" stop-color="hsl(214, 100%, 97%)"></stop>
    </radialGradient><filter id="ffflux-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.004 0.006" numOctaves="1" seed="90" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
      <feGaussianBlur stdDeviation="0 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
      <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
      <feColorMatrix type="saturate" values="3" x="0%" y="0%" width="100%" height="100%" in="blend" result="colormatrix"></feColorMatrix>
    </filter></defs
  ><rect width="700" height="700" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)"></rect></svg
>

<div class="z-50 px-3 fixed top-3 left-0 right-0 flex text-base font-semibold">
  <div class="backdrop-blur-lg transition-shadow duration-300 px-3 py-3 rounded-xl w-auto mx-auto bg-white/80 {y > 0 ? 'shadow-md' : 'shadow-md md:shadow-none'}">
    <header class="flex items-center gap-5">
      <h1>
        <a href="/"><img class="h-9" src="/favicon.png" alt="Digital People" /></a>
        <span class="sr-only">Digital People</span>
      </h1>
      <nav>
        <ul class="flex gap-5">
          <li><a href="#chi-siamo">Chi siamo</a></li>
          <li><a href="#podcast">Podcast</a></li>
          <li><a href="#contatti">Contatti</a></li>
        </ul>
      </nav>
      <span class="flex-1" />
    </header>
  </div>
</div>

<div class="h-24" />

<style>
  .gradient-fade {
    mask-image: linear-gradient(to top, transparent 25%, black 75%);
  }
</style>
