import { adapter as jsx } from "@wuchale/jsx";
import { defineConfig } from "wuchale";

export default defineConfig({
  locales: ["en", "es", "fr", "de", "it", "pt", "zh", "ja", "ko", "ru"],
  catalog: {
    path: "./src/locales",
  },
  adapters: {
    shared: jsx({
      id: "shared",
      files: [
        "src/components/Header.tsx",
        "src/components/Footer.tsx",
        "src/components/ThemeToggle.tsx",
        "src/components/MockBanner.tsx",
        "src/components/LocaleSwitcher.tsx",
      ],
      catalog: "locales/shared/",
    }),
    home: jsx({
      id: "home",
      files: ["src/components/pages/home/**/*.tsx", "src/routes/$locale/index.tsx"],
      catalog: "locales/home/",
    }),
    about: jsx({
      id: "about",
      files: ["src/components/pages/about/**/*.tsx", "src/routes/$locale/about.tsx"],
      catalog: "locales/about/",
    }),
    blog: jsx({
      id: "blog",
      files: ["src/components/pages/blog/**/*.tsx", "src/routes/$locale/blog.tsx"],
      catalog: "locales/blog/",
    }),
    careers: jsx({
      id: "careers",
      files: ["src/components/pages/careers/**/*.tsx", "src/routes/$locale/careers.tsx"],
      catalog: "locales/careers/",
    }),
    contact: jsx({
      id: "contact",
      files: ["src/components/pages/contact/**/*.tsx", "src/routes/$locale/contact.tsx"],
      catalog: "locales/contact/",
    }),
    faq: jsx({
      id: "faq",
      files: ["src/components/pages/faq/**/*.tsx", "src/routes/$locale/faq.tsx"],
      catalog: "locales/faq/",
    }),
    pricing: jsx({
      id: "pricing",
      files: ["src/components/pages/pricing/**/*.tsx", "src/routes/$locale/pricing.tsx"],
      catalog: "locales/pricing/",
    }),
    products: jsx({
      id: "products",
      files: ["src/components/pages/products/**/*.tsx", "src/routes/$locale/products.tsx"],
      catalog: "locales/products/",
    }),
    settings: jsx({
      id: "settings",
      files: ["src/components/pages/settings/**/*.tsx", "src/routes/$locale/settings.tsx"],
      catalog: "locales/settings/",
    }),
    team: jsx({
      id: "team",
      files: ["src/components/pages/team/**/*.tsx", "src/routes/$locale/team.tsx"],
      catalog: "locales/team/",
    }),
    route: jsx({
      id: "route",
      files: ["src/routes/__root.tsx", "src/routes/$locale/route.tsx"],
      catalog: "locales/route/",
    }),
  },
});
