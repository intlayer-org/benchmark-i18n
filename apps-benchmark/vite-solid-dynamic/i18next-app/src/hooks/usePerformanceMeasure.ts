import { onMount } from "solid-js";

export function usePerformanceMeasure(name: string) {
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
        // Suppress errors if marks are missing or duplicated
      }
    }
  });
}
