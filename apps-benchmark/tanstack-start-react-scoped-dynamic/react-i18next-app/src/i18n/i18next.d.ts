import "i18next";
import about from "./locales/en/about.json";
import blog from "./locales/en/blog.json";
import careers from "./locales/en/careers.json";
import contact from "./locales/en/contact.json";
import faq from "./locales/en/faq.json";
import home from "./locales/en/home.json";
import pricing from "./locales/en/pricing.json";
import products from "./locales/en/products.json";
import route from "./locales/en/route.json";
import settings from "./locales/en/settings.json";
import shared from "./locales/en/shared.json";
import team from "./locales/en/team.json";

import { defaultNS } from "./i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      about: typeof about;
      blog: typeof blog;
      careers: typeof careers;
      contact: typeof contact;
      faq: typeof faq;
      home: typeof home;
      pricing: typeof pricing;
      products: typeof products;
      route: typeof route;
      settings: typeof settings;
      shared: typeof shared;
      team: typeof team;
    };
  }
}
