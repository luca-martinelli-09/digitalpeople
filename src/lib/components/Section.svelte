<script>
  export let title = undefined;
  export let id = undefined;
  export let highlight = false;
</script>

<section class="my-10 md:my-20 lg:my-40 p-5 md:p-10 lg:p-20 flex flex-col gap-5 md:gap-10 lg:gap-16 w-full max-w-screen-2xl mx-auto rounded-3xl {highlight ? 'bg-white' : ''}" {id}>
  <h2 class="text-center flex justify-center font-semibold text-5xl">
    {title ?? ""}
    <slot name="title"></slot>
  </h2>

  <div class="text-base md:text-lg leading-relaxed text-center flex flex-col gap-5 md:gap-10 lg:gap-16">
    <slot />
  </div>
</section>
