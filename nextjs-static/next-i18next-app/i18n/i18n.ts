import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale } from "./config";

// 1. Statically import all namespaces for all languages
import deAbout from "./locales/de/about.json";
import deBlog from "./locales/de/blog.json";
import deCareers from "./locales/de/careers.json";
import deContact from "./locales/de/contact.json";
import deFaq from "./locales/de/faq.json";
import deHome from "./locales/de/home.json";
import dePricing from "./locales/de/pricing.json";
import deProducts from "./locales/de/products.json";
import deRoute from "./locales/de/route.json";
import deSettings from "./locales/de/settings.json";
import deShared from "./locales/de/shared.json";
import deTeam from "./locales/de/team.json";

import enAbout from "./locales/en/about.json";
import enBlog from "./locales/en/blog.json";
import enCareers from "./locales/en/careers.json";
import enContact from "./locales/en/contact.json";
import enFaq from "./locales/en/faq.json";
import enHome from "./locales/en/home.json";
import enPricing from "./locales/en/pricing.json";
import enProducts from "./locales/en/products.json";
import enRoute from "./locales/en/route.json";
import enSettings from "./locales/en/settings.json";
import enShared from "./locales/en/shared.json";
import enTeam from "./locales/en/team.json";

import esAbout from "./locales/es/about.json";
import esBlog from "./locales/es/blog.json";
import esCareers from "./locales/es/careers.json";
import esContact from "./locales/es/contact.json";
import esFaq from "./locales/es/faq.json";
import esHome from "./locales/es/home.json";
import esPricing from "./locales/es/pricing.json";
import esProducts from "./locales/es/products.json";
import esRoute from "./locales/es/route.json";
import esSettings from "./locales/es/settings.json";
import esShared from "./locales/es/shared.json";
import esTeam from "./locales/es/team.json";

import frAbout from "./locales/fr/about.json";
import frBlog from "./locales/fr/blog.json";
import frCareers from "./locales/fr/careers.json";
import frContact from "./locales/fr/contact.json";
import frFaq from "./locales/fr/faq.json";
import frHome from "./locales/fr/home.json";
import frPricing from "./locales/fr/pricing.json";
import frProducts from "./locales/fr/products.json";
import frRoute from "./locales/fr/route.json";
import frSettings from "./locales/fr/settings.json";
import frShared from "./locales/fr/shared.json";
import frTeam from "./locales/fr/team.json";

import itAbout from "./locales/it/about.json";
import itBlog from "./locales/it/blog.json";
import itCareers from "./locales/it/careers.json";
import itContact from "./locales/it/contact.json";
import itFaq from "./locales/it/faq.json";
import itHome from "./locales/it/home.json";
import itPricing from "./locales/it/pricing.json";
import itProducts from "./locales/it/products.json";
import itRoute from "./locales/it/route.json";
import itSettings from "./locales/it/settings.json";
import itShared from "./locales/it/shared.json";
import itTeam from "./locales/it/team.json";

import jaAbout from "./locales/ja/about.json";
import jaBlog from "./locales/ja/blog.json";
import jaCareers from "./locales/ja/careers.json";
import jaContact from "./locales/ja/contact.json";
import jaFaq from "./locales/ja/faq.json";
import jaHome from "./locales/ja/home.json";
import jaPricing from "./locales/ja/pricing.json";
import jaProducts from "./locales/ja/products.json";
import jaRoute from "./locales/ja/route.json";
import jaSettings from "./locales/ja/settings.json";
import jaShared from "./locales/ja/shared.json";
import jaTeam from "./locales/ja/team.json";

import koAbout from "./locales/ko/about.json";
import koBlog from "./locales/ko/blog.json";
import koCareers from "./locales/ko/careers.json";
import koContact from "./locales/ko/contact.json";
import koFaq from "./locales/ko/faq.json";
import koHome from "./locales/ko/home.json";
import koPricing from "./locales/ko/pricing.json";
import koProducts from "./locales/ko/products.json";
import koRoute from "./locales/ko/route.json";
import koSettings from "./locales/ko/settings.json";
import koShared from "./locales/ko/shared.json";
import koTeam from "./locales/ko/team.json";

import ptAbout from "./locales/pt/about.json";
import ptBlog from "./locales/pt/blog.json";
import ptCareers from "./locales/pt/careers.json";
import ptContact from "./locales/pt/contact.json";
import ptFaq from "./locales/pt/faq.json";
import ptHome from "./locales/pt/home.json";
import ptPricing from "./locales/pt/pricing.json";
import ptProducts from "./locales/pt/products.json";
import ptRoute from "./locales/pt/route.json";
import ptSettings from "./locales/pt/settings.json";
import ptShared from "./locales/pt/shared.json";
import ptTeam from "./locales/pt/team.json";

import ruAbout from "./locales/ru/about.json";
import ruBlog from "./locales/ru/blog.json";
import ruCareers from "./locales/ru/careers.json";
import ruContact from "./locales/ru/contact.json";
import ruFaq from "./locales/ru/faq.json";
import ruHome from "./locales/ru/home.json";
import ruPricing from "./locales/ru/pricing.json";
import ruProducts from "./locales/ru/products.json";
import ruRoute from "./locales/ru/route.json";
import ruSettings from "./locales/ru/settings.json";
import ruShared from "./locales/ru/shared.json";
import ruTeam from "./locales/ru/team.json";

import zhAbout from "./locales/zh/about.json";
import zhBlog from "./locales/zh/blog.json";
import zhCareers from "./locales/zh/careers.json";
import zhContact from "./locales/zh/contact.json";
import zhFaq from "./locales/zh/faq.json";
import zhHome from "./locales/zh/home.json";
import zhPricing from "./locales/zh/pricing.json";
import zhProducts from "./locales/zh/products.json";
import zhRoute from "./locales/zh/route.json";
import zhSettings from "./locales/zh/settings.json";
import zhShared from "./locales/zh/shared.json";
import zhTeam from "./locales/zh/team.json";

export const defaultNS = "shared";
export const namespaces = [
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "home",
  "pricing",
  "products",
  "route",
  "settings",
  "shared",
  "team",
];

i18n.use(initReactI18next).init({
  resources: {
    de: {
      about: deAbout,
      blog: deBlog,
      careers: deCareers,
      contact: deContact,
      faq: deFaq,
      home: deHome,
      pricing: dePricing,
      products: deProducts,
      route: deRoute,
      settings: deSettings,
      shared: deShared,
      team: deTeam,
    },
    en: {
      about: enAbout,
      blog: enBlog,
      careers: enCareers,
      contact: enContact,
      faq: enFaq,
      home: enHome,
      pricing: enPricing,
      products: enProducts,
      route: enRoute,
      settings: enSettings,
      shared: enShared,
      team: enTeam,
    },
    es: {
      about: esAbout,
      blog: esBlog,
      careers: esCareers,
      contact: esContact,
      faq: esFaq,
      home: esHome,
      pricing: esPricing,
      products: esProducts,
      route: esRoute,
      settings: esSettings,
      shared: esShared,
      team: esTeam,
    },
    fr: {
      about: frAbout,
      blog: frBlog,
      careers: frCareers,
      contact: frContact,
      faq: frFaq,
      home: frHome,
      pricing: frPricing,
      products: frProducts,
      route: frRoute,
      settings: frSettings,
      shared: frShared,
      team: frTeam,
    },
    it: {
      about: itAbout,
      blog: itBlog,
      careers: itCareers,
      contact: itContact,
      faq: itFaq,
      home: itHome,
      pricing: itPricing,
      products: itProducts,
      route: itRoute,
      settings: itSettings,
      shared: itShared,
      team: itTeam,
    },
    ja: {
      about: jaAbout,
      blog: jaBlog,
      careers: jaCareers,
      contact: jaContact,
      faq: jaFaq,
      home: jaHome,
      pricing: jaPricing,
      products: jaProducts,
      route: jaRoute,
      settings: jaSettings,
      shared: jaShared,
      team: jaTeam,
    },
    ko: {
      about: koAbout,
      blog: koBlog,
      careers: koCareers,
      contact: koContact,
      faq: koFaq,
      home: koHome,
      pricing: koPricing,
      products: koProducts,
      route: koRoute,
      settings: koSettings,
      shared: koShared,
      team: koTeam,
    },
    pt: {
      about: ptAbout,
      blog: ptBlog,
      careers: ptCareers,
      contact: ptContact,
      faq: ptFaq,
      home: ptHome,
      pricing: ptPricing,
      products: ptProducts,
      route: ptRoute,
      settings: ptSettings,
      shared: ptShared,
      team: ptTeam,
    },
    ru: {
      about: ruAbout,
      blog: ruBlog,
      careers: ruCareers,
      contact: ruContact,
      faq: ruFaq,
      home: ruHome,
      pricing: ruPricing,
      products: ruProducts,
      route: ruRoute,
      settings: ruSettings,
      shared: ruShared,
      team: ruTeam,
    },
    zh: {
      about: zhAbout,
      blog: zhBlog,
      careers: zhCareers,
      contact: zhContact,
      faq: zhFaq,
      home: zhHome,
      pricing: zhPricing,
      products: zhProducts,
      route: zhRoute,
      settings: zhSettings,
      shared: zhShared,
      team: zhTeam,
    },
  },
  lng: defaultLocale,
  fallbackLng: defaultLocale,

  ns: namespaces,
  defaultNS,

  interpolation: {
    escapeValue: false, // React already escapes
  },
  react: {
    useSuspense: false,
  },
  keySeparator: false,
});

export default i18n;
