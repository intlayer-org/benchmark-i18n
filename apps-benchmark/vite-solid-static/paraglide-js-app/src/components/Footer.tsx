import { A, useParams } from "@solidjs/router";
import * as m from "../paraglide/messages";

export default function Footer() {
  const params = useParams<{ locale: string }>();
  const locale = () => params.locale ?? "en";

  return (
    <footer class="mt-20 border-t border-border bg-card">
      <div class="container py-8">
        <div class="grid gap-8 md:grid-cols-3">
          <div>
            <h3 class="mb-2 text-sm font-semibold text-foreground">
              {m.footer_title()}
            </h3>
            <p class="text-sm text-muted-foreground">
              {m.footer_description()}
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold text-foreground">
              {m.footer_resources()}
            </h3>
            <ul class="space-y-1">
              <li>
                <a
                  href="https://github.com/intlayer-org/benchmark-i18n"
                  target="_blank"
                  rel="noreferrer"
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {m.footer_github()}
                </a>
              </li>
              <li>
                <A
                  href={`/${locale()}/about`}
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {m.footer_methodology()}
                </A>
              </li>
              <li>
                <A
                  href={`/${locale()}/contact`}
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {m.footer_contributing()}
                </A>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold text-foreground">{m.footer_contact()}</h3>
            <p class="text-sm text-muted-foreground">{m.shared_contactEmail()}</p>
          </div>
        </div>
        <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {m.footer_builtWith()}
        </div>
      </div>
    </footer>
  );
}
