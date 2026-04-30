import { useIntlayer } from 'solid-intlayer';
import { For } from 'solid-js';

export default function OpenPositions() {
  const content = useIntlayer('open-positions');

  const openings = [
    {
      title: content().seniorFrontendEngineer.value,
      location: content().remote.value,
      type: 'Full-time',
      dept: content().engineering.value,
      desc: content().buildAndMaintainOurBenchmarking.value,
    },
    {
      title: content().backendEngineer.value,
      location: content().remote.value,
      type: 'Full-time',
      dept: content().engineering.value,
      desc: content().designAndScaleOurCloud.value,
    },
    {
      title: content().technicalWriter.value,
      location: content().remote.value,
      type: 'Part-time',
      dept: content().documentation.value,
      desc: content().createComprehensiveGuidesApiReferences.value,
    },
    {
      title: content().devrelEngineer.value,
      location: content().sanFranciscoRemote.value,
      type: 'Full-time',
      dept: content().community.value,
      desc: content().engageWithTheI18nCommunity.value,
    },
    {
      title: content().qaEngineer.value,
      location: content().remote.value,
      type: 'Full-time',
      dept: content().engineering.value,
      desc: content().ensureTheAccuracyAndReliability.value,
    },
  ];

  return (
    <>
      <h2 class="mb-6 text-2xl font-bold text-foreground">
        {content().openPositions}
      </h2>
      <div class="space-y-4">
        <For each={openings}>
          {(o) => (
            <div class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 class="text-base font-semibold text-foreground">
                  {o.title}
                </h3>
                <p class="text-sm text-muted-foreground">{o.desc}</p>
                <div class="mt-2 flex gap-2">
                  <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    {o.dept}
                  </span>
                  <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    {o.location}
                  </span>
                  <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    {o.type}
                  </span>
                </div>
              </div>
              <button
                type="button"
                class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {content().applyNow}
              </button>
            </div>
          )}
        </For>
      </div>
    </>
  );
}
