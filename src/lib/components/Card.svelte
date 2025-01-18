<script>
  export let title;
  export let href;
</script>

<article class="rounded-3xl border border-gray-100 bg-white h-full flex flex-col items-start">
  <slot name="image" />

  <div class="p-4 sm:p-6 md:p-10 text-left max-w-full">
    <a {href}>
      <h3 class="text-2xl font-medium text-gray-900">{title}</h3>
    </a>

    <p class="mt-5 leading-relaxed text-gray-700">
      <slot />
    </p>

    <slot name="footer" />
  </div>
</article>
