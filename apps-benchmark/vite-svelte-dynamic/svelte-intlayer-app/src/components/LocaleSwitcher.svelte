<script lang="ts">
  import { get } from "svelte/store";
  import { getLocaleName } from "$lib/i18n/config";
  import { navigate, pathname } from "$lib/routerStore";
  import { locales } from "intlayer";

  function handleLocaleChange(e: Event) {
    const newLocale = (e.target as HTMLSelectElement).value;
    const nextPath = get(pathname).replace(/^\/[^/]+/, `/${newLocale}`);
    navigate(
      nextPath + window.location.search + window.location.hash,
      false,
    );
  }
</script>

<div class="flex items-center gap-2">
  <select
    value={($pathname.split("/").filter(Boolean)[0] ?? "en")}
    onchange={handleLocaleChange}
    class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none"
  >
    {#each locales as localeItem (localeItem)}
      <option value={localeItem}>{getLocaleName(localeItem)}</option>
    {/each}
  </select>
</div>
