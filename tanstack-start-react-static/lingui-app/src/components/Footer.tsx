import { Link, useParams } from "@tanstack/react-router";
import { useLingui } from "@lingui/react";

export default function Footer() {
  const { i18n } = useLingui();

  const params = useParams({ strict: false });
  const currentLocale = params.locale ?? "en";

  const footerLinks = [
    {
      label: i18n._("footer.github"),
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: i18n._("footer.methodology"),
      to: "/$locale/about" as const,
      isInternal: true,
    },
    {
      label: i18n._("footer.contributing"),
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
              {i18n._("footer.anOpenSourceTestApplication")}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {i18n._("footer.resources")}
            </h3>
            <ul className="space-y-1">
              {footerLinks.map((linkEl) => (
                <li key={linkEl.label}>
                  {linkEl.isInternal ? (
                    <Link
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
              {i18n._("footer.contact")}
            </h3>
            <p className="text-sm text-muted-foreground">
              contact@intlayer.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {i18n._("footer.builtWith")}
        </div>
      </div>
    </footer>
  );
}
