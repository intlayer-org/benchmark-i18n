import { useIntlayer } from "next-intlayer/server";
import { Link } from "./Link";

export default function Footer() {
  const content = useIntlayer("footer");

  const footerLinks = [
    {
      label: content.github,
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: content.methodology,
      href: `/about`,
      isInternal: true,
    },
    {
      label: content.contributing,
      href: `/contact`,
      isInternal: true,
    },
  ];

  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {content.i18nBenchmarkTitle}
            </h3>
            <p className="text-sm text-muted-foreground">
              {content.anOpenSourceTestApplication}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {content.resources}
            </h3>
            <ul className="space-y-1">
              {footerLinks.map((linkEl) => (
                <li key={linkEl.label.value}>
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
              {content.contact}
            </h3>
            <p className="text-sm text-muted-foreground">
              {content.contactEmail}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {content.builtWith}
        </div>
      </div>
    </footer>
  );
}
