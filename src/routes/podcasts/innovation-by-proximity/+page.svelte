<script>
  import { onMount } from "svelte";
  import Card from "../../../lib/components/Card.svelte";
  import ContactForm from "../../../lib/components/ContactForm.svelte";
  import GallerySlider from "../../../lib/components/GallerySlider.svelte";
  import PodcastCard from "../../../lib/components/PodcastCard.svelte";
  import Section from "../../../lib/components/Section.svelte";

  onMount(async () => {
    document.body.removeAttribute("style");
  });
</script>

<svelte:head>
  <title>Innovation by Proximity | Digital People</title>
</svelte:head>

<Section>
  <svg slot="background" viewBox="0 0 700 700" class="opacity-60">
    <defs>
      <radialGradient id="ffflux-gradient-2">
        <stop offset="0%" stop-color="hsl(90, 100%, 12%)"></stop>
        <stop offset="100%" stop-color="hsl(107, 25%, 74%)"></stop>
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

  <img slot="title" class="w-full max-w-[500px] rounded-2xl" src="/podcasts/innovation-by-proximity/cover.1000x1000.webp" alt="Innovation by Proximity" />

  <p class="text-center">
    <strong>Innovation by Proximity</strong> explores how cutting-edge innovation thrives when tech companies, universities, and research hubs <strong>collaborate within shared ecosystems</strong>.
    From the semiconductor revolution in Taiwan to the agritech transformation in Wageningen, this podcast dives into global success stories where physical proximity has fueled scientific
    breakthroughs and technological leaps. Each episode features thought leaders, academics, and industry pioneers discussing how geography, infrastructure, and institutional partnerships shape the
    <strong>future of innovation</strong>.
  </p>
  <div class="flex flex-col md:flex-row gap-2 justify-center">
    <a class="button btn-primary" href="#info">More info</a>
  </div>
</Section>

<Section title="About the podcast" id="info">
  <svg viewBox="0 0 700 700" slot="background">
    <defs>
      <radialGradient id="ffflux-gradient">
        <stop offset="0%" stop-color="hsv(24, 84%, 42%)"></stop>
        <stop offset="100%" stop-color="hsl(14, 100%, 97%)"></stop>
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
      <Card title="Format" icon="fluent:mic-32-regular">
        <p>Interview-based podcast, with <strong>global experts</strong> in tech, policy, and academia.</p>
      </Card>
    </div>
    <div>
      <Card title="Target audience" icon="fluent:megaphone-loud-32-regular">
        <p>University students, researchers, tech professionals, innovation managers.</p>
      </Card>
    </div>
    <div class="col-span-2">
      <Card title="Topics" icon="fluent:building-bank-28-regular">
        <p>
          The podcast will discuss <strong>university-industry partnerships</strong>, regional innovation ecosystems, and the role of physical proximity in R&D, featuring <strong>case studies</strong> from Eindhoven, Leuven, Taiwan, Stuttgart, and more.
        </p>
      </Card>
    </div>
  </div>
</Section>

<Section title="Contacts" id="contatti" highlight>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="grid gap-2">
      <Card title="Email"><a href="mailto:info@digitalpeople.tech">info@digitalpeople.tech</a></Card>
      <!-- <Card title="Instagram"><a href="http://instagram.com/dentrolatecnologia" target="_blank" rel="noopener noreferrer">@dentrolatecnologia</a></Card> -->
    </div>
    <div class="row-span-2">
      <ContactForm />
    </div>
  </div>
</Section>
