"use client";

import Link from "./Link";
import { useParams, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

import { usePerformanceMeasure } from "../hooks/usePerformanceMeasure";

export default function Header() {
  const t = useTranslations();
  usePerformanceMeasure("Header");
  const [isMockPagesOpen, setIsMockPagesOpen] = useState(false);
  const params = useParams();
  const currentLocale = (params.locale as string) ?? "en";
  const pathname = usePathname();

  const mockPages = [
    { href: "/products", label: t("header.products") },
    { href: "/pricing", label: t("header.pricing") },
    { href: "/team", label: t("header.team") },
    { href: "/blog", label: t("header.blog") },
    { href: "/careers", label: t("header.careers") },
    { href: "/faq", label: t("header.faq") },
    { href: "/contact", label: t("footer.contact") },
    { href: "/settings", label: t("header.settings") },
  ];

  const isExactActive = (href: string) => pathname === href;
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-primary no-underline"
          >
            i18n Bench
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="/"
              className={`nav-link${isExactActive(`/${currentLocale}`) ? " is-active" : ""}`}
            >
              {t("header.home")}
            </Link>
            <Link
              href="/about"
              className={`nav-link${isActive(`/${currentLocale}/about`) ? " is-active" : ""}`}
            >
              {t("footer.methodology")}
            </Link>

            {/* Mock Pages Dropdown */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer"
                onMouseEnter={() => setIsMockPagesOpen(true)}
                onMouseLeave={() => setIsMockPagesOpen(false)}
                onClick={() => setIsMockPagesOpen(!isMockPagesOpen)}
              >
                {t("header.mockPages")}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${isMockPagesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isMockPagesOpen && (
                <div
                  className="absolute left-0 top-full pt-2 w-48"
                  onMouseEnter={() => setIsMockPagesOpen(true)}
                  onMouseLeave={() => setIsMockPagesOpen(false)}
                >
                  <div className="bg-card border border-border rounded-md shadow-lg overflow-hidden py-1">
                    {mockPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        onClick={() => setIsMockPagesOpen(false)}
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/intlayer-org/benchmark-i18n"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition hover:text-foreground"
          >
            <span className="sr-only">{t("header.goToGithub")}</span>
            <svg viewBox="0 0 16 16" aria-hidden="true" width="20" height="20">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
