import { useIntlayer } from 'solid-intlayer';
import { A, useParams } from '@solidjs/router';

export default function Footer() {
  const content = useIntlayer('footer');

  const params = useParams<{ locale: string }>();
  const locale = () => params.locale ?? 'en';

  return (
    <footer class="mt-20 border-t border-border bg-card">
      <div class="container py-8">
        <div class="grid gap-8 md:grid-cols-3">
          <div>
            <h3 class="mb-2 text-sm font-semibold text-foreground">
              i18n Benchmark
            </h3>
            <p class="text-sm text-muted-foreground">
              {content().anOpenSourceTestApplication}
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold text-foreground">
              {content().resources}
            </h3>
            <ul class="space-y-1">
              <li>
                <a
                  href="https://github.com/intlayer-org/benchmark-i18n"
                  target="_blank"
                  rel="noreferrer"
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <A
                  href={`/${locale()}/about`}
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content().methodology}
                </A>
              </li>
              <li>
                <A
                  href={`/${locale()}/contact`}
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content().contributing}
                </A>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold text-foreground">
              {content().contact}
            </h3>
            <p class="text-sm text-muted-foreground">contact@intlayer.org</p>
          </div>
        </div>
        <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {content().i18nBenchmarkOpenSourceProject}
        </div>
      </div>
    </footer>
  );
}
