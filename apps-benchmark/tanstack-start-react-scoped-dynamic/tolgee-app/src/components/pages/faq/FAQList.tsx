import { useTranslate } from "../../../i18n/tolgee";

export default function FAQList() {
  const { t } = useTranslate();

  const faqs = [
    {
      q: t("faqList.whatIsI18nBenchmark"),
      a: t(
        "faqList.i18nBenchmarkIsAnOpenSource"),
    },
    {
      q: t(
        "faqList.howAreBenchmarksConducted"),
      a: t(
        "faqList.weRunStandardizedTestsInIsolated"),
    },
    {
      q: t(
        "faqList.whichLibrariesAreCurrentlySupported"),
      a: t(
        "faqList.weSupportReactI18nextReactIntl"),
    },
    {
      q: t(
        "faqList.canISubmitMyOwnBenchmarks"),
      a: t(
        "faqList.yesCommunityBenchmarkSubmissionsAre"),
    },
    {
      q: t(
        "faqList.howOftenAreBenchmarksUpdated"),
      a: t(
        "faqList.weReRunAllBenchmarksWeekly"),
    },
    {
      q: t("faqList.isTheDataReliable"),
      a: t(
        "faqList.weFollowRigorousStatisticalMethodologyIncluding"),
    },
    {
      q: t(
        "faqList.doYouOfferConsultingServices"),
      a: t(
        "faqList.yesOurEnterprisePlanIncludesConsulting"),
    },
    {
      q: t("faqList.howCanIContribute"),
      a: t(
        "faqList.thereAreManyWaysToContribute"),
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
