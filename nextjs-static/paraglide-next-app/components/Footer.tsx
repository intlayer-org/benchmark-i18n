"use client";

import Link from "./Link";
import * as m from "../paraglide/messages";

export default function Footer() {
  const footerLinks = [
    {
      label: m["footer.github"](),
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: m["footer.methodology"](),
      href: "/about",
      isInternal: true,
    },
    {
      label: m["footer.contributing"](),
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
              {m["footer.anOpenSourceTestApplication"]()}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {m["footer.resources"]()}
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
              {m["footer.contact"]()}
            </h3>
            <p className="text-sm text-muted-foreground">
              contact@intlayer.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {m["footer.builtWith"]()}
        </div>
      </div>
    </footer>
  );
}
