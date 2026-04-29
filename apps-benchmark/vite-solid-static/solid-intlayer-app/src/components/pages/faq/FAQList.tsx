import { useIntlayer } from 'solid-intlayer';
import { For } from 'solid-js';

export default function FAQList() {
  const content = useIntlayer('faq-list');

  const faqs = [
    {
      q: content().whatIsI18nBenchmark.value,
      a: content().i18nBenchmarkIsAnOpen.value,
    },
    {
      q: content().howAreBenchmarksConducted.value,
      a: content().weRunStandardizedTestsIn.value,
    },
    {
      q: content().whichLibrariesAreCurrentlySupported.value,
      a: 'We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.',
    },
    {
      q: content().canISubmitMyOwn.value,
      a: content().yesCommunityBenchmarkSubmissionsAre.value,
    },
    {
      q: content().howOftenAreBenchmarksUpdated.value,
      a: content().weReRunAllBenchmarks.value,
    },
    {
      q: content().isTheDataReliable.value,
      a: content().weFollowRigorousStatisticalMethodology.value,
    },
    {
      q: content().doYouOfferConsultingServices.value,
      a: content().yesOurEnterprisePlanIncludes.value,
    },
    {
      q: content().howCanIContribute.value,
      a: content().thereAreManyWaysTo.value,
    },
  ];

  return (
    <div class="mx-auto max-w-3xl space-y-4">
      <For each={faqs}>
        {(f) => (
          <details class="group rounded-lg border border-border bg-card">
            <summary class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50">
              {f.q}
            </summary>
            <p class="px-6 pb-4 text-sm text-muted-foreground">{f.a}</p>
          </details>
        )}
      </For>
    </div>
  );
}
