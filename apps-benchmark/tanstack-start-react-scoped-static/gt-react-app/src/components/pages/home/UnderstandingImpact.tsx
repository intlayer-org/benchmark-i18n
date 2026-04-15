import { T } from "gt-react";

export default function UnderstandingImpact() {
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        <T>Understanding the Impact</T>
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <T>Why a single large JSON can hurt performance</T>
        </h3>
        <p className="text-sm text-muted-foreground">
          <T>
            Many i18n libraries store translations in a single JSON object
            provided via React context. When this object is large (thousands of
            keys), every component that consumes translations holds a reference
            to the entire dictionary. This means:
          </T>
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <T>
              The JSON must be parsed on every page load — blocking the main
              thread.
            </T>
          </li>
          <li>
            <T>
              Context-based architectures can cause cascading re-renders when the
              locale changes, because every consumer is notified even if their
              specific keys didn't change.
            </T>
          </li>
          <li>
            <T>
              During server-side rendering, the full dictionary is serialized
              into the HTML payload, increasing the document size that must be
              downloaded and hydrated.
            </T>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <T>The trade-offs of dynamic loading</T>
        </h3>
        <p className="text-sm text-muted-foreground">
          <T>
            Splitting translations into per-route or per-namespace chunks can
            dramatically reduce the initial payload. But it introduces new
            challenges:
          </T>
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              <T>Waterfall requests:</T>
            </strong>{" "}
            <T>
              the app must first load, determine the locale, then fetch the
              right chunk — adding network round-trips.
            </T>
          </li>
          <li>
            <strong className="text-foreground">
              <T>Flash of untranslated content (FOUC):</T>
            </strong>{" "}
            <T>
              users may briefly see translation keys or a fallback language
              before the chunk arrives.
            </T>
          </li>
          <li>
            <strong className="text-foreground">
              <T>Cache invalidation:</T>
            </strong>{" "}
            <T>
              updating translations requires cache-busting strategies to ensure
              users get fresh content without re-downloading unchanged chunks.
            </T>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <T>What this benchmark measures</T>
        </h3>
        <p className="text-sm text-muted-foreground">
          <T>
            This test app provides a controlled environment — 10 pages with
            realistic content — to compare i18n libraries across three axes: the
            weight they add to your JavaScript bundle, the time spent parsing
            and rendering translated content, and the effectiveness of their
            code-splitting and lazy-loading strategies. Each library is
            integrated into the same app so results are directly comparable.
          </T>
        </p>
      </div>
    </section>
  );
}
