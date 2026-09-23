import { T } from "../../../i18n/tolgee";

export default function UnderstandingImpact() {
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        <T
          keyName="understandingImpact.understandingTheImpact"
        />
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <T
            keyName="understandingImpact.whyASingleLargeJson"
          />
        </h3>
        <p className="text-sm text-muted-foreground">
          <T
            keyName="understandingImpact.manyI18nLibrariesStore"
          />
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <T
              keyName="understandingImpact.theJsonMustBeParsed"
            />
          </li>
          <li>
            <T
              keyName="understandingImpact.contextBasedArchitecturesCan"
            />
          </li>
          <li>
            <T
              keyName="understandingImpact.duringServerSideRenderingThe"
            />
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <T
            keyName="understandingImpact.theTradeOffsOfDynamic"
          />
        </h3>
        <p className="text-sm text-muted-foreground">
          <T
            keyName="understandingImpact.splittingTranslationsIntoPerRoute"
          />
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              <T
                keyName="understandingImpact.waterfallRequests"
              />
            </strong>{" "}
            <T
              keyName="understandingImpact.theAppMustFirstLoad"
            />
          </li>
          <li>
            <strong className="text-foreground">
              <T
                keyName="understandingImpact.flashOfUntranslatedContent"
              />
            </strong>{" "}
            <T
              keyName="understandingImpact.usersMayBrieflySeeTranslation"
            />
          </li>
          <li>
            <strong className="text-foreground">
              <T
                keyName="understandingImpact.cacheInvalidation"
              />
            </strong>{" "}
            <T
              keyName="understandingImpact.updatingTranslationsRequiresCache"
            />
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <T
            keyName="understandingImpact.whatThisBenchmarkMeasures"
          />
        </h3>
        <p className="text-sm text-muted-foreground">
          <T
            keyName="understandingImpact.thisTestAppProvidesA"
          />
        </p>
      </div>
    </section>
  );
}
