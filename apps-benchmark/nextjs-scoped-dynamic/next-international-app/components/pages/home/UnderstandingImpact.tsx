"use client";

import { useScopedI18n } from "../../../locales/client";

export default function UnderstandingImpact() {
  const scopedT = useScopedI18n("understanding-impact");
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        {scopedT("understandingTheImpact")}
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {scopedT("whyASingleLargeJson")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {scopedT("manyI18nLibrariesStoreTranslations")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>{scopedT("theJsonMustBeParsed")}</li>
          <li>{scopedT("contextBasedArchitecturesCanCause")}</li>
          <li>{scopedT("duringServerSideRenderingThe")}</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {scopedT("theTradeOffsOfDynamic")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {scopedT("splittingTranslationsIntoPerRoute")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              {scopedT("waterfallRequests")}
            </strong>{" "}
            {scopedT("theAppMustFirstLoad")}
          </li>
          <li>
            <strong className="text-foreground">
              {scopedT("flashOfUntranslatedContentFouc")}
            </strong>{" "}
            {scopedT("usersMayBrieflySee")}
          </li>
          <li>
            <strong className="text-foreground">
              {scopedT("cacheInvalidation")}
            </strong>{" "}
            {scopedT("updatingTranslationsRequiresCacheBusting")}
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {scopedT("whatThisBenchmarkMeasures")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {scopedT("thisTestAppProvidesA")}
        </p>
      </div>
    </section>
  );
}
