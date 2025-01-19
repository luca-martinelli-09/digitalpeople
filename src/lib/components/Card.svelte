<script>
  import Icon from "@iconify/svelte";

  export let title;
  export let icon = null;
</script>

<article class="rounded-3xl border border-gray-100 bg-white h-full flex flex-col items-start">
  <slot name="image" />

  <div class="p-4 sm:p-6 md:p-10 text-left max-w-full">
    <span class="flex items-center gap-4">
      {#if icon}
        <Icon class="text-5xl" {icon} />
      {/if}
      <h3 class="text-2xl font-medium text-gray-900">{title}</h3>
    </span>

    <p class="mt-5 leading-relaxed text-gray-700">
      <slot />
    </p>

    <slot name="footer" />
  </div>
</article>
