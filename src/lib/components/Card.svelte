<script>
  import Icon from "@iconify/svelte";

  export let title = null;
  export let icon = null;

  const hasSlots = Object.keys($$slots).filter((slot) => slot !== "image").length > 0;
</script>

<article class="rounded-3xl overflow-hidden border border-gray-100 bg-white h-full flex flex-col items-start">
  <slot name="image" />

  {#if icon || title || hasSlots}
    <div class="p-4 sm:p-6 md:p-10 text-left max-w-full">
      {#if icon || title}
        <span class="flex items-center gap-4">
          {#if icon}
            <Icon class="text-5xl" {icon} />
          {/if}
          <h3 class="text-2xl font-medium text-gray-900">{title}</h3>
        </span>
      {/if}

      <p class="mt-5 leading-relaxed text-gray-700">
        <slot />
      </p>

      <slot name="footer" />
    </div>
  {/if}
</article>
