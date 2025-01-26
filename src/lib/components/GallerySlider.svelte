<script>
  import Icon from "@iconify/svelte";
  import BiggerPicture from "bigger-picture";
  import "bigger-picture/css";
  import KeenSlider from "keen-slider";
  import "keen-slider/keen-slider.min.css";
  import { onMount } from "svelte";

  export let images;
  export let settings = {};
  export let imageClassSize = "h-full w-full aspect-square";

  let keenSlider;
  let sliderElement;
  let gallery;

  const defaultSettings = {
    loop: true,
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
  };

  onMount(async () => {
    keenSlider = new KeenSlider(sliderElement, { ...defaultSettings, ...settings }, [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]);

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
        <a class="keen-slider__slide {imageClassSize}" href={image.src} data-img={image.src} data-th data-thumb={image.thumb} data-width="2000" data-height="1600" on:click|preventDefault={openImage}>
          <img class="h-full w-full rounded-xl object-cover" src={image.src} srcset={image.srcset} alt="" />
        </a>
      {/each}
    </div>
  </div>
</div>
