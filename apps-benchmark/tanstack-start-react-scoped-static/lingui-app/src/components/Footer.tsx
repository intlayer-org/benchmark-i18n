import { Link, useParams } from "@tanstack/react-router";
import { useLingui } from "@lingui/react";

export default function Footer() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`footer.${id}`);

  const params = useParams({ strict: false });
  const currentLocale = params.locale ?? "en";

  const footerLinks = [
    {
      label: t("github"),
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: t("methodology"),
      to: "/$locale/about" as const,
      isInternal: true,
    },
    {
      label: t("contributing"),
      to: "/$locale/contact" as const,
      isInternal: true,
    },
  ];

  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              i18n Benchmark
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("anOpenSourceTestApplication")}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {t("resources")}
            </h3>
            <ul className="space-y-1">
              {footerLinks.map((linkEl) => (
                <li key={linkEl.label}>
                  {linkEl.isInternal ? (
                    <Link
                      preload={false}
                      to={linkEl.to as any}
                      params={{ locale: currentLocale } as any}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {linkEl.label}
                    </Link>
                  ) : (
                    <a
                      href={linkEl.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {linkEl.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {t("contact")}
            </h3>
            <p className="text-sm text-muted-foreground">
              contact@intlayer.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {t("builtWith")}
        </div>
      </div>
    </footer>
  );
}
