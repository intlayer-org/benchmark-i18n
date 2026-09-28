import { useIntlayer } from "react-intlayer";
import { Link, useParams } from "react-router-dom";

export default function Footer() {
  const content = useIntlayer("app");
  const { locale = "en" } = useParams();
  const currentLocale = locale;

  const footerLinks = [
    {
      label: content.footer.github,
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: content.footer.methodology,
      to: `/${currentLocale}/about`,
      isInternal: true,
    },
    {
      label: content.footer.contributing,
      to: `/${currentLocale}/contact`,
      isInternal: true,
    },
  ];

  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {content.footer.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {content.footer.description}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {content.footer.resources}
            </h3>
            <ul className="space-y-1">
              {footerLinks.map((linkEl) => (
                <li key={linkEl.label.value}>
                  {linkEl.isInternal ? (
                    <Link
                      to={linkEl.to as string}
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
              {content.footer.contact}
            </h3>
            <p className="text-sm text-muted-foreground">
              {content.shared.contactEmail}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {content.footer.builtWith}
        </div>
      </div>
    </footer>
  );
}
