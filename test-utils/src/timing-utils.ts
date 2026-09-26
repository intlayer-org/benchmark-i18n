/**
 * Shared timing and statistics utilities for benchmarks.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export interface TimingStats {
  raw: number[];
  avg: number;
  /** Headline value: robust to the odd GC pause or noisy-neighbour spike. */
  median: number;
  p90: number;
  min: number;
  max: number;
  stddev: number;
  /** Coefficient of variation (stddev / avg). Above ~0.15 the run was noisy. */
  cv: number;
}

/** Above this coefficient of variation a run is flagged as noisy. */
export const NOISY_CV_THRESHOLD = 0.15;

const quantile = (sorted: number[], q: number): number => {
  if (sorted.length === 0) return 0;
  const position = (sorted.length - 1) * q;
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (position - lower);
};

/**
 * Computes descriptive statistics for a set of timing samples.
 */
export const aggregateTimingSamples = (samples: number[]): TimingStats => {
  if (samples.length === 0) {
    return {
      raw: [],
      avg: 0,
      median: 0,
      p90: 0,
      min: 0,
      max: 0,
      stddev: 0,
      cv: 0,
    };
  }
  const sorted = [...samples].sort((a, b) => a - b);
  const avg = samples.reduce((acc, val) => acc + val, 0) / samples.length;
  const stddev = Math.sqrt(
    samples.reduce((acc, val) => acc + (val - avg) ** 2, 0) / samples.length
  );
  return {
    raw: samples,
    avg,
    median: quantile(sorted, 0.5),
    p90: quantile(sorted, 0.9),
    min: sorted[0],
    max: sorted[sorted.length - 1],
    stddev,
    cv: avg > 0 ? stddev / avg : 0,
  };
};

/** Logs a GitHub Actions warning when a metric's samples are too spread out. */
export const warnIfNoisy = (label: string, stats: TimingStats): void => {
  if (stats.cv <= NOISY_CV_THRESHOLD) return;
  const prefix = process.env.GITHUB_ACTIONS ? '::warning::' : '⚠ ';
  console.log(
    `${prefix}${label} is noisy: cv ${(stats.cv * 100).toFixed(1)}% (median ${stats.median.toFixed(2)}ms, min ${stats.min.toFixed(2)}, max ${stats.max.toFixed(2)})`
  );
};

/**
 * The machine a timing result was measured on. Hosted CI runners do not all
 * share the same CPU, so a timing number is only comparable to another one
 * measured on the same model.
 */
export const runnerEnvironment = (browserVersion?: string) => {
  const cpus = os.cpus();
  return {
    cpuModel: cpus[0]?.model.trim() ?? 'unknown',
    cpuCount: cpus.length,
    totalMemoryGb: Math.round(os.totalmem() / 1024 ** 3),
    os: `${os.type()} ${os.release()}`,
    runnerImage: process.env.ImageOS
      ? `${process.env.ImageOS} ${process.env.ImageVersion ?? ''}`.trim()
      : undefined,
    browserVersion,
  };
};

/**
 * Timing of the framework's base app measured in the same CI job, so the
 * ratio cancels out most of the difference between runner machines.
 * Read from `$BASELINE_RESULTS_DIR/<file>`; undefined when not set.
 */
export const readBaselineResult = <T>(fileName: string): T | undefined => {
  const directory = process.env.BASELINE_RESULTS_DIR;
  if (!directory) return undefined;
  try {
    return JSON.parse(
      fs.readFileSync(path.join(directory, fileName), 'utf8')
    ) as T;
  } catch {
    return undefined;
  }
};

/** Ratio of two medians, or undefined when the baseline is missing. */
export const ratioToBaseline = (
  stats: TimingStats,
  baseline: Partial<TimingStats> | undefined
): number | undefined => {
  const reference = baseline?.median ?? baseline?.avg;
  if (!reference || !stats.median) return undefined;
  return stats.median / reference;
};

export const NAV_WAIT_UNTIL: 'load' = 'load';
