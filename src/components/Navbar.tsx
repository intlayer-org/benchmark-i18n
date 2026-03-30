import { NavLink } from "@/components/NavLink";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
  { to: "/team", label: "Team" },
  { to: "/careers", label: "Careers" },
  { to: "/settings", label: "Settings" },
];

export const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
    <div className="container flex h-16 items-center justify-between">
      <span className="text-lg font-bold tracking-tight text-primary">i18n Bench</span>
      <ul className="flex flex-wrap items-center gap-1">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeClassName="bg-accent text-accent-foreground"
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
