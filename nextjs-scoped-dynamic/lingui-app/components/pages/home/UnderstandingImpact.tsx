"use client";

import { Trans } from "@lingui/react";

export default function UnderstandingImpact() {
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        <Trans
          id="understanding-impact.understandingTheImpact"
          message="Understanding the Impact"
        />
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <Trans
            id="understanding-impact.whyASingleLargeJson"
            message="Why a single large JSON can hurt performance"
          />
        </h3>
        <p className="text-sm text-muted-foreground">
          <Trans
            id="understanding-impact.manyI18nLibrariesStoreTranslations"
            message="Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
          />
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <Trans
              id="understanding-impact.theJsonMustBeParsed"
              message="The JSON must be parsed on every page load — blocking the main thread."
            />
          </li>
          <li>
            <Trans
              id="understanding-impact.contextBasedArchitecturesCanCause"
              message="Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
            />
          </li>
          <li>
            <Trans
              id="understanding-impact.duringServerSideRenderingThe"
              message="During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
            />
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <Trans
            id="understanding-impact.theTradeOffsOfDynamic"
            message="The trade-offs of dynamic loading"
          />
        </h3>
        <p className="text-sm text-muted-foreground">
          <Trans
            id="understanding-impact.splittingTranslationsIntoPerRoute"
            message="Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
          />
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              <Trans
                id="understanding-impact.waterfallRequests"
                message="Waterfall requests:"
              />
            </strong>{" "}
            <Trans
              id="understanding-impact.waterfallRequestsDesc"
              message="the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
            />
          </li>
          <li>
            <strong className="text-foreground">
              <Trans
                id="understanding-impact.flashOfUntranslatedContentFouc"
                message="Flash of untranslated content (FOUC):"
              />
            </strong>{" "}
            <Trans
              id="understanding-impact.flashOfUntranslatedContentFoucDesc"
              message="users may briefly see translation keys or a fallback language before the chunk arrives."
            />
          </li>
          <li>
            <strong className="text-foreground text-nowrap">
              <Trans
                id="understanding-impact.cacheInvalidation"
                message="Cache invalidation:"
              />
            </strong>{" "}
            <Trans
              id="understanding-impact.cacheInvalidationDesc"
              message="updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
            />
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <Trans
            id="understanding-impact.whatThisBenchmarkMeasures"
            message="What this benchmark measures"
          />
        </h3>
        <p className="text-sm text-muted-foreground">
          <Trans
            id="understanding-impact.thisTestAppProvidesA"
            message="This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
          />
        </p>
      </div>
    </section>
  );
}
