import { Link, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
export default function Footer() {
  const { locale: currentLocale = "en" } = useParams();
  const footerLinks = [
    {
      id: "footer.github",
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      id: "footer.methodology",
      to: `/${currentLocale}/about`,
      isInternal: true,
    },
    {
      id: "footer.contributing",
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
              i18n Benchmark
            </h3>
            <p className="text-sm text-muted-foreground">
              <FormattedMessage id="footer.anOpenSourceTestApplication" />
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              <FormattedMessage id="footer.resources" />
            </h3>
            <ul className="space-y-1">
              {footerLinks.map((linkEl) => (
                <li key={linkEl.id}>
                  {linkEl.isInternal ? (
                    <Link
                      to={linkEl.to as string}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FormattedMessage id={linkEl.id} />
                    </Link>
                  ) : (
                    <a
                      href={linkEl.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FormattedMessage id={linkEl.id} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              <FormattedMessage id="footer.contact" />
            </h3>
            <p className="text-sm text-muted-foreground">
              contact@intlayer.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <FormattedMessage id="footer.builtWith" />
        </div>
      </div>
    </footer>
  );
}
