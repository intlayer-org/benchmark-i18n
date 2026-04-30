<script lang="ts">
  import { onMount } from "svelte";
  import { useIntlayer } from "svelte-intlayer";

  const tt = useIntlayer("theme-toggle");

  type ThemeMode = "light" | "dark" | "auto";

  function getInitialMode(): ThemeMode {
    if (typeof window === "undefined") return "auto";
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark" || stored === "auto") {
      return stored;
    }
    return "auto";
  }

  function applyThemeMode(mode: ThemeMode) {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolved);

    if (mode === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", mode);
    }

    document.documentElement.style.colorScheme = resolved;
  }

  let mode = $state<ThemeMode>("auto");

  onMount(() => {
    const initialMode = getInitialMode();
    mode = initialMode;
    applyThemeMode(initialMode);
  });

  $effect(() => {
    if (mode !== "auto") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyThemeMode("auto");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  });

  function toggleMode() {
    const nextMode: ThemeMode =
      mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
    mode = nextMode;
    applyThemeMode(nextMode);
    window.localStorage.setItem("theme", nextMode);
  }

  const label = $derived(
    mode === "auto"
      ? $tt.ariaLabelAuto
      : mode === "light"
        ? $tt.ariaLabelLight
        : $tt.ariaLabelDark,
  );

  const buttonText = $derived(
    mode === "auto"
      ? $tt.auto
      : mode === "dark"
        ? $tt.dark
        : $tt.light,
  );
</script>

<button
  type="button"
  onclick={toggleMode}
  aria-label={label}
  title={label}
  class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
>
  {buttonText}
</button>
