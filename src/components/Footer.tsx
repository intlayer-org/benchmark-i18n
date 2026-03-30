const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
  { label: "Accessibility", href: "#" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-foreground">i18n Benchmark</h3>
          <p className="text-sm text-muted-foreground">
            A comprehensive benchmark application for comparing internationalization solutions
            across different frameworks and libraries.
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-foreground">Quick Links</h3>
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
          <p className="text-sm text-muted-foreground">hello@i18nbench.dev</p>
          <p className="text-sm text-muted-foreground">123 Developer Street, San Francisco, CA 94102</p>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
        © 2026 i18n Benchmark. All rights reserved. Built with React, Vite & TanStack Router.
      </div>
    </div>
  </footer>
);
