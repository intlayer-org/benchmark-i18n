"use client";

import Link from "./Link";
import { T, useTranslate } from "@/i18n/tolgee";

export default function Footer() {
  const { t } = useTranslate();

  const footerLinks = [
    {
      label: t("footer.github", "GitHub"),
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: t("footer.methodology", "Methodology"),
      href: "/about",
      isInternal: true,
    },
    {
      label: t("footer.contributing", "Contributing"),
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
              <T keyName="hero.title" defaultValue="i18n Benchmark" />
            </h3>
            <p className="text-sm text-muted-foreground">
              <T
                keyName="footer.anOpenSourceTestApplication"
                defaultValue="An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
              />
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              <T keyName="footer.resources" defaultValue="Resources" />
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
              <T keyName="footer.contact" defaultValue="Contact" />
            </h3>
            <p className="text-sm text-muted-foreground">
              <T
                keyName="footer.contactEmail"
                defaultValue="contact@intlayer.org"
              />
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <T
            keyName="footer.builtWith"
            defaultValue="i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router."
          />
        </div>
      </div>
    </footer>
  );
}
