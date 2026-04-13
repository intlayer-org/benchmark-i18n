import * as m from "../../../paraglide/messages";

export default function UnderstandingImpact() {
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        {m["understanding-impact.understandingTheImpact"]()}
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {m["understanding-impact.whyASingleLargeJson"]()}
        </h3>
        <p className="text-sm text-muted-foreground">
          {m["understanding-impact.manyI18nLibrariesStoreTranslations"]()}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>{m["understanding-impact.theJsonMustBeParsed"]()}</li>
          <li>
            {m["understanding-impact.contextBasedArchitecturesCanCause"]()}
          </li>
          <li>{m["understanding-impact.duringServerSideRenderingThe"]()}</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {m["understanding-impact.theTradeOffsOfDynamic"]()}
        </h3>
        <p className="text-sm text-muted-foreground">
          {m["understanding-impact.splittingTranslationsIntoPerRoute"]()}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              {m["understanding-impact.waterfallRequests"]()}
            </strong>{" "}
            the app must first load, determine the locale, then fetch the right
            chunk — adding network round-trips.
          </li>
          <li>
            <strong className="text-foreground">
              {m["understanding-impact.flashOfUntranslatedContentFouc"]()}
            </strong>{" "}
            users may briefly see translation keys or a fallback language before
            the chunk arrives.
          </li>
          <li>
            <strong className="text-foreground">
              {m["understanding-impact.cacheInvalidation"]()}
            </strong>{" "}
            updating translations requires cache-busting strategies to ensure
            users get fresh content without re-downloading unchanged chunks.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {m["understanding-impact.whatThisBenchmarkMeasures"]()}
        </h3>
        <p className="text-sm text-muted-foreground">
          {m["understanding-impact.thisTestAppProvidesA"]()}
        </p>
      </div>
    </section>
  );
}
