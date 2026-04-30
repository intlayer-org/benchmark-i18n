import { useIntlayer } from 'solid-intlayer';
import { For } from 'solid-js';

export default function ResultsTable() {
  const content = useIntlayer('results-table');

  const results = [
    {
      lib: 'react-i18next',
      size: '42.3 kB',
      time: '0.12ms',
      lazy: content().yes.value,
    },
    {
      lib: 'react-intl',
      size: '38.1 kB',
      time: '0.15ms',
      lazy: content().manual.value,
    },
    {
      lib: 'lingui',
      size: '12.8 kB',
      time: '0.08ms',
      lazy: content().yes.value,
    },
    {
      lib: 'typesafe-i18n',
      size: '5.2 kB',
      time: '0.05ms',
      lazy: 'Built-in',
    },
  ];

  return (
    <section>
      <h2 class="mb-6 text-2xl font-bold text-foreground">
        {content().sampleResults}
      </h2>
      <div class="overflow-x-auto rounded-lg border border-border">
        <table class="w-full text-sm">
          <thead class="bg-muted">
            <tr>
              <th class="px-4 py-3 text-left font-medium text-muted-foreground">
                {content().library}
              </th>
              <th class="px-4 py-3 text-left font-medium text-muted-foreground">
                {content().bundleSize}
              </th>
              <th class="px-4 py-3 text-left font-medium text-muted-foreground">
                {content().lookupTime}
              </th>
              <th class="px-4 py-3 text-left font-medium text-muted-foreground">
                {content().lazyLoading}
              </th>
            </tr>
          </thead>
          <tbody>
            <For each={results}>
              {(r) => (
                <tr class="border-t border-border">
                  <td class="px-4 py-3 font-medium text-foreground">{r.lib}</td>
                  <td class="px-4 py-3 text-muted-foreground">{r.size}</td>
                  <td class="px-4 py-3 text-muted-foreground">{r.time}</td>
                  <td class="px-4 py-3 text-muted-foreground">{r.lazy}</td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </section>
  );
}
