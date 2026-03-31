const footerLinks = [
  { label: "GitHub", href: "#" },
  { label: "Methodology", href: "#" },
  { label: "Contributing", href: "#" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-foreground">i18n Benchmark</h3>
          <p className="text-sm text-muted-foreground">
            An open-source test application for measuring the real-world impact of
            internationalization libraries on bundle size, loading time, and app reactivity.
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-foreground">Resources</h3>
          <ul className="space-y-1">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-foreground">Contact</h3>
          <p className="text-sm text-muted-foreground">contact@intlayer.org</p>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
        i18n Benchmark — Open-source project. Built with React, Vite & React Router.
      </div>
    </div>
  </footer>
);
