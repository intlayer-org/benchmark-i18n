/**
 * Utilities for browser-side performance measurement and monitoring.
 * These are intended to be used within the benchmark applications.
 */

/**
 * Records and logs hydration duration using the Performance API.
 * This should be called in a \`useEffect\` hook within the root component
 * to mark the end of the hydration process.
 *
 * It expects a "hydration_start" mark to have been previously set
 * (e.g., in a script tag in the document's head).
 */
export function recordHydrationDuration() {
  if (typeof window === "undefined") return;

  console.log("--- BROWSER: RootDocument mounted");

  // 1. Mark the end of the hydration process
  performance.mark("hydration_end");

  // 2. Calculate the duration safely
  try {
    if (performance.getEntriesByName("hydration_start").length > 0) {
      performance.measure(
        "hydration_duration",
        "hydration_start",
        "hydration_end",
      );
      console.log("--- BROWSER: hydration_duration measured");

      // Optional: Log it for better debugging
      const duration =
        performance.getEntriesByName("hydration_duration")[0]?.duration;
      if (duration) {
        console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
      }
    } else {
      console.warn("--- BROWSER: hydration_start NOT FOUND");
    }
  } catch (err) {
    console.warn("Could not measure hydration duration:", err);
  }
}

/**
 * A standard Profiler onRender callback that collects metrics into a global object.
 * This allows automated tests to retrieve render performance data from the browser.
 */
export function onRenderCallback(
  id: string,
  phase: "mount" | "update" | "nested-update",
  actualDuration: number,
) {
  if (typeof window === "undefined") return;
  if (phase === "nested-update") return;

  try {
    window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
    window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
    window.__RENDER_METRICS__[id].push(actualDuration);
  } catch (err) {
    console.warn("onRenderCallback failed:", err);
  }
}

/**
 * Global type augmentation for the window object to include benchmark-specific properties.
 */
declare global {
  interface Window {
    __RENDER_METRICS__: Record<string, number[]>;
  }
}
