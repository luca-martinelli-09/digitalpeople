<script>
  import PodcastCard from "$lib/components/PodcastCard.svelte";
  import { onMount } from "svelte";
  import Card from "../lib/components/Card.svelte";
  import GallerySlider from "../lib/components/GallerySlider.svelte";
  import Section from "../lib/components/Section.svelte";
  import ContactForm from "../lib/components/ContactForm.svelte";

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
  <img slot="title" class="h-24" src="/logo.svg" alt="Digital People" />
  <p class="text-center">
    <strong>Digital People</strong> è un progetto nato a <strong>fine 2019</strong> con l’obiettivo iniziale di <strong>produrre</strong> e <strong>distribuire</strong> il podcast
    <a class="text-blue-600 font-bold hover:underline" href="https://www.dentrolatecnologia.it" target="_blank" rel="noopener noreferrer">INSiDER - Dentro la Tecnologia</a>, che, attraverso la voce di
    <strong>Davide Fasoli</strong>
    e il supporto editoriale di <strong>Matteo Gallo</strong> e <strong>Luca Martinelli</strong>, tratta del mondo tecnologico in tutte le sue componenti, mettendo particolarmente in risalto l’<strong
      >esperienza utente</strong
    >
    e il <strong>rapporto uomo-macchina</strong>.
  </p>
  <div class="flex flex-col md:flex-row gap-2 justify-center">
    <a class="button btn-primary" href="#contatti">Contattaci</a>
    <a class="button" href="#podcast">I nostri podcast</a>
  </div>
</Section>

<Section title="Chi siamo" id="chi-siamo">
  <div class="flex flex-col xl:grid grid-cols-2 gap-4 max-w-full">
    <div>
      <Card title="Produttore">
        <p>Realizzando podcast in <strong>alta qualità</strong>, occupandoci della parte <strong>tecnica, organizzativa</strong> e della scelta dell’ospite da intervistare.</p>
        <div slot="footer" class="mt-5">
          <GallerySlider images={["/images/10.png", "/images/11.png", "/images/13.png", "/images/14.png"]} />
        </div>
      </Card>
    </div>
    <div>
      <Card title="Media partner">
        <p>Raccontando gli eventi attraverso <strong>podcast con episodi di 10 o 20 minuti</strong> per coinvolgere maggiormente gli ascoltatori.</p>
        <div slot="footer" class="mt-5">
          <GallerySlider images={["/images/1.jpg", "/images/2.png", "/images/3.png", "/images/16.png", "/images/12.png", "/images/6.jpg"]} />
        </div>
      </Card>
    </div>
    <div class="col-span-2">
      <Card title="Network">
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

<Section title="Perché il podcast?" id="perché">
  <div class="flex flex-col xl:grid grid-cols-2 gap-4 max-w-full">
    <div>
      <Card title="Versatili">
        <p>I podcast possono essere ascoltati <strong>ovunque</strong>, attraverso la propria app <strong>preferita</strong>.</p>
      </Card>
    </div>
    <div>
      <Card title="Costi">
        <p>I podcast hanno costi di produzione <strong>ridotti</strong> rispetto a una produzione audiovisiva.</p>
      </Card>
    </div>
    <div class="col-span-2">
      <Card title="Eterogenei">
        <p>La varietà dei contenuti trattabili <strong>non ha limiti</strong>, passando da temi <strong>generalisti</strong> a podcast <strong>verticali</strong> su una singola tematica.</p>
      </Card>
    </div>
  </div>
</Section>

<Section title="Contattaci" id="contatti" highlight>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="grid gap-2">
      <Card title="Email"><a href="mailto:redazione@dentrolatecnologia.it">redazione@dentrolatecnologia.it</a></Card>
      <Card title="Instagram"><a href="http://instagram.com/dentrolatecnologia" target="_blank" rel="noopener noreferrer">@dentrolatecnologia</a></Card>
    </div>
    <div class="row-span-2">
      <ContactForm />
    </div>
  </div>
</Section>
