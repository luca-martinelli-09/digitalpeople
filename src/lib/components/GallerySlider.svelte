<script>
  import Icon from "@iconify/svelte";
  import BiggerPicture from "bigger-picture";
  import "bigger-picture/css";
  import KeenSlider from "keen-slider";
  import "keen-slider/keen-slider.min.css";
  import { onMount } from "svelte";

  export let images;

  let keenSlider;
  let sliderElement;
  let gallery;

  onMount(async () => {
    keenSlider = new KeenSlider(
      sliderElement,
      {
        slides: {
          origin: "auto",
          perView: 1.25,
          spacing: 10,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 10,
            },
          },
        },
      },
      []
    );

    gallery = BiggerPicture({
      target: document.body,
    });
  });

  function openImage(e) {
    gallery.open({
      items: sliderElement.querySelectorAll("a"),
      el: e.currentTarget,
    });
  }
</script>

<div class="max-w-full">
  <div class="flex justify-end items-end gap-2">
    <button class="rounded-full border p-3" on:click={() => keenSlider.prev()}>
      <Icon icon="carbon:chevron-left" />
      <span class="sr-only">Precedente</span>
    </button>
    <button class="rounded-full border p-3" on:click={() => keenSlider.next()}>
      <Icon icon="carbon:chevron-right" />
      <span class="sr-only">Successivo</span>
    </button>
  </div>
  <div class="mt-5">
    <div bind:this={sliderElement} class="keen-slider max-w-full">
      {#each images as image}
        <a class="keen-slider__slide" href={image} data-img={image} data-width="2000" data-height="2000" on:click|preventDefault={openImage}>
          <img loading="lazy" class="w-full h-full aspect-square rounded-xl object-cover" src={image} alt="" />
        </a>
      {/each}
    </div>
  </div>
</div>
