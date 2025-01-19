<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import Card from "../lib/components/Card.svelte";
  import ContactForm from "../lib/components/ContactForm.svelte";
  import GallerySlider from "../lib/components/GallerySlider.svelte";
  import PodcastCard from "../lib/components/PodcastCard.svelte";
  import Section from "../lib/components/Section.svelte";

  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  export let data;

  const podcasts = data.podcasts;

  onMount(async () => {
    document.body.removeAttribute("style");
  });
</script>

<svelte:head>
  <title>Digital People</title>
</svelte:head>

<Section>
  <svg slot="background" viewBox="0 0 700 700" class="opacity-60">
    <defs>
      <radialGradient id="ffflux-gradient-2">
        <stop offset="0%" stop-color="hsl(110, 100%, 72%)"></stop>
        <stop offset="100%" stop-color="hsl(227, 25%, 74%)"></stop>
      </radialGradient>
      <filter id="ffflux-filter-2" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.007 0.006" numOctaves="2" seed="298" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
        <feGaussianBlur stdDeviation="24 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
        <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
        <feColorMatrix type="saturate" values="3" x="0%" y="0%" width="100%" height="100%" in="blend" result="colormatrix"></feColorMatrix>
      </filter>
    </defs>
    <rect width="700" height="700" fill="url(#ffflux-gradient-2)" filter="url(#ffflux-filter-2)"></rect>
  </svg>

  <img slot="title" class="h-24" src="/logo.svg" alt="Digital People" />

  <p class="text-center">
    <strong>Digital People</strong> è un progetto <strong>editoriale</strong> nato a fine 2019 con l’obiettivo iniziale di <strong>produrre</strong> e <strong>distribuire</strong> il podcast
    <a class="text-blue-600 font-bold hover:underline" href="https://www.dentrolatecnologia.it" target="_blank" rel="noopener noreferrer">INSiDER - Dentro la Tecnologia</a>, che, attraverso la voce di
    <strong>Davide Fasoli</strong>
    e il <strong>contributo autoriale</strong> di <strong>Matteo Gallo</strong> e <strong>Luca Martinelli</strong>, tratta del mondo tecnologico in tutte le sue componenti, mettendo particolarmente in
    risalto l'<strong>esperienza utente</strong> e il <strong>rapporto uomo-macchina</strong>.
  </p>
  <div class="flex flex-col md:flex-row gap-2 justify-center">
    <a class="button btn-primary" href="#contatti">Contattaci</a>
    <a class="button" href="#podcast">I nostri podcast</a>
  </div>
</Section>

<div>
  <GallerySlider
    settings={{
      slides: {
        origin: "auto",
        perView: 1.25,
        spacing: 10,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: "auto",
            spacing: 10,
          },
        },
      },
    }}
    imageClassSize="md:min-w-[30rem] aspect-[5/4]"
    images={["/images/10.png", "/images/11.png", "/images/13.png", "/images/14.png", "/images/1.jpg", "/images/2.png", "/images/3.png", "/images/16.png", "/images/12.png", "/images/6.jpg"]}
  />
</div>

<Section title="Chi siamo" id="chi-siamo">
  <svg viewBox="0 0 700 700" slot="background">
    <defs>
      <radialGradient id="ffflux-gradient">
        <stop offset="0%" stop-color="hsv(194, 84%, 72%)"></stop>
        <stop offset="100%" stop-color="hsl(214, 100%, 97%)"></stop>
      </radialGradient>
      <filter id="ffflux-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.004 0.006" numOctaves="1" seed="90" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
        <feGaussianBlur stdDeviation="0 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
        <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
        <feColorMatrix type="saturate" values="3" x="0%" y="0%" width="100%" height="100%" in="blend" result="colormatrix"></feColorMatrix>
      </filter>
    </defs>
    <rect width="700" height="700" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)"></rect>
  </svg>

  <div class="flex flex-col xl:grid grid-cols-2 gap-4 max-w-full">
    <div>
      <Card title="Produttore" icon="fluent:mic-32-regular">
        <p>Realizzando podcast in <strong>alta qualità</strong>, occupandoci della parte <strong>tecnica, organizzativa</strong> e della scelta dell’ospite da intervistare.</p>
        <!-- <div slot="footer" class="mt-5">
          <GallerySlider images={["/images/10.png", "/images/11.png", "/images/13.png", "/images/14.png"]} />
        </div> -->
      </Card>
    </div>
    <div>
      <Card title="Media partner" icon="fluent:megaphone-loud-32-regular">
        <p>Raccontando gli eventi attraverso <strong>podcast con episodi di 10 o 20 minuti</strong> per coinvolgere maggiormente gli ascoltatori.</p>
        <!-- <div slot="footer" class="mt-5">
          <GallerySlider images={["/images/1.jpg", "/images/2.png", "/images/3.png", "/images/16.png", "/images/12.png", "/images/6.jpg"]} />
        </div> -->
      </Card>
    </div>
    <div class="col-span-2">
      <Card title="Network" icon="fluent:molecule-32-regular">
        <p>
          Un <strong>contenitore</strong> dove raccogliere sotto un’unica struttura diversi <strong>creatori di podcast</strong>, seguendoli e <strong>supportandoli</strong> dal punto di vista
          <strong>tecnico</strong>
          e dei
          <strong>contenuti</strong>.
        </p>
      </Card>
    </div>
  </div>
</Section>

<Section title="I nostri podcast" id="podcast" highlight>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {#each podcasts as podcast}
      <PodcastCard {podcast} />
    {/each}
  </div>
</Section>

<Section title="Perché i podcast?" id="perché">
  <svg slot="background" viewBox="0 0 700 700">
    <defs>
      <radialGradient id="ffflux-gradient-3">
        <stop offset="0%" stop-color="hsl(263, 96%, 52%)"></stop>
        <stop offset="100%" stop-color="hsl(227, 100%, 50%)"></stop>
      </radialGradient>
      <filter id="ffflux-filter-3" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.007 0.006" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
        <feGaussianBlur stdDeviation="24 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
        <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
        <feColorMatrix type="saturate" values="3" x="0%" y="0%" width="100%" height="100%" in="blend" result="colormatrix"></feColorMatrix>
      </filter>
    </defs>
    <rect width="700" height="700" fill="url(#ffflux-gradient-3)" filter="url(#ffflux-filter-3)"></rect>
  </svg>
  <div class="flex flex-col xl:grid grid-cols-2 gap-4 max-w-full">
    <div>
      <Card title="Versatili" icon="fluent:headphones-32-regular">
        <p>I podcast possono essere ascoltati <strong>ovunque</strong>, attraverso la propria app <strong>preferita</strong>.</p>
      </Card>
    </div>
    <div>
      <Card title="Costi" icon="fluent:money-24-regular">
        <p>I podcast hanno costi di produzione <strong>ridotti</strong> rispetto a una produzione audiovisiva.</p>
      </Card>
    </div>
    <div class="col-span-2">
      <Card title="Eterogenei" icon="fluent:glance-horizontal-sparkles-24-regular">
        <p>La varietà dei contenuti trattabili <strong>non ha limiti</strong>, passando da temi <strong>generalisti</strong> a podcast <strong>verticali</strong> su una singola tematica.</p>
      </Card>
    </div>
  </div>
</Section>

<Section title="Come produciamo un podcast" id="come">
  <svg slot="background" viewBox="0 0 700 700">
    <defs>
      <radialGradient id="ffflux-gradient-4">
        <stop offset="0%" stop-color="hsl(0, 93%, 29%)"></stop>
        <stop offset="100%" stop-color="hsl(287, 100%, 13%)"></stop>
      </radialGradient>
      <filter id="ffflux-filter-4" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.007 0.006" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
        <feGaussianBlur stdDeviation="24 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
        <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
        <feColorMatrix type="saturate" values="3" x="0%" y="0%" width="100%" height="100%" in="blend" result="colormatrix"></feColorMatrix>
      </filter>
    </defs>
    <rect width="700" height="700" fill="url(#ffflux-gradient-4)" filter="url(#ffflux-filter-4)"></rect>
  </svg>
  <div class="flex flex-col xl:grid grid-cols-2 gap-4 max-w-full">
    <div>
      <Card title="Temi" icon="fluent:glance-horizontal-sparkles-24-regular">
        <p>La prima fase riguarda la scelta dei <strong>temi</strong> da trattare e dell'<strong>ospite</strong> da intervistare.</p>
      </Card>
    </div>
    <div>
      <Card title="Scrittura" icon="fluent:document-edit-24-regular">
        <p>La seconda fase riguarda la <strong>definizione</strong> del o dei contenuti veri e propri e la loro <strong>scrittura</strong>.</p>
      </Card>
    </div>
    <div class="col-span-2">
      <Card title="Registrazione" icon="fluent:mic-32-regular">
        <p>La terza fase è quella della <strong>registrazione</strong> dei contenuti (solo audio o con video), che può avvenire in presenza o a distanza.</p>
      </Card>
    </div>
    <div>
      <Card title="Editing" icon="fluent:headphones-32-regular">
        <p>
          In questa fase ci occupiamo di <strong>realizzare</strong> il contenuto audio vero, pronto per la <strong>pubblicazione</strong> e con un'attenzione particolare su <strong>qualità</strong> e
          <strong>fruibilità</strong>.
        </p>
      </Card>
    </div>
    <div>
      <Card title="Distribuzione" icon="fluent:share-android-24-regular">
        <p>
          La fase finale è quella della <strong>distribuzione</strong> sul nostro sito e su tutte le principali <strong>piattaforme</strong> (Spotify, Apple Podcast, YouTube Music, Amazon Music, ecc.).
        </p>
      </Card>
    </div>
  </div>
</Section>

<Section title="Contattaci" id="contatti" highlight>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="grid gap-2">
      <Card title="Email"><a href="mailto:redazione@dentrolatecnologia.it">redazione@dentrolatecnologia.it</a></Card>
      <!-- <Card title="Instagram"><a href="http://instagram.com/dentrolatecnologia" target="_blank" rel="noopener noreferrer">@dentrolatecnologia</a></Card> -->
    </div>
    <div class="row-span-2">
      <ContactForm />
    </div>
  </div>
</Section>
