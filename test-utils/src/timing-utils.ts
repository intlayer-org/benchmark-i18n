/**
 * Shared timing and statistics utilities for benchmarks.
 */

export interface TimingStats {
  raw: number[];
  avg: number;
  min: number;
  max: number;
}

/**
 * Computes descriptive statistics for a set of timing samples.
 */
export const aggregateTimingSamples = (samples: number[]): TimingStats => ({
  raw: samples,
  avg:
    samples.length > 0
      ? samples.reduce((acc, val) => acc + val, 0) / samples.length
      : 0,
  min: samples.length > 0 ? Math.min(...samples) : 0,
  max: samples.length > 0 ? Math.max(...samples) : 0,
});

export const NAV_WAIT_UNTIL: "load" = "load";
