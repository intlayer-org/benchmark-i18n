import { setLocale as set_shared } from "#/locales/shared.loader";
import { setLocale as set_home } from "#/locales/home.loader";
import { setLocale as set_about } from "#/locales/about.loader";
import { setLocale as set_blog } from "#/locales/blog.loader";
import { setLocale as set_careers } from "#/locales/careers.loader";
import { setLocale as set_contact } from "#/locales/contact.loader";
import { setLocale as set_faq } from "#/locales/faq.loader";
import { setLocale as set_pricing } from "#/locales/pricing.loader";
import { setLocale as set_products } from "#/locales/products.loader";
import { setLocale as set_settings } from "#/locales/settings.loader";
import { setLocale as set_team } from "#/locales/team.loader";
import { setLocale as set_route } from "#/locales/route.loader";

type Locale = Parameters<typeof set_shared>[0];

// Catalogs are bundled per page group; switching locale is synchronous.
export function setAllLocales(locale: string) {
  const l = locale as Locale;
  set_shared(l);
  set_home(l);
  set_about(l);
  set_blog(l);
  set_careers(l);
  set_contact(l);
  set_faq(l);
  set_pricing(l);
  set_products(l);
  set_settings(l);
  set_team(l);
  set_route(l);
}
