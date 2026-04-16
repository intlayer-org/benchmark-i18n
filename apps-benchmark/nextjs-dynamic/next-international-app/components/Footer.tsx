"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useI18n } from "../locales/client";

export default function Footer() {
  const t = useI18n();
  const params = useParams();
  const currentLocale = (params.locale as string) ?? "en";

  const footerLinks = [
    {
      label: t("footer.github"),
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: t("footer.methodology"),
      href: `/${currentLocale}/about`,
      isInternal: true,
    },
    {
      label: t("footer.contributing"),
      href: `/${currentLocale}/contact`,
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
              {t("footer.anOpenSourceTestApplication")}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-1">
              {footerLinks.map((linkEl) => (
                <li key={linkEl.href}>
                  {linkEl.isInternal ? (
                    <Link
                      href={linkEl.href}
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
              {t("footer.contact")}
            </h3>
            <p className="text-sm text-muted-foreground">
              contact@intlayer.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {t("footer.builtWith")}
        </div>
      </div>
    </footer>
  );
}
