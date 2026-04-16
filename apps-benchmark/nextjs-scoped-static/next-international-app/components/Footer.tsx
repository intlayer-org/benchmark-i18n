"use client";

import Link from "./Link";
import { useScopedI18n } from "../locales/client";

export default function Footer() {
  const scopedT = useScopedI18n("footer");

  const footerLinks = [
    {
      label: scopedT("github"),
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: scopedT("methodology"),
      href: "/about",
      isInternal: true,
    },
    {
      label: scopedT("contributing"),
      href: "/contact",
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
              {scopedT("anOpenSourceTestApplication")}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {scopedT("resources")}
            </h3>
            <ul className="space-y-1">
              {footerLinks.map((linkEl) => (
                <li key={linkEl.label}>
                  {linkEl.isInternal ? (
                    <Link
                      href={linkEl.href!}
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
              {scopedT("contact")}
            </h3>
            <p className="text-sm text-muted-foreground">
              contact@intlayer.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {scopedT("builtWith")}
        </div>
      </div>
    </footer>
  );
}
