import { Link, useParams } from "@tanstack/react-router";
import { T } from "gt-react";

export default function Footer() {
  const params = useParams({ strict: false });
  const currentLocale = params.locale ?? "en";

  const footerLinks = [
    {
      label: <T>GitHub</T>,
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: <T>Methodology</T>,
      to: "/$locale/about" as const,
      isInternal: true,
    },
    {
      label: <T>Contributing</T>,
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
                <li key={linkEl.label?.toString() || ""}>
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
              <T>Contact</T>
            </h3>
            <p className="text-sm text-muted-foreground">
              contact@intlayer.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <T>
            i18n Benchmark — Open-source project. Built with React, Vite &
            TanStack Router.
          </T>
        </div>
      </div>
    </footer>
  );
}
