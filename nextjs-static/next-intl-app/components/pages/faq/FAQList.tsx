import { useTranslations } from "use-intl";

export default function FAQList() {
  const t = useTranslations("faq-list");

  const faqs = [
    {
      q: t("whatIsI18nBenchmark"),
      a: t("whatIsI18nBenchmarkAnswer"),
    },
    {
      q: t("howAreBenchmarksConducted"),
      a: t("weRunStandardizedTestsIn"),
    },
    {
      q: t("whichLibrariesAreCurrentlySupported"),
      a: t("weSupportReactI18nextReact"),
    },
    {
      q: t("canISubmitMyOwn"),
      a: t("yesCommunityBenchmarkSubmissionsAre"),
    },
    {
      q: t("howOftenAreBenchmarksUpdated"),
      a: t("weReRunAllBenchmarks"),
    },
    {
      q: t("isTheDataReliable"),
      a: t("weFollowRigorousStatisticalMethodology"),
    },
    {
      q: t("doYouOfferConsultingServices"),
      a: t("yesOurEnterprisePlanIncludes"),
    },
    {
      q: t("howCanIContribute"),
      a: t("thereAreManyWaysTo"),
    },
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group rounded-lg border border-border bg-card"
        >
          <summary className="cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors">
            {f.q}
          </summary>
          <p className="px-6 pb-4 text-sm text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
