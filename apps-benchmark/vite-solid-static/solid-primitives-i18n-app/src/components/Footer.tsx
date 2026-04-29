import { A, useParams } from "@solidjs/router";
import { t } from "../i18n";

export default function Footer() {
  const params = useParams<{ locale: string }>();
  const locale = () => params.locale ?? "en";

  return (
    <footer class="mt-20 border-t border-border bg-card">
      <div class="container py-8">
        <div class="grid gap-8 md:grid-cols-3">
          <div>
            <h3 class="mb-2 text-sm font-semibold text-foreground">
              {t("footer.title")}
            </h3>
            <p class="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold text-foreground">
              {t("footer.resources")}
            </h3>
            <ul class="space-y-1">
              <li>
                <a
                  href="https://github.com/intlayer-org/benchmark-i18n"
                  target="_blank"
                  rel="noreferrer"
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.github")}
                </a>
              </li>
              <li>
                <A
                  href={`/${locale()}/about`}
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.methodology")}
                </A>
              </li>
              <li>
                <A
                  href={`/${locale()}/contact`}
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.contributing")}
                </A>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold text-foreground">{t("footer.contact")}</h3>
            <p class="text-sm text-muted-foreground">{t("shared.contactEmail")}</p>
          </div>
        </div>
        <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {t("footer.builtWith")}
        </div>
      </div>
    </footer>
  );
}
