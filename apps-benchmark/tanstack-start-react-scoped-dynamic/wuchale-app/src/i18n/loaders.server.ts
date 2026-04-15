import { loadLocales } from "wuchale/load-utils/server";
import { locales } from "./config";

// Import all server loaders
import * as about from "#/locales/about.loader.server";
import * as blog from "#/locales/blog.loader.server";
import * as careers from "#/locales/careers.loader.server";
import * as contact from "#/locales/contact.loader.server";
import * as faq from "#/locales/faq.loader.server";
import * as home from "#/locales/home.loader.server";
import * as pricing from "#/locales/pricing.loader.server";
import * as products from "#/locales/products.loader.server";
import * as route from "#/locales/route.loader.server";
import * as settings from "#/locales/settings.loader.server";
import * as shared from "#/locales/shared.loader.server";
import * as team from "#/locales/team.loader.server";

const allLoaders = [
  about,
  blog,
  careers,
  contact,
  faq,
  home,
  pricing,
  products,
  route,
  settings,
  shared,
  team,
];

export async function initServerLoaders() {
  await Promise.all(
    allLoaders.map((l) =>
      loadLocales(l.key, l.loadIDs, l.loadCatalog, locales as unknown as string[]),
    ),
  );
}
