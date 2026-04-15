"use client";

import { useLayoutEffect } from "react";

/**
 * Custom hook to measure the render-to-layout duration of a component.
 * It uses the Browser User Timing API (performance.mark/measure).
 *
 * @param name The name of the measurement (e.g., 'HeroComponent')
 */
export function usePerformanceMeasure(name: string) {
  // Mark the start of the render phase
  // Note: Since this hook runs inside the component's body,
  // it marks as soon as the functional component is called.
  if (typeof performance !== "undefined" && performance.mark) {
    performance.mark(`${name}-start`);
  }

  useLayoutEffect(() => {
    if (typeof performance !== "undefined" && performance.mark && performance.measure) {
      // Mark the end after the browser has applied DOM mutations
      performance.mark(`${name}-end`);

      try {
        performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
      } catch (e) {
        // Suppress errors if marks are missing or duplicated
      }
    }
  }, [name]);
}
