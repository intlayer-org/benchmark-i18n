"use client";

import Link from "./Link";
import { T } from "gt-next";

export default function Footer() {
  const footerLinks = [
    {
      label: <T>GitHub</T>,
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: <T>Methodology</T>,
      href: "/about",
      isInternal: true,
    },
    {
      label: <T>Contributing</T>,
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
              <T>i18n Benchmark</T>
            </h3>
            <p className="text-sm text-muted-foreground">
              <T>
                An open-source test application for measuring the real-world
                impact of internationalization libraries on bundle size, loading
                time, and app reactivity.
              </T>
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              <T>Resources</T>
            </h3>
            <ul className="space-y-1">
              {footerLinks.map((linkEl) => (
                <li key={linkEl.href}>
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
              <T>Contact</T>
            </h3>
            <p className="text-sm text-muted-foreground">
              contact@intlayer.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <T>i18n Benchmark — Open-source project. Built with Next.js.</T>
        </div>
      </div>
    </footer>
  );
}

