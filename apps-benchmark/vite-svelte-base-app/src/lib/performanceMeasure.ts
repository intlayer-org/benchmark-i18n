import { onMount } from "svelte";

/** Marks render duration via User Timing API (start in script, end after mount). */
export function usePerformanceMeasure(name: string): void {
  if (typeof performance !== "undefined" && performance.mark) {
    performance.mark(`${name}-start`);
  }

  onMount(() => {
    if (
      typeof performance !== "undefined" &&
      performance.mark &&
      performance.measure
    ) {
      performance.mark(`${name}-end`);
      try {
        performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
      } catch {
        /* marks may be missing or duplicated */
      }
    }
  });
}
