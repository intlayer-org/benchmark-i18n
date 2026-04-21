import React, { Suspense, useCallback, useContext, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import deRoute from "../../../i18n/locales/de/route.json";
import deHeader from "../../../i18n/locales/de/header.json";
import deFooter from "../../../i18n/locales/de/footer.json";
import deThemetoggle from "../../../i18n/locales/de/themeToggle.json";
import deHero from "../../../i18n/locales/de/hero.json";
import deWhyitmatters from "../../../i18n/locales/de/whyItMatters.json";
import deUnderstandingimpact from "../../../i18n/locales/de/understandingImpact.json";
import deResultstable from "../../../i18n/locales/de/resultsTable.json";
import deAboutheader from "../../../i18n/locales/de/aboutHeader.json";
import deAboutgrid from "../../../i18n/locales/de/aboutGrid.json";
import deWhatwemeasure from "../../../i18n/locales/de/whatWeMeasure.json";
import deBlogheader from "../../../i18n/locales/de/blogHeader.json";
import deBloglist from "../../../i18n/locales/de/blogList.json";
import deCareersheader from "../../../i18n/locales/de/careersHeader.json";
import deCareersbenefits from "../../../i18n/locales/de/careersBenefits.json";
import deOpenpositions from "../../../i18n/locales/de/openPositions.json";
import deContactheader from "../../../i18n/locales/de/contactHeader.json";
import deContactform from "../../../i18n/locales/de/contactForm.json";
import deFaqheader from "../../../i18n/locales/de/faqHeader.json";
import deFaqlist from "../../../i18n/locales/de/faqList.json";
import dePricingheader from "../../../i18n/locales/de/pricingHeader.json";
import dePricingtiers from "../../../i18n/locales/de/pricingTiers.json";
import deProductsheader from "../../../i18n/locales/de/productsHeader.json";
import deProductsgrid from "../../../i18n/locales/de/productsGrid.json";
import deSettingsheader from "../../../i18n/locales/de/settingsHeader.json";
import deProfilesection from "../../../i18n/locales/de/profileSection.json";
import dePreferencessection from "../../../i18n/locales/de/preferencesSection.json";
import deApiaccesssection from "../../../i18n/locales/de/apiAccessSection.json";
import deSettingsfooter from "../../../i18n/locales/de/settingsFooter.json";
import deTeamheader from "../../../i18n/locales/de/teamHeader.json";
import deTeamgrid from "../../../i18n/locales/de/teamGrid.json";
import deCommon from "../../../i18n/locales/de/common.json";
import deHome from "../../../i18n/locales/de/home.json";
import deAbout from "../../../i18n/locales/de/about.json";
import deBlog from "../../../i18n/locales/de/blog.json";
import deCareers from "../../../i18n/locales/de/careers.json";
import deContact from "../../../i18n/locales/de/contact.json";
import deFaq from "../../../i18n/locales/de/faq.json";
import dePricing from "../../../i18n/locales/de/pricing.json";
import deProducts from "../../../i18n/locales/de/products.json";
import deSettings from "../../../i18n/locales/de/settings.json";
import deTeam from "../../../i18n/locales/de/team.json";
import esRoute from "../../../i18n/locales/es/route.json";
import esHeader from "../../../i18n/locales/es/header.json";
import esFooter from "../../../i18n/locales/es/footer.json";
import esThemetoggle from "../../../i18n/locales/es/themeToggle.json";
import esHero from "../../../i18n/locales/es/hero.json";
import esWhyitmatters from "../../../i18n/locales/es/whyItMatters.json";
import esUnderstandingimpact from "../../../i18n/locales/es/understandingImpact.json";
import esResultstable from "../../../i18n/locales/es/resultsTable.json";
import esAboutheader from "../../../i18n/locales/es/aboutHeader.json";
import esAboutgrid from "../../../i18n/locales/es/aboutGrid.json";
import esWhatwemeasure from "../../../i18n/locales/es/whatWeMeasure.json";
import esBlogheader from "../../../i18n/locales/es/blogHeader.json";
import esBloglist from "../../../i18n/locales/es/blogList.json";
import esCareersheader from "../../../i18n/locales/es/careersHeader.json";
import esCareersbenefits from "../../../i18n/locales/es/careersBenefits.json";
import esOpenpositions from "../../../i18n/locales/es/openPositions.json";
import esContactheader from "../../../i18n/locales/es/contactHeader.json";
import esContactform from "../../../i18n/locales/es/contactForm.json";
import esFaqheader from "../../../i18n/locales/es/faqHeader.json";
import esFaqlist from "../../../i18n/locales/es/faqList.json";
import esPricingheader from "../../../i18n/locales/es/pricingHeader.json";
import esPricingtiers from "../../../i18n/locales/es/pricingTiers.json";
import esProductsheader from "../../../i18n/locales/es/productsHeader.json";
import esProductsgrid from "../../../i18n/locales/es/productsGrid.json";
import esSettingsheader from "../../../i18n/locales/es/settingsHeader.json";
import esProfilesection from "../../../i18n/locales/es/profileSection.json";
import esPreferencessection from "../../../i18n/locales/es/preferencesSection.json";
import esApiaccesssection from "../../../i18n/locales/es/apiAccessSection.json";
import esSettingsfooter from "../../../i18n/locales/es/settingsFooter.json";
import esTeamheader from "../../../i18n/locales/es/teamHeader.json";
import esTeamgrid from "../../../i18n/locales/es/teamGrid.json";
import esCommon from "../../../i18n/locales/es/common.json";
import esHome from "../../../i18n/locales/es/home.json";
import esAbout from "../../../i18n/locales/es/about.json";
import esBlog from "../../../i18n/locales/es/blog.json";
import esCareers from "../../../i18n/locales/es/careers.json";
import esContact from "../../../i18n/locales/es/contact.json";
import esFaq from "../../../i18n/locales/es/faq.json";
import esPricing from "../../../i18n/locales/es/pricing.json";
import esProducts from "../../../i18n/locales/es/products.json";
import esSettings from "../../../i18n/locales/es/settings.json";
import esTeam from "../../../i18n/locales/es/team.json";
import frRoute from "../../../i18n/locales/fr/route.json";
import frHeader from "../../../i18n/locales/fr/header.json";
import frFooter from "../../../i18n/locales/fr/footer.json";
import frThemetoggle from "../../../i18n/locales/fr/themeToggle.json";
import frHero from "../../../i18n/locales/fr/hero.json";
import frWhyitmatters from "../../../i18n/locales/fr/whyItMatters.json";
import frUnderstandingimpact from "../../../i18n/locales/fr/understandingImpact.json";
import frResultstable from "../../../i18n/locales/fr/resultsTable.json";
import frAboutheader from "../../../i18n/locales/fr/aboutHeader.json";
import frAboutgrid from "../../../i18n/locales/fr/aboutGrid.json";
import frWhatwemeasure from "../../../i18n/locales/fr/whatWeMeasure.json";
import frBlogheader from "../../../i18n/locales/fr/blogHeader.json";
import frBloglist from "../../../i18n/locales/fr/blogList.json";
import frCareersheader from "../../../i18n/locales/fr/careersHeader.json";
import frCareersbenefits from "../../../i18n/locales/fr/careersBenefits.json";
import frOpenpositions from "../../../i18n/locales/fr/openPositions.json";
import frContactheader from "../../../i18n/locales/fr/contactHeader.json";
import frContactform from "../../../i18n/locales/fr/contactForm.json";
import frFaqheader from "../../../i18n/locales/fr/faqHeader.json";
import frFaqlist from "../../../i18n/locales/fr/faqList.json";
import frPricingheader from "../../../i18n/locales/fr/pricingHeader.json";
import frPricingtiers from "../../../i18n/locales/fr/pricingTiers.json";
import frProductsheader from "../../../i18n/locales/fr/productsHeader.json";
import frProductsgrid from "../../../i18n/locales/fr/productsGrid.json";
import frSettingsheader from "../../../i18n/locales/fr/settingsHeader.json";
import frProfilesection from "../../../i18n/locales/fr/profileSection.json";
import frPreferencessection from "../../../i18n/locales/fr/preferencesSection.json";
import frApiaccesssection from "../../../i18n/locales/fr/apiAccessSection.json";
import frSettingsfooter from "../../../i18n/locales/fr/settingsFooter.json";
import frTeamheader from "../../../i18n/locales/fr/teamHeader.json";
import frTeamgrid from "../../../i18n/locales/fr/teamGrid.json";
import frCommon from "../../../i18n/locales/fr/common.json";
import frHome from "../../../i18n/locales/fr/home.json";
import frAbout from "../../../i18n/locales/fr/about.json";
import frBlog from "../../../i18n/locales/fr/blog.json";
import frCareers from "../../../i18n/locales/fr/careers.json";
import frContact from "../../../i18n/locales/fr/contact.json";
import frFaq from "../../../i18n/locales/fr/faq.json";
import frPricing from "../../../i18n/locales/fr/pricing.json";
import frProducts from "../../../i18n/locales/fr/products.json";
import frSettings from "../../../i18n/locales/fr/settings.json";
import frTeam from "../../../i18n/locales/fr/team.json";
import itRoute from "../../../i18n/locales/it/route.json";
import itHeader from "../../../i18n/locales/it/header.json";
import itFooter from "../../../i18n/locales/it/footer.json";
import itThemetoggle from "../../../i18n/locales/it/themeToggle.json";
import itHero from "../../../i18n/locales/it/hero.json";
import itWhyitmatters from "../../../i18n/locales/it/whyItMatters.json";
import itUnderstandingimpact from "../../../i18n/locales/it/understandingImpact.json";
import itResultstable from "../../../i18n/locales/it/resultsTable.json";
import itAboutheader from "../../../i18n/locales/it/aboutHeader.json";
import itAboutgrid from "../../../i18n/locales/it/aboutGrid.json";
import itWhatwemeasure from "../../../i18n/locales/it/whatWeMeasure.json";
import itBlogheader from "../../../i18n/locales/it/blogHeader.json";
import itBloglist from "../../../i18n/locales/it/blogList.json";
import itCareersheader from "../../../i18n/locales/it/careersHeader.json";
import itCareersbenefits from "../../../i18n/locales/it/careersBenefits.json";
import itOpenpositions from "../../../i18n/locales/it/openPositions.json";
import itContactheader from "../../../i18n/locales/it/contactHeader.json";
import itContactform from "../../../i18n/locales/it/contactForm.json";
import itFaqheader from "../../../i18n/locales/it/faqHeader.json";
import itFaqlist from "../../../i18n/locales/it/faqList.json";
import itPricingheader from "../../../i18n/locales/it/pricingHeader.json";
import itPricingtiers from "../../../i18n/locales/it/pricingTiers.json";
import itProductsheader from "../../../i18n/locales/it/productsHeader.json";
import itProductsgrid from "../../../i18n/locales/it/productsGrid.json";
import itSettingsheader from "../../../i18n/locales/it/settingsHeader.json";
import itProfilesection from "../../../i18n/locales/it/profileSection.json";
import itPreferencessection from "../../../i18n/locales/it/preferencesSection.json";
import itApiaccesssection from "../../../i18n/locales/it/apiAccessSection.json";
import itSettingsfooter from "../../../i18n/locales/it/settingsFooter.json";
import itTeamheader from "../../../i18n/locales/it/teamHeader.json";
import itTeamgrid from "../../../i18n/locales/it/teamGrid.json";
import itCommon from "../../../i18n/locales/it/common.json";
import itHome from "../../../i18n/locales/it/home.json";
import itAbout from "../../../i18n/locales/it/about.json";
import itBlog from "../../../i18n/locales/it/blog.json";
import itCareers from "../../../i18n/locales/it/careers.json";
import itContact from "../../../i18n/locales/it/contact.json";
import itFaq from "../../../i18n/locales/it/faq.json";
import itPricing from "../../../i18n/locales/it/pricing.json";
import itProducts from "../../../i18n/locales/it/products.json";
import itSettings from "../../../i18n/locales/it/settings.json";
import itTeam from "../../../i18n/locales/it/team.json";
import jaRoute from "../../../i18n/locales/ja/route.json";
import jaHeader from "../../../i18n/locales/ja/header.json";
import jaFooter from "../../../i18n/locales/ja/footer.json";
import jaThemetoggle from "../../../i18n/locales/ja/themeToggle.json";
import jaHero from "../../../i18n/locales/ja/hero.json";
import jaWhyitmatters from "../../../i18n/locales/ja/whyItMatters.json";
import jaUnderstandingimpact from "../../../i18n/locales/ja/understandingImpact.json";
import jaResultstable from "../../../i18n/locales/ja/resultsTable.json";
import jaAboutheader from "../../../i18n/locales/ja/aboutHeader.json";
import jaAboutgrid from "../../../i18n/locales/ja/aboutGrid.json";
import jaWhatwemeasure from "../../../i18n/locales/ja/whatWeMeasure.json";
import jaBlogheader from "../../../i18n/locales/ja/blogHeader.json";
import jaBloglist from "../../../i18n/locales/ja/blogList.json";
import jaCareersheader from "../../../i18n/locales/ja/careersHeader.json";
import jaCareersbenefits from "../../../i18n/locales/ja/careersBenefits.json";
import jaOpenpositions from "../../../i18n/locales/ja/openPositions.json";
import jaContactheader from "../../../i18n/locales/ja/contactHeader.json";
import jaContactform from "../../../i18n/locales/ja/contactForm.json";
import jaFaqheader from "../../../i18n/locales/ja/faqHeader.json";
import jaFaqlist from "../../../i18n/locales/ja/faqList.json";
import jaPricingheader from "../../../i18n/locales/ja/pricingHeader.json";
import jaPricingtiers from "../../../i18n/locales/ja/pricingTiers.json";
import jaProductsheader from "../../../i18n/locales/ja/productsHeader.json";
import jaProductsgrid from "../../../i18n/locales/ja/productsGrid.json";
import jaSettingsheader from "../../../i18n/locales/ja/settingsHeader.json";
import jaProfilesection from "../../../i18n/locales/ja/profileSection.json";
import jaPreferencessection from "../../../i18n/locales/ja/preferencesSection.json";
import jaApiaccesssection from "../../../i18n/locales/ja/apiAccessSection.json";
import jaSettingsfooter from "../../../i18n/locales/ja/settingsFooter.json";
import jaTeamheader from "../../../i18n/locales/ja/teamHeader.json";
import jaTeamgrid from "../../../i18n/locales/ja/teamGrid.json";
import jaCommon from "../../../i18n/locales/ja/common.json";
import jaHome from "../../../i18n/locales/ja/home.json";
import jaAbout from "../../../i18n/locales/ja/about.json";
import jaBlog from "../../../i18n/locales/ja/blog.json";
import jaCareers from "../../../i18n/locales/ja/careers.json";
import jaContact from "../../../i18n/locales/ja/contact.json";
import jaFaq from "../../../i18n/locales/ja/faq.json";
import jaPricing from "../../../i18n/locales/ja/pricing.json";
import jaProducts from "../../../i18n/locales/ja/products.json";
import jaSettings from "../../../i18n/locales/ja/settings.json";
import jaTeam from "../../../i18n/locales/ja/team.json";
import koRoute from "../../../i18n/locales/ko/route.json";
import koHeader from "../../../i18n/locales/ko/header.json";
import koFooter from "../../../i18n/locales/ko/footer.json";
import koThemetoggle from "../../../i18n/locales/ko/themeToggle.json";
import koHero from "../../../i18n/locales/ko/hero.json";
import koWhyitmatters from "../../../i18n/locales/ko/whyItMatters.json";
import koUnderstandingimpact from "../../../i18n/locales/ko/understandingImpact.json";
import koResultstable from "../../../i18n/locales/ko/resultsTable.json";
import koAboutheader from "../../../i18n/locales/ko/aboutHeader.json";
import koAboutgrid from "../../../i18n/locales/ko/aboutGrid.json";
import koWhatwemeasure from "../../../i18n/locales/ko/whatWeMeasure.json";
import koBlogheader from "../../../i18n/locales/ko/blogHeader.json";
import koBloglist from "../../../i18n/locales/ko/blogList.json";
import koCareersheader from "../../../i18n/locales/ko/careersHeader.json";
import koCareersbenefits from "../../../i18n/locales/ko/careersBenefits.json";
import koOpenpositions from "../../../i18n/locales/ko/openPositions.json";
import koContactheader from "../../../i18n/locales/ko/contactHeader.json";
import koContactform from "../../../i18n/locales/ko/contactForm.json";
import koFaqheader from "../../../i18n/locales/ko/faqHeader.json";
import koFaqlist from "../../../i18n/locales/ko/faqList.json";
import koPricingheader from "../../../i18n/locales/ko/pricingHeader.json";
import koPricingtiers from "../../../i18n/locales/ko/pricingTiers.json";
import koProductsheader from "../../../i18n/locales/ko/productsHeader.json";
import koProductsgrid from "../../../i18n/locales/ko/productsGrid.json";
import koSettingsheader from "../../../i18n/locales/ko/settingsHeader.json";
import koProfilesection from "../../../i18n/locales/ko/profileSection.json";
import koPreferencessection from "../../../i18n/locales/ko/preferencesSection.json";
import koApiaccesssection from "../../../i18n/locales/ko/apiAccessSection.json";
import koSettingsfooter from "../../../i18n/locales/ko/settingsFooter.json";
import koTeamheader from "../../../i18n/locales/ko/teamHeader.json";
import koTeamgrid from "../../../i18n/locales/ko/teamGrid.json";
import koCommon from "../../../i18n/locales/ko/common.json";
import koHome from "../../../i18n/locales/ko/home.json";
import koAbout from "../../../i18n/locales/ko/about.json";
import koBlog from "../../../i18n/locales/ko/blog.json";
import koCareers from "../../../i18n/locales/ko/careers.json";
import koContact from "../../../i18n/locales/ko/contact.json";
import koFaq from "../../../i18n/locales/ko/faq.json";
import koPricing from "../../../i18n/locales/ko/pricing.json";
import koProducts from "../../../i18n/locales/ko/products.json";
import koSettings from "../../../i18n/locales/ko/settings.json";
import koTeam from "../../../i18n/locales/ko/team.json";
import ptRoute from "../../../i18n/locales/pt/route.json";
import ptHeader from "../../../i18n/locales/pt/header.json";
import ptFooter from "../../../i18n/locales/pt/footer.json";
import ptThemetoggle from "../../../i18n/locales/pt/themeToggle.json";
import ptHero from "../../../i18n/locales/pt/hero.json";
import ptWhyitmatters from "../../../i18n/locales/pt/whyItMatters.json";
import ptUnderstandingimpact from "../../../i18n/locales/pt/understandingImpact.json";
import ptResultstable from "../../../i18n/locales/pt/resultsTable.json";
import ptAboutheader from "../../../i18n/locales/pt/aboutHeader.json";
import ptAboutgrid from "../../../i18n/locales/pt/aboutGrid.json";
import ptWhatwemeasure from "../../../i18n/locales/pt/whatWeMeasure.json";
import ptBlogheader from "../../../i18n/locales/pt/blogHeader.json";
import ptBloglist from "../../../i18n/locales/pt/blogList.json";
import ptCareersheader from "../../../i18n/locales/pt/careersHeader.json";
import ptCareersbenefits from "../../../i18n/locales/pt/careersBenefits.json";
import ptOpenpositions from "../../../i18n/locales/pt/openPositions.json";
import ptContactheader from "../../../i18n/locales/pt/contactHeader.json";
import ptContactform from "../../../i18n/locales/pt/contactForm.json";
import ptFaqheader from "../../../i18n/locales/pt/faqHeader.json";
import ptFaqlist from "../../../i18n/locales/pt/faqList.json";
import ptPricingheader from "../../../i18n/locales/pt/pricingHeader.json";
import ptPricingtiers from "../../../i18n/locales/pt/pricingTiers.json";
import ptProductsheader from "../../../i18n/locales/pt/productsHeader.json";
import ptProductsgrid from "../../../i18n/locales/pt/productsGrid.json";
import ptSettingsheader from "../../../i18n/locales/pt/settingsHeader.json";
import ptProfilesection from "../../../i18n/locales/pt/profileSection.json";
import ptPreferencessection from "../../../i18n/locales/pt/preferencesSection.json";
import ptApiaccesssection from "../../../i18n/locales/pt/apiAccessSection.json";
import ptSettingsfooter from "../../../i18n/locales/pt/settingsFooter.json";
import ptTeamheader from "../../../i18n/locales/pt/teamHeader.json";
import ptTeamgrid from "../../../i18n/locales/pt/teamGrid.json";
import ptCommon from "../../../i18n/locales/pt/common.json";
import ptHome from "../../../i18n/locales/pt/home.json";
import ptAbout from "../../../i18n/locales/pt/about.json";
import ptBlog from "../../../i18n/locales/pt/blog.json";
import ptCareers from "../../../i18n/locales/pt/careers.json";
import ptContact from "../../../i18n/locales/pt/contact.json";
import ptFaq from "../../../i18n/locales/pt/faq.json";
import ptPricing from "../../../i18n/locales/pt/pricing.json";
import ptProducts from "../../../i18n/locales/pt/products.json";
import ptSettings from "../../../i18n/locales/pt/settings.json";
import ptTeam from "../../../i18n/locales/pt/team.json";
import ruRoute from "../../../i18n/locales/ru/route.json";
import ruHeader from "../../../i18n/locales/ru/header.json";
import ruFooter from "../../../i18n/locales/ru/footer.json";
import ruThemetoggle from "../../../i18n/locales/ru/themeToggle.json";
import ruHero from "../../../i18n/locales/ru/hero.json";
import ruWhyitmatters from "../../../i18n/locales/ru/whyItMatters.json";
import ruUnderstandingimpact from "../../../i18n/locales/ru/understandingImpact.json";
import ruResultstable from "../../../i18n/locales/ru/resultsTable.json";
import ruAboutheader from "../../../i18n/locales/ru/aboutHeader.json";
import ruAboutgrid from "../../../i18n/locales/ru/aboutGrid.json";
import ruWhatwemeasure from "../../../i18n/locales/ru/whatWeMeasure.json";
import ruBlogheader from "../../../i18n/locales/ru/blogHeader.json";
import ruBloglist from "../../../i18n/locales/ru/blogList.json";
import ruCareersheader from "../../../i18n/locales/ru/careersHeader.json";
import ruCareersbenefits from "../../../i18n/locales/ru/careersBenefits.json";
import ruOpenpositions from "../../../i18n/locales/ru/openPositions.json";
import ruContactheader from "../../../i18n/locales/ru/contactHeader.json";
import ruContactform from "../../../i18n/locales/ru/contactForm.json";
import ruFaqheader from "../../../i18n/locales/ru/faqHeader.json";
import ruFaqlist from "../../../i18n/locales/ru/faqList.json";
import ruPricingheader from "../../../i18n/locales/ru/pricingHeader.json";
import ruPricingtiers from "../../../i18n/locales/ru/pricingTiers.json";
import ruProductsheader from "../../../i18n/locales/ru/productsHeader.json";
import ruProductsgrid from "../../../i18n/locales/ru/productsGrid.json";
import ruSettingsheader from "../../../i18n/locales/ru/settingsHeader.json";
import ruProfilesection from "../../../i18n/locales/ru/profileSection.json";
import ruPreferencessection from "../../../i18n/locales/ru/preferencesSection.json";
import ruApiaccesssection from "../../../i18n/locales/ru/apiAccessSection.json";
import ruSettingsfooter from "../../../i18n/locales/ru/settingsFooter.json";
import ruTeamheader from "../../../i18n/locales/ru/teamHeader.json";
import ruTeamgrid from "../../../i18n/locales/ru/teamGrid.json";
import ruCommon from "../../../i18n/locales/ru/common.json";
import ruHome from "../../../i18n/locales/ru/home.json";
import ruAbout from "../../../i18n/locales/ru/about.json";
import ruBlog from "../../../i18n/locales/ru/blog.json";
import ruCareers from "../../../i18n/locales/ru/careers.json";
import ruContact from "../../../i18n/locales/ru/contact.json";
import ruFaq from "../../../i18n/locales/ru/faq.json";
import ruPricing from "../../../i18n/locales/ru/pricing.json";
import ruProducts from "../../../i18n/locales/ru/products.json";
import ruSettings from "../../../i18n/locales/ru/settings.json";
import ruTeam from "../../../i18n/locales/ru/team.json";
import zhRoute from "../../../i18n/locales/zh/route.json";
import zhHeader from "../../../i18n/locales/zh/header.json";
import zhFooter from "../../../i18n/locales/zh/footer.json";
import zhThemetoggle from "../../../i18n/locales/zh/themeToggle.json";
import zhHero from "../../../i18n/locales/zh/hero.json";
import zhWhyitmatters from "../../../i18n/locales/zh/whyItMatters.json";
import zhUnderstandingimpact from "../../../i18n/locales/zh/understandingImpact.json";
import zhResultstable from "../../../i18n/locales/zh/resultsTable.json";
import zhAboutheader from "../../../i18n/locales/zh/aboutHeader.json";
import zhAboutgrid from "../../../i18n/locales/zh/aboutGrid.json";
import zhWhatwemeasure from "../../../i18n/locales/zh/whatWeMeasure.json";
import zhBlogheader from "../../../i18n/locales/zh/blogHeader.json";
import zhBloglist from "../../../i18n/locales/zh/blogList.json";
import zhCareersheader from "../../../i18n/locales/zh/careersHeader.json";
import zhCareersbenefits from "../../../i18n/locales/zh/careersBenefits.json";
import zhOpenpositions from "../../../i18n/locales/zh/openPositions.json";
import zhContactheader from "../../../i18n/locales/zh/contactHeader.json";
import zhContactform from "../../../i18n/locales/zh/contactForm.json";
import zhFaqheader from "../../../i18n/locales/zh/faqHeader.json";
import zhFaqlist from "../../../i18n/locales/zh/faqList.json";
import zhPricingheader from "../../../i18n/locales/zh/pricingHeader.json";
import zhPricingtiers from "../../../i18n/locales/zh/pricingTiers.json";
import zhProductsheader from "../../../i18n/locales/zh/productsHeader.json";
import zhProductsgrid from "../../../i18n/locales/zh/productsGrid.json";
import zhSettingsheader from "../../../i18n/locales/zh/settingsHeader.json";
import zhProfilesection from "../../../i18n/locales/zh/profileSection.json";
import zhPreferencessection from "../../../i18n/locales/zh/preferencesSection.json";
import zhApiaccesssection from "../../../i18n/locales/zh/apiAccessSection.json";
import zhSettingsfooter from "../../../i18n/locales/zh/settingsFooter.json";
import zhTeamheader from "../../../i18n/locales/zh/teamHeader.json";
import zhTeamgrid from "../../../i18n/locales/zh/teamGrid.json";
import zhCommon from "../../../i18n/locales/zh/common.json";
import zhHome from "../../../i18n/locales/zh/home.json";
import zhAbout from "../../../i18n/locales/zh/about.json";
import zhBlog from "../../../i18n/locales/zh/blog.json";
import zhCareers from "../../../i18n/locales/zh/careers.json";
import zhContact from "../../../i18n/locales/zh/contact.json";
import zhFaq from "../../../i18n/locales/zh/faq.json";
import zhPricing from "../../../i18n/locales/zh/pricing.json";
import zhProducts from "../../../i18n/locales/zh/products.json";
import zhSettings from "../../../i18n/locales/zh/settings.json";
import zhTeam from "../../../i18n/locales/zh/team.json";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	}
	return a;
};
var _a;
function _mergeNamespaces(n, m) {
	for (var i = 0; i < m.length; i++) {
		const e = m[i];
		if (typeof e !== "string" && !Array.isArray(e)) {
			for (const k in e) if (k !== "default" && !(k in n)) {
				const d = Object.getOwnPropertyDescriptor(e, k);
				if (d) Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: () => e[k]
				});
			}
		}
	}
	return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function isPromise(value) {
	return Boolean(value && typeof value.then === "function");
}
function valueOrPromise(value, callback) {
	if (isPromise(value)) return Promise.resolve(value).then(callback);
	else return callback(value);
}
function handleRegularOrAsyncErr(onError, createError, callback) {
	function handle(e) {
		const error = createError(e);
		onError.emit(error);
		console.error(error);
		throw error;
	}
	try {
		const result = callback();
		if (isPromise(result)) return result.catch(handle);
		return result;
	} catch (e) {
		handle(e);
	}
}
function missingOptionError(option) {
	const options = (Array.isArray(option) ? option : [option]).map((val) => `'${val}'`);
	const lastPart = options.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...options.slice(0, -2), lastPart].join(", ")} option`;
}
function isObject(item) {
	return typeof item === "object" && !Array.isArray(item) && item !== null;
}
function getFallback(value) {
	if (typeof value === "string") return [value];
	if (Array.isArray(value)) return value;
}
function getFallbackArray(value) {
	return getFallback(value) || [];
}
function getFallbackFromStruct(language, fallbackLanguage) {
	if (isObject(fallbackLanguage)) return getFallbackArray(fallbackLanguage === null || fallbackLanguage === void 0 ? void 0 : fallbackLanguage[language]);
	else return getFallbackArray(fallbackLanguage);
}
function unique(arr) {
	return Array.from(new Set(arr));
}
function sanitizeUrl(url) {
	return url ? url.replace(/\/+$/, "") : url;
}
function getErrorMessage(error) {
	if (typeof error === "string") return error;
	else if (typeof (error === null || error === void 0 ? void 0 : error.message) === "string") return error.message;
}
var defaultFetchFunction = (input, options) => fetch(input, options);
function headersInitToRecord(headersInit) {
	return Object.fromEntries(new Headers(headersInit).entries());
}
var createFetchFunction = (fetchFn = defaultFetchFunction) => {
	return (input, init) => {
		let headers = headersInitToRecord(init === null || init === void 0 ? void 0 : init.headers);
		if (headers["x-api-key"]) headers = Object.assign({
			"x-tolgee-sdk-type": "JS",
			"x-tolgee-sdk-version": "prerelease"
		}, headers);
		return fetchFn(input, Object.assign(Object.assign({}, init), { headers }));
	};
};
var EventEmitter = (type, isActive) => {
	let handlers = [];
	return {
		listen(handler) {
			const handlerWrapper = (e) => {
				handler(e);
			};
			handlers.push(handlerWrapper);
			return { unsubscribe() {
				handlers = handlers.filter((i) => handlerWrapper !== i);
			} };
		},
		emit(data) {
			if (isActive()) handlers.forEach((handler) => handler({
				type,
				value: data
			}));
		}
	};
};
function EventEmitterCombined(isActive) {
	let handlers = [];
	let queue = [];
	function solveQueue() {
		if (queue.length === 0) return;
		const queueCopy = queue;
		queue = [];
		handlers.forEach((handler) => {
			handler(queueCopy);
		});
	}
	return Object.freeze({
		listen(handler) {
			const handlerWrapper = (events) => {
				handler(events);
			};
			handlers.push(handlerWrapper);
			return { unsubscribe() {
				handlers = handlers.filter((i) => handlerWrapper !== i);
			} };
		},
		emit(e, delayed) {
			if (isActive()) {
				if (isActive()) {
					queue.push(e);
					if (!delayed) solveQueue();
					else setTimeout(solveQueue, 0);
				}
			}
		}
	});
}
function Events() {
	let emitterActive = true;
	function isActive() {
		return emitterActive;
	}
	const self2 = Object.freeze({
		onPendingLanguageChange: EventEmitter("pendingLanguage", isActive),
		onLanguageChange: EventEmitter("language", isActive),
		onLoadingChange: EventEmitter("loading", isActive),
		onFetchingChange: EventEmitter("fetching", isActive),
		onInitialLoaded: EventEmitter("initialLoad", isActive),
		onRunningChange: EventEmitter("running", isActive),
		onCacheChange: EventEmitter("cache", isActive),
		onPermanentChange: EventEmitter("permanentChange", isActive),
		onError: EventEmitter("error", isActive),
		onUpdate: EventEmitterCombined(isActive),
		setEmitterActive(active) {
			emitterActive = active;
		},
		on: (event, handler) => {
			switch (event) {
				case "pendingLanguage": return self2.onPendingLanguageChange.listen(handler);
				case "language": return self2.onLanguageChange.listen(handler);
				case "loading": return self2.onLoadingChange.listen(handler);
				case "fetching": return self2.onFetchingChange.listen(handler);
				case "initialLoad": return self2.onInitialLoaded.listen(handler);
				case "running": return self2.onRunningChange.listen(handler);
				case "cache": return self2.onCacheChange.listen(handler);
				case "update": return self2.onUpdate.listen(handler);
				case "permanentChange": return self2.onPermanentChange.listen(handler);
				case "error": return self2.onError.listen(handler);
			}
		}
	});
	self2.onInitialLoaded.listen((e) => self2.onUpdate.emit(e, false));
	self2.onLanguageChange.listen((e) => self2.onUpdate.emit(e, false));
	self2.onCacheChange.listen((e) => self2.onUpdate.emit(e, true));
	return self2;
}
var RecordFetchError = class extends Error {
	constructor(descriptor, cause, isDev = false) {
		const { language, namespace } = descriptor;
		super(`Tolgee: Failed to fetch record for "${language}"${namespace && ` and "${namespace}"`}`);
		this.cause = cause;
		this.isDev = isDev;
		this.name = "RecordFetchError";
		this.language = language;
		this.namespace = namespace;
	}
};
var LanguageDetectorError = class extends Error {
	constructor(message, cause) {
		super(message);
		this.cause = cause;
		this.name = "LanguageDetectorError";
	}
};
var LanguageStorageError = class extends Error {
	constructor(message, cause) {
		super(message);
		this.cause = cause;
		this.name = "LanguageStorageError";
	}
};
var flattenTranslationsToMap = (data) => {
	const result = /* @__PURE__ */ new Map();
	Object.entries(data).forEach(([key, value]) => {
		if (value === void 0 || value === null) return;
		if (typeof value === "object") {
			flattenTranslationsToMap(value).forEach((flatValue, flatKey) => {
				result.set(key + "." + flatKey, flatValue);
			});
			return;
		}
		result.set(key, value);
	});
	return result;
};
var flattenTranslations = (data) => {
	return Object.fromEntries(flattenTranslationsToMap(data).entries());
};
var decodeCacheKey = (key) => {
	const [firstPart, ...rest] = key.split(":");
	return {
		language: firstPart,
		namespace: rest.join(":") || ""
	};
};
var encodeCacheKey = ({ language, namespace }) => {
	if (namespace) return `${language}:${namespace}`;
	else return language;
};
function Cache(events, backendGetRecord, backendGetDevRecord, withDefaultNs, isInitialLoading, fetchingObserver, loadingObserver) {
	const asyncRequests = /* @__PURE__ */ new Map();
	const cache = /* @__PURE__ */ new Map();
	let staticData = {};
	let version = 0;
	function addRecordInternal(descriptor, data, recordVersion) {
		const cacheKey = encodeCacheKey(descriptor);
		cache.set(cacheKey, {
			data: flattenTranslations(data),
			version: recordVersion
		});
		events.onCacheChange.emit(decodeCacheKey(cacheKey));
	}
	async function fetchProd(keyObject) {
		function handleError(e) {
			const error = new RecordFetchError(keyObject, e);
			events.onError.emit(error);
			console.error(error);
			throw error;
		}
		const dataFromBackend = backendGetRecord(keyObject);
		if (isPromise(dataFromBackend)) {
			const result = await dataFromBackend.catch(handleError);
			if (result !== void 0) return result;
		}
		const staticDataValue = staticData[encodeCacheKey(keyObject)];
		if (typeof staticDataValue === "function") try {
			return await staticDataValue();
		} catch (e) {
			handleError(e);
		}
		else return staticDataValue;
	}
	async function fetchData(keyObject, isDev) {
		let result = void 0;
		if (isDev) try {
			result = await backendGetDevRecord(keyObject);
		} catch (e) {
			const error = new RecordFetchError(keyObject, e, true);
			events.onError.emit(error);
			console.warn(error);
		}
		if (!result) result = await fetchProd(keyObject);
		return result;
	}
	const self2 = Object.freeze({
		addStaticData(data) {
			if (Array.isArray(data)) for (const record of data) {
				const key = encodeCacheKey(record);
				const existing = cache.get(key);
				if (!existing || existing.version === 0) addRecordInternal(record, flattenTranslations(record.data), 0);
			}
			else if (data) {
				staticData = Object.assign(Object.assign({}, staticData), data);
				Object.entries(data).forEach(([key, value]) => {
					if (typeof value !== "function") {
						const descriptor = decodeCacheKey(key);
						const existing = cache.get(key);
						if (!existing || existing.version === 0) addRecordInternal(descriptor, flattenTranslations(value), 0);
					}
				});
			}
		},
		invalidate() {
			asyncRequests.clear();
			version += 1;
		},
		addRecord(descriptor, data) {
			addRecordInternal(descriptor, flattenTranslations(data), version);
		},
		exists(descriptor, strict = false) {
			const record = cache.get(encodeCacheKey(descriptor));
			if (record && strict) return record.version === version;
			return Boolean(record);
		},
		getRecord(descriptor) {
			const descriptorWithNs = withDefaultNs(descriptor);
			const cacheKey = encodeCacheKey(descriptorWithNs);
			const cacheRecord = cache.get(cacheKey);
			if (!cacheRecord) return;
			return Object.assign(Object.assign({}, descriptorWithNs), {
				cacheKey,
				data: cacheRecord.data
			});
		},
		getAllRecords() {
			return Array.from(cache.entries()).map(([key]) => self2.getRecord(decodeCacheKey(key)));
		},
		getTranslation(descriptor, key) {
			var _a2;
			return (_a2 = cache.get(encodeCacheKey(descriptor))) === null || _a2 === void 0 ? void 0 : _a2.data[key];
		},
		getTranslationNs(namespaces, languages, key) {
			var _a2;
			for (const namespace of namespaces) for (const language of languages) {
				const value = (_a2 = cache.get(encodeCacheKey({
					language,
					namespace
				}))) === null || _a2 === void 0 ? void 0 : _a2.data[key];
				if (value !== void 0 && value !== null) return [namespace];
			}
			return unique(namespaces);
		},
		getTranslationFallback(namespaces, languages, key) {
			var _a2;
			for (const namespace of namespaces) for (const language of languages) {
				const value = (_a2 = cache.get(encodeCacheKey({
					language,
					namespace
				}))) === null || _a2 === void 0 ? void 0 : _a2.data[key];
				if (value !== void 0 && value !== null) return value;
			}
		},
		changeTranslation(descriptor, key, value) {
			var _a2;
			const record = (_a2 = cache.get(encodeCacheKey(descriptor))) === null || _a2 === void 0 ? void 0 : _a2.data;
			if (record) {
				record[key] = value;
				events.onCacheChange.emit(Object.assign(Object.assign({}, descriptor), { key }));
			}
		},
		isFetching(ns) {
			if (isInitialLoading()) return true;
			if (ns === void 0) return asyncRequests.size > 0;
			const namespaces = getFallbackArray(ns);
			return Boolean(Array.from(asyncRequests.keys()).find((key) => namespaces.includes(decodeCacheKey(key).namespace)));
		},
		isLoading(language, ns) {
			const namespaces = getFallbackArray(ns);
			if (isInitialLoading()) return true;
			const pendingCacheKeys = Array.from(asyncRequests.keys());
			return Boolean(pendingCacheKeys.find((key) => {
				const descriptor = decodeCacheKey(key);
				return (!namespaces.length || namespaces.includes(descriptor.namespace)) && !self2.exists({
					namespace: descriptor.namespace,
					language
				});
			}));
		},
		async loadRecords(descriptors, options) {
			const withPromises = descriptors.map((descriptor) => {
				const keyObject = withDefaultNs(descriptor);
				const cacheKey = encodeCacheKey(keyObject);
				if (options === null || options === void 0 ? void 0 : options.useCache) {
					if (self2.exists(keyObject, true)) return Object.assign(Object.assign({}, keyObject), {
						new: false,
						cacheKey,
						data: self2.getRecord(keyObject).data
					});
				}
				const existingPromise = asyncRequests.get(cacheKey);
				if (existingPromise) return Object.assign(Object.assign({}, keyObject), {
					new: false,
					promise: existingPromise,
					cacheKey
				});
				const dataPromise = fetchData(keyObject, !(options === null || options === void 0 ? void 0 : options.noDev)) || Promise.resolve(void 0);
				asyncRequests.set(cacheKey, dataPromise);
				return Object.assign(Object.assign({}, keyObject), {
					new: true,
					promise: dataPromise,
					cacheKey
				});
			});
			fetchingObserver.notify();
			loadingObserver.notify();
			const promisesToWait = withPromises.map((val) => val.promise).filter(Boolean);
			const fetchedData = await Promise.all(promisesToWait);
			withPromises.forEach((value) => {
				var _a2;
				if (value.promise) {
					value.data = flattenTranslations((_a2 = fetchedData[0]) !== null && _a2 !== void 0 ? _a2 : {});
					fetchedData.shift();
				}
				const promiseChanged = asyncRequests.get(value.cacheKey) !== value.promise;
				if (value.new && !promiseChanged) {
					asyncRequests.delete(value.cacheKey);
					if (value.data) self2.addRecord(value, value.data);
					else if (!self2.getRecord(value)) self2.addRecord(value, {});
				}
			});
			fetchingObserver.notify();
			loadingObserver.notify();
			return withPromises.map((val) => {
				var _a2;
				return {
					language: val.language,
					namespace: val.namespace,
					data: (_a2 = val.data) !== null && _a2 !== void 0 ? _a2 : {},
					cacheKey: val.cacheKey
				};
			});
		}
	});
	return self2;
}
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
var defaultObserverOptions = {
	tagAttributes: {
		textarea: ["placeholder"],
		input: ["value", "placeholder"],
		img: ["alt"],
		"*": ["aria-label", "title"]
	},
	restrictedElements: ["script", "style"],
	highlightKeys: ["Alt"],
	highlightColor: "rgb(255, 0, 0)",
	highlightWidth: 5,
	inputPrefix: "%-%tolgee:",
	inputSuffix: "%-%",
	passToParent: ["option", "optgroup"],
	fullKeyEncode: false
};
var DEFAULT_FORMAT_ERROR = "invalid";
var DEFAULT_API_URL = "https://app.tolgee.io";
var DEFAULT_MISSING_TRANSLATION = ({ key }) => key;
var defaultValues = {
	observerOptions: defaultObserverOptions,
	observerType: "invisible",
	onFormatError: DEFAULT_FORMAT_ERROR,
	apiUrl: DEFAULT_API_URL,
	autoLoadRequiredData: true,
	fetch: createFetchFunction(),
	onTranslationMissing: DEFAULT_MISSING_TRANSLATION
};
var combineOptions = (...states) => {
	let result = {};
	states.forEach((state) => {
		result = Object.assign(Object.assign(Object.assign({}, result), state), { observerOptions: Object.assign(Object.assign({}, result.observerOptions), state === null || state === void 0 ? void 0 : state.observerOptions) });
	});
	return result;
};
function initState(options, previousState) {
	const initialOptions = combineOptions(defaultValues, previousState === null || previousState === void 0 ? void 0 : previousState.initialOptions, options);
	initialOptions.apiUrl = sanitizeUrl(initialOptions.apiUrl);
	if (options === null || options === void 0 ? void 0 : options.fetch) initialOptions.fetch = createFetchFunction(options.fetch);
	return {
		initialOptions,
		activeNamespaces: (previousState === null || previousState === void 0 ? void 0 : previousState.activeNamespaces) || /* @__PURE__ */ new Map(),
		language: previousState === null || previousState === void 0 ? void 0 : previousState.language,
		pendingLanguage: previousState === null || previousState === void 0 ? void 0 : previousState.language,
		isInitialLoading: false,
		isRunning: false
	};
}
function Plugins(getLanguage, getInitialOptions, getAvailableLanguages, getFallbackNamespaces, getTranslationNs, getTranslation, changeTranslation, events) {
	const plugins = { ui: void 0 };
	const instances = {
		formatters: [],
		finalFormatter: void 0,
		observer: void 0,
		devBackend: void 0,
		backends: [],
		ui: void 0,
		languageDetector: void 0,
		languageStorage: void 0
	};
	const onClick = async ({ keysAndDefaults, target }) => {
		var _a2;
		const withNs = keysAndDefaults.map(({ key, ns, defaultValue }) => {
			return {
				key,
				defaultValue,
				fallbackNamespaces: getFallbackNamespaces(ns),
				namespace: getTranslationNs({
					key,
					ns
				})[0],
				translation: getTranslation({
					key,
					ns
				})
			};
		});
		(_a2 = instances.ui) === null || _a2 === void 0 || _a2.handleElementClick(withNs, target);
	};
	const findPositions = (key, ns) => {
		var _a2;
		return ((_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.findPositions(key, ns)) || [];
	};
	function translate(props) {
		const translation = getTranslation({
			key: props.key,
			ns: props.ns
		});
		return self2.formatTranslation(Object.assign(Object.assign({}, props), {
			translation,
			formatEnabled: true
		}));
	}
	function getCommonProps() {
		return { fetch: getInitialOptions().fetch };
	}
	function setObserver(observer) {
		instances.observer = observer === null || observer === void 0 ? void 0 : observer();
	}
	function hasObserver() {
		return Boolean(instances.observer);
	}
	function addFormatter(formatter2) {
		if (formatter2) instances.formatters.push(formatter2);
	}
	function setFinalFormatter(formatter2) {
		instances.finalFormatter = formatter2;
	}
	function setUi(ui) {
		plugins.ui = ui;
	}
	function hasUi() {
		return Boolean(plugins.ui);
	}
	function setLanguageStorage(storage) {
		instances.languageStorage = storage;
	}
	function setLanguageDetector(detector) {
		instances.languageDetector = detector;
	}
	function storageLoadLanguage() {
		return handleRegularOrAsyncErr(events.onError, (e) => new LanguageStorageError("Tolgee: Failed to load language", e), () => {
			var _a2;
			return (_a2 = instances.languageStorage) === null || _a2 === void 0 ? void 0 : _a2.getLanguage(getCommonProps());
		});
	}
	function detectLanguage2() {
		if (!instances.languageDetector) return;
		const availableLanguages = getAvailableLanguages();
		return handleRegularOrAsyncErr(events.onError, (e) => new LanguageDetectorError("Tolgee: Failed to detect language", e), () => {
			var _a2;
			return (_a2 = instances.languageDetector) === null || _a2 === void 0 ? void 0 : _a2.getLanguage(Object.assign({ availableLanguages }, getCommonProps()));
		});
	}
	function addBackend(backend) {
		if (backend) instances.backends.push(backend);
	}
	function setDevBackend(backend) {
		instances.devBackend = backend;
	}
	function addPlugin(tolgeeInstance, plugin) {
		plugin(tolgeeInstance, Object.freeze({
			setFinalFormatter,
			addFormatter,
			setObserver,
			hasObserver,
			setUi,
			hasUi,
			setDevBackend,
			addBackend,
			setLanguageDetector,
			setLanguageStorage
		}));
	}
	const self2 = Object.freeze({
		addPlugin,
		findPositions,
		run() {
			var _a2, _b;
			const { apiKey, apiUrl, projectId, branch, observerOptions, tagNewKeys, filterTag } = getInitialOptions();
			instances.ui = (_a2 = plugins.ui) === null || _a2 === void 0 ? void 0 : _a2.call(plugins, {
				apiKey,
				apiUrl,
				projectId,
				branch,
				highlight: self2.highlight,
				changeTranslation,
				findPositions,
				onPermanentChange: (data) => events.onPermanentChange.emit(data),
				tagNewKeys,
				filterTag
			});
			(_b = instances.observer) === null || _b === void 0 || _b.run({
				mouseHighlight: Boolean(instances.ui),
				options: observerOptions,
				translate,
				onClick
			});
		},
		stop() {
			var _a2;
			instances.ui = void 0;
			(_a2 = instances.observer) === null || _a2 === void 0 || _a2.stop();
		},
		getLanguageStorage() {
			return instances.languageStorage;
		},
		getInitialLanguage() {
			const availableLanguages = getAvailableLanguages();
			return valueOrPromise(storageLoadLanguage(), (language) => {
				if ((!availableLanguages || availableLanguages.includes(language)) && language) return language;
				return detectLanguage2();
			});
		},
		setStoredLanguage(language) {
			return handleRegularOrAsyncErr(events.onError, (e) => new LanguageStorageError("Tolgee: Failed to store language", e), () => {
				var _a2;
				return (_a2 = instances.languageStorage) === null || _a2 === void 0 ? void 0 : _a2.setLanguage(language, getCommonProps());
			});
		},
		getDevBackend() {
			return instances.devBackend;
		},
		getBackendRecord: async ({ language, namespace }) => {
			for (const backend of instances.backends) {
				const data = await backend.getRecord(Object.assign({
					language,
					namespace
				}, getCommonProps()));
				if (data !== void 0) return data;
			}
		},
		getBackendDevRecord: async ({ language, namespace }) => {
			var _a2;
			const { apiKey, apiUrl, projectId, branch, filterTag } = getInitialOptions();
			if (!apiKey || !apiUrl || !self2.hasDevBackend()) return;
			return (_a2 = instances.devBackend) === null || _a2 === void 0 ? void 0 : _a2.getRecord(Object.assign({
				apiKey,
				apiUrl,
				projectId,
				branch,
				language,
				namespace,
				filterTag
			}, getCommonProps()));
		},
		getLanguageDetector() {
			return instances.languageDetector;
		},
		retranslate() {
			var _a2;
			(_a2 = instances.observer) === null || _a2 === void 0 || _a2.retranslate();
		},
		highlight: (key, ns) => {
			var _a2, _b;
			return ((_b = (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.highlight) === null || _b === void 0 ? void 0 : _b.call(_a2, key, ns)) || { unhighlight() {} };
		},
		unwrap(text) {
			var _a2;
			if (instances.observer) return (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.unwrap(text);
			return {
				text,
				keys: []
			};
		},
		wrap(params) {
			var _a2;
			if (instances.observer) return (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.wrap(params);
			return params.translation;
		},
		hasDevBackend() {
			return Boolean(self2.getDevBackend());
		},
		formatTranslation(_a2) {
			var _b;
			var { formatEnabled } = _a2, props = __rest(_a2, ["formatEnabled"]);
			const { key, translation, defaultValue, noWrap, params, ns, orEmpty } = props;
			const formattableTranslation = translation !== null && translation !== void 0 ? translation : defaultValue;
			let translationMissingResult = "";
			if (translation === void 0 || translation === null) translationMissingResult = getInitialOptions().onTranslationMissing(props);
			let result = formattableTranslation !== null && formattableTranslation !== void 0 ? formattableTranslation : orEmpty ? "" : translationMissingResult;
			const language = getLanguage();
			const isFormatEnabled = formatEnabled || !((_b = instances.observer) === null || _b === void 0 ? void 0 : _b.outputNotFormattable);
			const wrap = (result2) => {
				if (instances.observer && !noWrap) return instances.observer.wrap({
					key,
					translation: result2,
					defaultValue,
					params,
					ns
				});
				return result2;
			};
			result = wrap(result);
			try {
				if (formattableTranslation && language && isFormatEnabled) for (const formatter2 of instances.formatters) result = formatter2.format({
					translation: result,
					language,
					params
				});
				if (instances.finalFormatter && formattableTranslation && language && isFormatEnabled) result = instances.finalFormatter.format({
					translation: result,
					language,
					params
				});
			} catch (e) {
				console.error(e);
				const errorMessage = getErrorMessage(e) || DEFAULT_FORMAT_ERROR;
				const onFormatError = getInitialOptions().onFormatError;
				const formatErrorType = typeof onFormatError;
				if (formatErrorType === "string") result = onFormatError;
				else if (formatErrorType === "function") result = onFormatError(errorMessage, props);
				else result = DEFAULT_FORMAT_ERROR;
				result = wrap(result);
			}
			return result;
		}
	});
	return self2;
}
var ValueObserver = (initialValue, valueGetter, handler) => {
	let previousValue = initialValue;
	return Object.freeze({
		init(value) {
			previousValue = value;
		},
		notify() {
			const value = valueGetter();
			if (previousValue !== value) handler(value);
			previousValue = value;
		}
	});
};
function State(onLanguageChange, onPendingLanguageChange, onRunningChange) {
	let state = initState();
	let devCredentials = void 0;
	const self2 = Object.freeze({
		init(options) {
			state = initState(options, state);
		},
		isRunning() {
			return state.isRunning;
		},
		setRunning(value) {
			if (state.isRunning !== value) {
				state.isRunning = value;
				onRunningChange.emit(value);
			}
		},
		isInitialLoading() {
			return state.isInitialLoading;
		},
		setInitialLoading(value) {
			state.isInitialLoading = value;
		},
		getLanguage() {
			return state.language || state.initialOptions.language;
		},
		setLanguage(language) {
			if (state.language !== language) {
				state.language = language;
				onLanguageChange.emit(language);
			}
		},
		getPendingLanguage() {
			return state.pendingLanguage || self2.getLanguage();
		},
		setPendingLanguage(language) {
			if (state.pendingLanguage !== language) {
				state.pendingLanguage = language;
				onPendingLanguageChange.emit(language);
			}
		},
		getInitialOptions() {
			return Object.assign(Object.assign({}, state.initialOptions), devCredentials);
		},
		addActiveNs(ns) {
			getFallbackArray(ns).forEach((namespace) => {
				const value = state.activeNamespaces.get(namespace);
				if (value !== void 0) state.activeNamespaces.set(namespace, value + 1);
				else state.activeNamespaces.set(namespace, 1);
			});
		},
		removeActiveNs(ns) {
			getFallbackArray(ns).forEach((namespace) => {
				const value = state.activeNamespaces.get(namespace);
				if (value !== void 0 && value > 1) state.activeNamespaces.set(namespace, value - 1);
				else state.activeNamespaces.delete(namespace);
			});
		},
		getRequiredNamespaces() {
			return unique([
				self2.getDefaultNs(),
				...state.initialOptions.ns || [],
				...getFallbackArray(state.initialOptions.fallbackNs),
				...state.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(lang) {
			const language = lang || self2.getLanguage();
			if (!language) return [];
			return unique([language, ...getFallbackFromStruct(language, state.initialOptions.fallbackLanguage)]);
		},
		getFallbackNs() {
			return getFallbackArray(state.initialOptions.fallbackNs);
		},
		getNs() {
			var _a2, _b;
			return ((_a2 = state.initialOptions.ns) === null || _a2 === void 0 ? void 0 : _a2.length) ? state.initialOptions.ns : [(_b = state.initialOptions.defaultNs) !== null && _b !== void 0 ? _b : ""];
		},
		getDefaultNs(ns) {
			var _a2, _b, _c;
			return ns === void 0 ? (_c = (_a2 = state.initialOptions.defaultNs) !== null && _a2 !== void 0 ? _a2 : (_b = state.initialOptions.ns) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : "" : ns;
		},
		getAvailableLanguages() {
			if (state.initialOptions.availableLanguages) return state.initialOptions.availableLanguages;
			else if (state.initialOptions.staticData) {
				const languagesFromStaticData = Object.keys(state.initialOptions.staticData).map((key) => decodeCacheKey(key).language);
				return Array.from(new Set(languagesFromStaticData));
			}
		},
		getAvailableNs() {
			return state.initialOptions.availableNs;
		},
		withDefaultNs(descriptor) {
			return {
				namespace: descriptor.namespace === void 0 ? self2.getDefaultNs() : descriptor.namespace,
				language: descriptor.language
			};
		},
		overrideCredentials(credentials) {
			if (credentials) devCredentials = Object.assign(Object.assign({}, credentials), { apiUrl: sanitizeUrl(credentials.apiUrl) });
			else devCredentials = void 0;
		}
	});
	return self2;
}
function parseCombinedOptions(_a2) {
	var { ns, noWrap, orEmpty, params, language } = _a2, rest = __rest(_a2, [
		"ns",
		"noWrap",
		"orEmpty",
		"params",
		"language"
	]);
	return Object.assign(Object.assign({}, {
		ns,
		noWrap,
		orEmpty,
		language
	}), { params: Object.assign({}, rest) });
}
var getTranslateProps = (keyOrProps, ...params) => {
	let result = {};
	let options;
	if (keyOrProps != null && typeof keyOrProps === "object") result = keyOrProps;
	else {
		result.key = keyOrProps;
		if (typeof params[0] === "string") {
			result.defaultValue = params[0];
			options = params[1];
		} else if (typeof params[0] === "object") options = params[0];
	}
	if (options) result = Object.assign(Object.assign({}, parseCombinedOptions(options)), result);
	return result;
};
function Controller({ options }) {
	const events = Events();
	const fetchingObserver = ValueObserver(false, () => cache.isFetching(), events.onFetchingChange.emit);
	const loadingObserver = ValueObserver(false, () => self2.isLoading(), events.onLoadingChange.emit);
	const state = State(events.onLanguageChange, events.onPendingLanguageChange, events.onRunningChange);
	const pluginService = Plugins(state.getLanguage, state.getInitialOptions, state.getAvailableLanguages, getDefaultAndFallbackNs, getTranslationNs, getTranslation, changeTranslation, events);
	const cache = Cache(events, pluginService.getBackendRecord, pluginService.getBackendDevRecord, state.withDefaultNs, state.isInitialLoading, fetchingObserver, loadingObserver);
	if (options) init(options);
	let runPromise;
	events.onUpdate.listen(() => {
		if (state.isRunning()) pluginService.retranslate();
	});
	function getFallbackNs() {
		return state.getFallbackNs();
	}
	function getDefaultNs(ns) {
		return state.getDefaultNs(ns);
	}
	function getDefaultAndFallbackNs(ns) {
		return unique([...getFallbackArray(getDefaultNs(ns)), ...getFallbackNs()]);
	}
	function getRequiredNamespaces(ns) {
		return unique([...getFallbackArray(ns !== null && ns !== void 0 ? ns : getDefaultNs()), ...state.getRequiredNamespaces()]);
	}
	function changeTranslation(descriptor, key, value) {
		const keyObject = state.withDefaultNs(descriptor);
		const previousValue = cache.getTranslation(keyObject, key);
		cache.changeTranslation(keyObject, key, value);
		return { revert() {
			cache.changeTranslation(keyObject, key, previousValue);
		} };
	}
	function init(options2) {
		state.init(options2);
		cache.addStaticData(state.getInitialOptions().staticData);
	}
	function getRequiredDescriptors(lang, ns) {
		const languages = state.getFallbackLangs(lang);
		const namespaces = getRequiredNamespaces(ns);
		const result = [];
		languages.forEach((language) => {
			namespaces.forEach((namespace) => {
				result.push({
					language,
					namespace
				});
			});
		});
		return result;
	}
	function getMissingDescriptors(lang, ns) {
		return getRequiredDescriptors(lang, ns).filter((descriptor) => !cache.exists(descriptor, true));
	}
	function getMatrixRecords(options2) {
		let languages = [];
		let namespaces = [];
		if (Array.isArray(options2.languages)) languages = options2.languages;
		else if (options2.languages === "all") {
			const availableLanguages = self2.getAvailableLanguages();
			if (!availableLanguages) throw new Error(missingOptionError("availableLanguages"));
			languages = availableLanguages;
		}
		if (Array.isArray(options2.namespaces)) namespaces = options2.namespaces;
		else if (options2.namespaces === "all") {
			const availableNs = self2.getAvailableNs();
			if (!availableNs) throw new Error(missingOptionError("availableNs"));
			namespaces = availableNs;
		}
		const records = [];
		languages.forEach((language) => {
			namespaces.forEach((namespace) => {
				records.push({
					language,
					namespace
				});
			});
		});
		return records;
	}
	function getTranslationNs({ key, ns }) {
		const languages = state.getFallbackLangs();
		const namespaces = getDefaultAndFallbackNs(ns !== null && ns !== void 0 ? ns : void 0);
		return cache.getTranslationNs(namespaces, languages, key);
	}
	function getTranslation({ key, ns, language }) {
		const namespaces = getDefaultAndFallbackNs(ns !== null && ns !== void 0 ? ns : void 0);
		const languages = state.getFallbackLangs(language);
		return cache.getTranslationFallback(namespaces, languages, key);
	}
	function loadInitial() {
		const data = valueOrPromise(initializeLanguage(), () => {
			const missingDescriptors = getMissingDescriptors();
			if (missingDescriptors.length && state.getInitialOptions().autoLoadRequiredData) return cache.loadRecords(missingDescriptors, { useCache: true });
		});
		if (isPromise(data)) {
			state.setInitialLoading(true);
			fetchingObserver.notify();
			loadingObserver.notify();
			return Promise.resolve(data).then(() => {
				state.setInitialLoading(false);
				fetchingObserver.notify();
				loadingObserver.notify();
				events.onInitialLoaded.emit();
			});
		} else events.onInitialLoaded.emit();
	}
	function initializeLanguage() {
		if (state.getLanguage()) return;
		return valueOrPromise(pluginService.getInitialLanguage(), (lang) => {
			const language = lang || state.getInitialOptions().defaultLanguage;
			language && state.setLanguage(language);
		});
	}
	function checkCorrectConfiguration() {
		if (pluginService.getLanguageDetector() || pluginService.getLanguageStorage()) {
			if (!state.getAvailableLanguages()) throw new Error(missingOptionError("availableLanguages"));
		}
		if (!state.getLanguage() && !state.getInitialOptions().defaultLanguage) throw new Error(missingOptionError(["defaultLanguage", "language"]));
	}
	const self2 = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, events), state), pluginService), cache), {
		init,
		getTranslation,
		changeTranslation,
		getTranslationNs,
		getDefaultAndFallbackNs,
		findPositions: pluginService.findPositions,
		getRequiredDescriptors,
		async changeLanguage(language) {
			if (state.getPendingLanguage() === language && state.getLanguage() === language) return;
			state.setPendingLanguage(language);
			if (state.isRunning() && state.getInitialOptions().autoLoadRequiredData) await cache.loadRecords(getRequiredDescriptors(language), { useCache: true });
			if (language === state.getPendingLanguage()) {
				state.setLanguage(language);
				await pluginService.setStoredLanguage(language);
			}
		},
		async addActiveNs(ns, forget) {
			if (!forget) state.addActiveNs(ns);
			if (state.isRunning()) await cache.loadRecords(getRequiredDescriptors(void 0, ns), { useCache: true });
		},
		async loadRecord(descriptor, options2) {
			var _a2;
			return (_a2 = (await self2.loadRecords([descriptor], options2))[0]) === null || _a2 === void 0 ? void 0 : _a2.data;
		},
		isLoading(ns) {
			return cache.isLoading(state.getLanguage(), ns);
		},
		isLoaded(ns) {
			const language = state.getLanguage();
			if (!language) return false;
			const languages = state.getFallbackLangs(language);
			const namespaces = getRequiredNamespaces(ns);
			const result = [];
			languages.forEach((language2) => {
				namespaces.forEach((namespace) => {
					if (!cache.exists({
						language: language2,
						namespace
					})) result.push({
						language: language2,
						namespace
					});
				});
			});
			return result.length === 0;
		},
		t: (...args) => {
			const params = getTranslateProps(...args);
			const translation = getTranslation(params);
			return pluginService.formatTranslation(Object.assign(Object.assign({}, params), { translation }));
		},
		isDev() {
			return Boolean(state.getInitialOptions().apiKey && state.getInitialOptions().apiUrl);
		},
		async loadRequired(options2) {
			if (!(options2 === null || options2 === void 0 ? void 0 : options2.language)) await initializeLanguage();
			const requiredRecords = getRequiredDescriptors(options2 === null || options2 === void 0 ? void 0 : options2.language);
			return self2.loadRecords(requiredRecords, options2);
		},
		async loadMatrix(options2) {
			const records = getMatrixRecords(options2);
			return self2.loadRecords(records, options2);
		},
		run() {
			checkCorrectConfiguration();
			if (!state.isRunning()) {
				state.setRunning(true);
				pluginService.run();
				runPromise = loadInitial();
			}
			return Promise.resolve(runPromise);
		},
		stop() {
			if (state.isRunning()) {
				pluginService.stop();
				state.setRunning(false);
			}
		}
	}));
	return self2;
}
function createTolgee(options) {
	const controller = Controller({ options });
	if (controller.isDev()) controller.invalidate();
	function withRestart(callback) {
		const wasRunning = controller.isRunning();
		wasRunning && controller.stop();
		callback();
		controller.isDev() && controller.invalidate();
		wasRunning && controller.run();
	}
	const self2 = Object.freeze({
		on: controller.on,
		setEmitterActive: controller.setEmitterActive,
		getLanguage: controller.getLanguage,
		getPendingLanguage: controller.getPendingLanguage,
		changeLanguage: controller.changeLanguage,
		changeTranslation: controller.changeTranslation,
		addActiveNs: controller.addActiveNs,
		removeActiveNs: controller.removeActiveNs,
		loadRequired: controller.loadRequired,
		loadMatrix: controller.loadMatrix,
		loadRecords: controller.loadRecords,
		loadRecord: controller.loadRecord,
		addStaticData: controller.addStaticData,
		getRecord: controller.getRecord,
		getAllRecords: controller.getAllRecords,
		isLoaded: controller.isLoaded,
		getRequiredDescriptors: controller.getRequiredDescriptors,
		isInitialLoading: controller.isInitialLoading,
		isLoading: controller.isLoading,
		isFetching: controller.isFetching,
		isRunning: controller.isRunning,
		run: controller.run,
		stop: controller.stop,
		t: controller.t,
		highlight: controller.highlight,
		findPositions: controller.findPositions,
		getInitialOptions: controller.getInitialOptions,
		isDev: controller.isDev,
		wrap: controller.wrap,
		unwrap: controller.unwrap,
		overrideCredentials(credentials) {
			withRestart(() => controller.overrideCredentials(credentials));
		},
		addPlugin(plugin) {
			if (plugin) withRestart(() => controller.addPlugin(self2, plugin));
		},
		updateOptions(options2) {
			if (options2) withRestart(() => controller.init(options2));
		}
	});
	return self2;
}
var TolgeeCore = () => {
	const state = {
		plugins: [],
		options: {}
	};
	const tolgeeChain = Object.freeze({
		use(plugin) {
			state.plugins.push(plugin);
			return tolgeeChain;
		},
		updateDefaults(options) {
			state.options = combineOptions(state.options, options);
			return tolgeeChain;
		},
		init(options) {
			const tolgee = createTolgee(combineOptions(state.options, options));
			state.plugins.forEach(tolgee.addPlugin);
			return tolgee;
		}
	});
	return tolgeeChain;
};
var ERROR_PARAM_EMPTY = 0, ERROR_UNEXPECTED_CHAR = 1, ERROR_UNEXPECTED_END = 2;
var FormatError = class extends Error {
	constructor(code, index, text) {
		let error;
		let hint = "";
		if (code === ERROR_PARAM_EMPTY) error = "Empty parameter";
		else if (code === ERROR_UNEXPECTED_CHAR) {
			error = "Unexpected character";
			hint = "Did you forget to use FormatIcu to render ICU message syntax?";
		} else error = "Unexpected end";
		super(`Tolgee parser: ${error} at ${index} in "${text}"` + (hint ? "\n" + hint : ""));
		this.code = code;
		this.index = index;
	}
};
function isWhitespace(ch) {
	return /\s/.test(ch);
}
var STATE_TEXT = 0, STATE_ESCAPE_MAYBE = 1, STATE_ESCAPE = 2, STATE_PARAM = 3, STATE_PARAM_AFTER = 4;
var END_STATES = new Set([
	STATE_ESCAPE,
	STATE_ESCAPE_MAYBE,
	STATE_TEXT
]);
var CHAR_ESCAPE = "'";
var ESCAPABLE = new Set([
	"{",
	"}",
	CHAR_ESCAPE
]);
var isAllowedInParam = (char) => {
	return /[0-9a-zA-Z_]/.test(char);
};
function formatParser(translation) {
	let state = STATE_TEXT;
	let text = "";
	let param = "";
	let ch = "";
	const texts = [];
	const params = [];
	let i = 0;
	function parsingError(code) {
		throw new FormatError(code, i, translation);
	}
	const addText = () => {
		texts.push(text);
		text = "";
	};
	const addParamChar = () => {
		if (!isAllowedInParam(ch)) parsingError(ERROR_UNEXPECTED_CHAR);
		param += ch;
	};
	const addParam = () => {
		if (param === "") parsingError(ERROR_PARAM_EMPTY);
		params.push(param);
		param = "";
	};
	for (i = 0; i < translation.length; i++) {
		ch = translation[i];
		switch (state) {
			case STATE_TEXT:
				if (ch === CHAR_ESCAPE) {
					text += ch;
					state = STATE_ESCAPE_MAYBE;
				} else if (ch === "{") {
					addText();
					state = STATE_PARAM;
				} else {
					text += ch;
					state = STATE_TEXT;
				}
				break;
			case STATE_ESCAPE_MAYBE:
				if (ESCAPABLE.has(ch)) {
					text = text.slice(0, -1) + ch;
					state = STATE_ESCAPE;
				} else {
					text += ch;
					state = STATE_TEXT;
				}
				break;
			case STATE_ESCAPE:
				if (ch === CHAR_ESCAPE) state = STATE_TEXT;
				else {
					text += ch;
					state = STATE_ESCAPE;
				}
				break;
			case STATE_PARAM:
				if (ch === "}") {
					addParam();
					state = STATE_TEXT;
				} else if (!isWhitespace(ch)) {
					addParamChar();
					state = STATE_PARAM;
				} else if (param !== "") {
					addParam();
					state = STATE_PARAM_AFTER;
				}
				break;
			case STATE_PARAM_AFTER: if (ch == "}") state = STATE_TEXT;
			else if (isWhitespace(ch)) state = STATE_PARAM_AFTER;
			else parsingError(ERROR_UNEXPECTED_CHAR);
		}
	}
	if (!END_STATES.has(state)) parsingError(ERROR_UNEXPECTED_END);
	addText();
	return [texts, params];
}
function formatter(translation, params) {
	const [texts, pars] = formatParser(translation);
	const result = [texts[0]];
	for (let i = 1; i < texts.length; i++) {
		const parameter = params === null || params === void 0 ? void 0 : params[pars[i - 1]];
		if (parameter === void 0) throw new Error(`Missing parameter "${pars[i - 1]}" in "${translation}"`);
		result.push(String(parameter));
		result.push(texts[i]);
	}
	return result.join("");
}
function createFormatSimple() {
	return { format: ({ translation, params }) => formatter(translation, params) };
}
var FormatSimple = () => (tolgee, tools) => {
	tools.setFinalFormatter(createFormatSimple());
	return tolgee;
};
String(Number.MAX_SAFE_INTEGER);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var text_min = {};
(function(scope) {
	function B(r, e) {
		var f;
		return r instanceof Buffer ? f = r : f = Buffer.from(r.buffer, r.byteOffset, r.byteLength), f.toString(e);
	}
	var w = function(r) {
		return Buffer.from(r);
	};
	function h(r) {
		for (var e = 0, f = Math.min(256 * 256, r.length + 1), n = new Uint16Array(f), i = [], o = 0;;) {
			var t = e < r.length;
			if (!t || o >= f - 1) {
				var m = n.subarray(0, o);
				if (i.push(String.fromCharCode.apply(null, m)), !t) return i.join("");
				r = r.subarray(e), e = 0, o = 0;
			}
			var a = r[e++];
			if ((a & 128) === 0) n[o++] = a;
			else if ((a & 224) === 192) {
				var d = r[e++] & 63;
				n[o++] = (a & 31) << 6 | d;
			} else if ((a & 240) === 224) {
				var d = r[e++] & 63, l = r[e++] & 63;
				n[o++] = (a & 31) << 12 | d << 6 | l;
			} else if ((a & 248) === 240) {
				var d = r[e++] & 63, l = r[e++] & 63, R = r[e++] & 63, c = (a & 7) << 18 | d << 12 | l << 6 | R;
				c > 65535 && (c -= 65536, n[o++] = c >>> 10 & 1023 | 55296, c = 56320 | c & 1023), n[o++] = c;
			}
		}
	}
	function F(r) {
		for (var e = 0, f = r.length, n = 0, i = Math.max(32, f + (f >>> 1) + 7), o = new Uint8Array(i >>> 3 << 3); e < f;) {
			var t = r.charCodeAt(e++);
			if (t >= 55296 && t <= 56319) {
				if (e < f) {
					var s = r.charCodeAt(e);
					(s & 64512) === 56320 && (++e, t = ((t & 1023) << 10) + (s & 1023) + 65536);
				}
				if (t >= 55296 && t <= 56319) continue;
			}
			if (n + 4 > o.length) {
				i += 8, i *= 1 + e / r.length * 2, i = i >>> 3 << 3;
				var m = new Uint8Array(i);
				m.set(o), o = m;
			}
			if ((t & 4294967168) === 0) {
				o[n++] = t;
				continue;
			} else if ((t & 4294965248) === 0) o[n++] = t >>> 6 & 31 | 192;
			else if ((t & 4294901760) === 0) o[n++] = t >>> 12 & 15 | 224, o[n++] = t >>> 6 & 63 | 128;
			else if ((t & 4292870144) === 0) o[n++] = t >>> 18 & 7 | 240, o[n++] = t >>> 12 & 63 | 128, o[n++] = t >>> 6 & 63 | 128;
			else continue;
			o[n++] = t & 63 | 128;
		}
		return o.slice ? o.slice(0, n) : o.subarray(0, n);
	}
	var u = "Failed to ", p = function(r, e, f) {
		if (r) throw new Error("".concat(u).concat(e, ": the '").concat(f, "' option is unsupported."));
	};
	var x = typeof Buffer == "function" && Buffer.from;
	var A = x ? w : F;
	function v() {
		this.encoding = "utf-8";
	}
	v.prototype.encode = function(r, e) {
		return p(e && e.stream, "encode", "stream"), A(r);
	};
	function U(r) {
		var e;
		try {
			var f = new Blob([r], { type: "text/plain;charset=UTF-8" });
			e = URL.createObjectURL(f);
			var n = new XMLHttpRequest();
			return n.open("GET", e, false), n.send(), n.responseText;
		} finally {
			e && URL.revokeObjectURL(e);
		}
	}
	var O = !x && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", S = [
		"utf-8",
		"utf8",
		"unicode-1-1-utf-8"
	], T = h;
	x ? T = B : O && (T = function(r) {
		try {
			return U(r);
		} catch (e) {
			return h(r);
		}
	});
	var y = "construct 'TextDecoder'", E = "".concat(u, " ").concat(y, ": the ");
	function g(r, e) {
		p(e && e.fatal, y, "fatal"), r = r || "utf-8";
		var f;
		if (x ? f = Buffer.isEncoding(r) : f = S.indexOf(r.toLowerCase()) !== -1, !f) throw new RangeError("".concat(E, " encoding label provided ('").concat(r, "') is invalid."));
		this.encoding = r, this.fatal = false, this.ignoreBOM = false;
	}
	g.prototype.decode = function(r, e) {
		p(e && e.stream, "decode", "stream");
		var f;
		return r instanceof Uint8Array ? f = r : r.buffer instanceof ArrayBuffer ? f = new Uint8Array(r.buffer) : f = new Uint8Array(r), T(f, this.encoding);
	};
	scope.TextEncoder = scope.TextEncoder || v;
	scope.TextDecoder = scope.TextDecoder || g;
})(typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
var FastTextEncoding = _mergeNamespaces({
	__proto__: null,
	default: text_min
}, [text_min]);
(_a = console.assert) == null || _a.call(console, FastTextEncoding);
RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function listen(type, callback) {
	const handler = (e) => {
		var _a2, _b;
		if (type.includes((_a2 = e.data) == null ? void 0 : _a2.type)) callback((_b = e.data) == null ? void 0 : _b.data);
	};
	window.addEventListener("message", handler, false);
	return { unsubscribe() {
		window.removeEventListener("message", handler);
	} };
}
function sendAndRecieve({ message, recievingMessage, data, attempts = 1, timeout = 300 }) {
	let cancelled = false;
	const makeAttempt = () => new Promise((resolve, reject) => {
		const listener = listen(recievingMessage, handler);
		window.postMessage({
			type: message,
			data
		}, window.origin);
		const timer = setTimeout(expire, timeout);
		function handler(data2) {
			clearTimeout(timer);
			removeEventListener();
			resolve(data2);
		}
		function removeEventListener() {
			listener.unsubscribe();
		}
		function expire() {
			removeEventListener();
			reject();
		}
	});
	const getData = async () => {
		for (let i = 0; i < attempts; i++) {
			if (cancelled) return new Promise(() => {});
			try {
				return await makeAttempt();
			} catch (e) {
				continue;
			}
		}
		if (!cancelled) throw `Didn't recieve ${recievingMessage.join(" or ")} in time.`;
		return new Promise(() => {});
	};
	return {
		cancel() {
			cancelled = true;
		},
		promise: getData()
	};
}
function Handshaker() {
	let cancelLast = void 0;
	async function update(data) {
		cancelLast?.();
		const { cancel, promise } = sendAndRecieve({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data,
			attempts: 4
		});
		cancelLast = cancel;
		return promise;
	}
	return { update };
}
var IN_CONTEXT_FILE = "tolgee-in-context-tools.umd.min.js";
var IN_CONTEXT_UMD_NAME = "@tolgee/in-context-tools";
var IN_CONTEXT_EXPORT_NAME = "InContextTools";
var CDN_URL = "https://cdn.jsdelivr.net/npm";
function injectScript(src) {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = src;
		script.addEventListener("load", () => resolve());
		script.addEventListener("error", (e) => reject(e.error));
		document.head.appendChild(script);
	});
}
var injectPromise = null;
function loadInContextLib(version) {
	if (!injectPromise) injectPromise = injectScript(`${CDN_URL}/@tolgee/web@${version}/dist/${IN_CONTEXT_FILE}`).then(() => {
		return window[IN_CONTEXT_UMD_NAME][IN_CONTEXT_EXPORT_NAME];
	});
	return injectPromise;
}
var API_KEY_LOCAL_STORAGE = "__tolgee_apiKey";
var API_URL_LOCAL_STORAGE = "__tolgee_apiUrl";
var BRANCH_LOCAL_STORAGE = "__tolgee_branch";
function getCredentials() {
	const apiKey = sessionStorage.getItem(API_KEY_LOCAL_STORAGE) || void 0;
	const apiUrl = sessionStorage.getItem(API_URL_LOCAL_STORAGE) || void 0;
	const branch = sessionStorage.getItem(BRANCH_LOCAL_STORAGE) || void 0;
	if (!apiKey || !apiUrl) return;
	return __spreadValues({
		apiKey,
		apiUrl
	}, branch !== void 0 ? { branch } : {});
}
function clearSessionStorage() {
	sessionStorage.removeItem(API_KEY_LOCAL_STORAGE);
	sessionStorage.removeItem(API_URL_LOCAL_STORAGE);
	sessionStorage.removeItem(BRANCH_LOCAL_STORAGE);
}
function onDocumentReady(callback) {
	if (document.readyState !== "loading") Promise.resolve().then(() => {
		callback();
	});
	else if (document.addEventListener) document.addEventListener("DOMContentLoaded", callback);
}
var BrowserExtensionPlugin = () => (tolgee) => tolgee;
var sessionStorageAvailable = () => {
	if (typeof window === "undefined") return false;
	try {
		return typeof sessionStorage !== "undefined" && sessionStorage;
	} catch (err) {
		console.error("sessionStorage not available", err);
		return false;
	}
};
if (sessionStorageAvailable()) BrowserExtensionPlugin = () => (tolgee) => {
	const handshaker = Handshaker();
	const getConfig = () => ({
		uiPresent: true,
		uiVersion: void 0,
		mode: tolgee.isDev() ? "development" : "production",
		config: {
			apiUrl: tolgee.getInitialOptions().apiUrl || "",
			apiKey: tolgee.getInitialOptions().apiKey || "",
			branch: tolgee.getInitialOptions().branch
		}
	});
	const getTolgeePlugin = async () => {
		const InContextTools = await loadInContextLib("prerelease");
		return (tolgee2) => {
			const credentials2 = getCredentials();
			tolgee2.addPlugin(InContextTools({ credentials: credentials2 }));
			return tolgee2;
		};
	};
	tolgee.on("running", ({ value: isRunning }) => {
		if (isRunning) onDocumentReady(() => {
			handshaker.update(getConfig()).catch(clearSessionStorage);
		});
	});
	if (getCredentials()) getTolgeePlugin().then((plugin) => {
		tolgee.addPlugin(plugin);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools");
		console.error(e);
	});
	return tolgee;
};
function Tolgee() {
	return TolgeeCore().use(BrowserExtensionPlugin());
}
function getTolgeeWithDeactivatedWrapper(tolgee) {
	return Object.assign(Object.assign({}, tolgee), { t(...args) {
		const props = getTranslateProps(...args);
		return tolgee.t(Object.assign(Object.assign({}, props), { noWrap: true }));
	} });
}
function useTolgeeSSR(tolgeeInstance, language, data, enabled = true) {
	const [noWrappingTolgee] = useState(() => getTolgeeWithDeactivatedWrapper(tolgeeInstance));
	const [initialRender, setInitialRender] = useState(enabled);
	useEffect(() => {
		setInitialRender(false);
	}, []);
	useMemo(() => {
		if (enabled) {
			tolgeeInstance.setEmitterActive(false);
			tolgeeInstance.addStaticData(data);
			tolgeeInstance.changeLanguage(language);
			tolgeeInstance.setEmitterActive(true);
		}
	}, [
		language,
		data,
		tolgeeInstance
	]);
	useState(() => {
		if (!tolgeeInstance.isLoaded() && enabled) {
			const requiredRecords = tolgeeInstance.getRequiredDescriptors(language);
			const providedRecords = tolgeeInstance.getAllRecords();
			const missingRecords = requiredRecords.map(({ namespace, language }) => namespace ? `${namespace}:${language}` : language).filter((key) => !providedRecords.find((r) => (r === null || r === void 0 ? void 0 : r.cacheKey) === key));
			console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${missingRecords.map((key) => `"${key}"`).join(", ")}`);
		}
	});
	return initialRender ? noWrappingTolgee : tolgeeInstance;
}
var DEFAULT_REACT_OPTIONS = { useSuspense: false };
var ProviderInstance;
var getProviderInstance = () => {
	if (!ProviderInstance) ProviderInstance = React.createContext(void 0);
	return ProviderInstance;
};
var LAST_TOLGEE_INSTANCE = void 0;
var TolgeeProvider = ({ tolgee, options, children, fallback, ssr }) => {
	useEffect(() => {
		if ((LAST_TOLGEE_INSTANCE === null || LAST_TOLGEE_INSTANCE === void 0 ? void 0 : LAST_TOLGEE_INSTANCE.run) !== tolgee.run) {
			if (LAST_TOLGEE_INSTANCE) LAST_TOLGEE_INSTANCE.stop();
			LAST_TOLGEE_INSTANCE = tolgee;
			tolgee.run().catch((e) => {
				console.error(e);
			}).finally(() => {
				setLoading(false);
			});
		}
	}, [tolgee]);
	let tolgeeSSR = tolgee;
	const { language, staticData } = typeof ssr !== "object" ? {} : ssr;
	tolgeeSSR = useTolgeeSSR(tolgee, language, staticData, Boolean(ssr));
	const [loading, setLoading] = useState(!tolgeeSSR.isLoaded());
	const optionsWithDefault = Object.assign(Object.assign({}, DEFAULT_REACT_OPTIONS), options);
	const TolgeeProviderContext = getProviderInstance();
	if (optionsWithDefault.useSuspense) return React.createElement(TolgeeProviderContext.Provider, { value: {
		tolgee: tolgeeSSR,
		options: optionsWithDefault
	} }, loading ? fallback : React.createElement(Suspense, { fallback: fallback || null }, children));
	return React.createElement(TolgeeProviderContext.Provider, { value: {
		tolgee: tolgeeSSR,
		options: optionsWithDefault
	} }, loading ? fallback : children);
};
var globalContext;
function getGlobalContext() {
	return globalContext;
}
var useTolgeeContext = () => {
	const context = useContext(getProviderInstance()) || getGlobalContext();
	if (!context) throw new Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return context;
};
var useRerender = () => {
	const [instance, setCounter] = useState(0);
	return {
		instance,
		rerender: useCallback(() => {
			setCounter((num) => num + 1);
		}, [setCounter])
	};
};
var useTranslateInternal = (ns, options) => {
	const { tolgee, options: defaultOptions } = useTolgeeContext();
	const namespaces = getFallback(ns);
	const namespacesJoined = getFallbackArray(namespaces).join(":");
	const currentOptions = Object.assign(Object.assign({}, defaultOptions), options);
	const { rerender, instance } = useRerender();
	const subscriptionQueue = useRef([]);
	subscriptionQueue.current = [];
	const isLoaded = tolgee.isLoaded(namespaces);
	useEffect(() => {
		const subscription = tolgee.on("update", rerender);
		return () => {
			subscription.unsubscribe();
		};
	}, [namespacesJoined, tolgee]);
	useEffect(() => {
		tolgee.addActiveNs(namespaces);
		return () => tolgee.removeActiveNs(namespaces);
	}, [namespacesJoined, tolgee]);
	const t = useCallback((props) => {
		var _a;
		const fallbackNs = (_a = props.ns) !== null && _a !== void 0 ? _a : namespaces === null || namespaces === void 0 ? void 0 : namespaces[0];
		return tolgee.t(Object.assign(Object.assign({}, props), { ns: fallbackNs }));
	}, [tolgee, instance]);
	if (currentOptions.useSuspense && !isLoaded) throw tolgee.addActiveNs(namespaces, true);
	return {
		t,
		isLoading: !isLoaded
	};
};
var useTranslate$1 = (ns, options) => {
	const { t: tInternal, isLoading } = useTranslateInternal(ns, options);
	return {
		t: useCallback((...params) => {
			return tInternal(getTranslateProps(...params));
		}, [tInternal]),
		isLoading
	};
};
function unwrapSingleElementArray(value) {
	if (Array.isArray(value) && value.length === 1) return value[0];
	else return value;
}
var wrapTagHandlers = (params) => {
	if (!params) return;
	const result = {};
	Object.entries(params || {}).forEach(([key, value]) => {
		if (typeof value === "function") result[key] = (chunk) => {
			return value(addReactKeys(chunk));
		};
		else if (React.isValidElement(value)) {
			const el = value;
			result[key] = (chunk) => {
				return el.props.children === void 0 && (chunk === null || chunk === void 0 ? void 0 : chunk.length) ? React.cloneElement(el, {}, addReactKeys(chunk)) : React.cloneElement(el);
			};
		} else result[key] = value;
	});
	return result;
};
function unwrapFunctions(value) {
	if (typeof value === "function") return value();
	return value;
}
var addReactKeys = (children) => {
	const val = unwrapSingleElementArray(children);
	if (Array.isArray(val)) return val.map((item, i) => React.createElement(React.Fragment, { key: i }, unwrapFunctions(item)));
	else return unwrapFunctions(val);
};
var TBase = (props) => {
	const key = props.keyName || props.children;
	if (key === void 0) console.error("T component: keyName not defined");
	const defaultValue = props.defaultValue || (props.keyName ? props.children : void 0);
	const translation = addReactKeys(props.t({
		key,
		params: wrapTagHandlers(props.params),
		defaultValue,
		noWrap: props.noWrap,
		ns: props.ns,
		language: props.language
	}));
	return React.createElement(React.Fragment, null, translation);
};
var T$1 = (props) => {
	const { t } = useTranslateInternal();
	return React.createElement(TBase, Object.assign({ t }, props));
};
function useTranslate() {
	const { t, ...rest } = useTranslate$1();
	return {
		...rest,
		t: (key, defaultValue, parameters) => t(key, defaultValue, parameters)
	};
}
function T(props) {
	return jsx(T$1, { ...props });
}
function PreferencesSection() {
	const { t } = useTranslate();
	const languageId = useId();
	return jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: jsx(T, {
				keyName: "preferencesSection.preferences",
				defaultValue: "Preferences"
			})
		}), jsxs("div", {
			className: "space-y-4",
			children: [
				jsxs("div", {
					className: "flex items-center justify-between",
					children: [jsxs("div", { children: [jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: jsx(T, {
							keyName: "preferencesSection.emailNotifications",
							defaultValue: "Email Notifications"
						})
					}), jsx("p", {
						className: "text-xs text-muted-foreground",
						children: jsx(T, {
							keyName: "preferencesSection.receiveWeeklyBenchmark",
							defaultValue: "Receive weekly benchmark reports"
						})
					})] }), jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": t("preferencesSection.toggleNotifications", "Toggle notifications"),
						children: jsx("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				jsxs("div", {
					className: "flex items-center justify-between",
					children: [jsxs("div", { children: [jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: jsx(T, {
							keyName: "preferencesSection.darkMode",
							defaultValue: "Dark Mode"
						})
					}), jsx("p", {
						className: "text-xs text-muted-foreground",
						children: jsx(T, {
							keyName: "preferencesSection.useDarkColorScheme",
							defaultValue: "Use dark color scheme"
						})
					})] }), jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": t("preferencesSection.toggleDarkMode", "Toggle dark mode"),
						children: jsx("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				jsxs("div", { children: [jsx("label", {
					htmlFor: languageId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: jsx(T, {
						keyName: "preferencesSection.defaultLanguage",
						defaultValue: "Default Language"
					})
				}), jsxs("select", {
					id: languageId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						jsx("option", { children: t("preferencesSection.englishEn", "English (en)") }),
						jsx("option", { children: t("preferencesSection.frenchFr", "French (fr)") }),
						jsx("option", { children: t("preferencesSection.germanDe", "German (de)") }),
						jsx("option", { children: t("preferencesSection.spanishEs", "Spanish (es)") }),
						jsx("option", { children: t("preferencesSection.japaneseJa", "Japanese (ja)") }),
						jsx("option", { children: t("preferencesSection.chineseSimplifiedZhCn", "Chinese Simplified (zh-CN)") }),
						jsx("option", { children: t("preferencesSection.arabicAr", "Arabic (ar)") })
					]
				})] })
			]
		})]
	});
}
var route_default = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home"
};
var header_default = {
	home: "Home",
	methodology: "Methodology",
	mockPages: "Mock Pages",
	products: "Products",
	pricing: "Pricing",
	team: "Team",
	blog: "Blog",
	careers: "Careers",
	faq: "FAQ",
	contact: "Contact",
	settings: "Settings",
	goToGithub: "Go to GitHub"
};
var footer_default = {
	resources: "Resources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
};
var themeToggle_default = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light"
};
var hero_default = {
	aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	viewResults: "View Results"
};
var whyItMatters_default = {
	whyTheseMetricsMatter: "Why These Metrics Matter",
	bundleSize: "Bundle Size",
	theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	renderingHydration: "Rendering & Hydration",
	connectingALargeJson: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	dynamicLoading: "Dynamic Loading",
	loadingAllTranslationsUpfront: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
};
var understandingImpact_default = {
	cacheInvalidation: "Cache invalidation:",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
	theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
	thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	understandingTheImpact: "Understanding the Impact",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "Waterfall requests:",
	whatThisBenchmarkMeasures: "What this benchmark measures",
	whyASingleLargeJson: "Why a single large JSON can hurt performance"
};
var resultsTable_default = {
	bundleSize: "Bundle Size",
	lazyLoading: "Lazy Loading",
	library: "Library",
	lookupTime: "Lookup Time",
	sampleResults: "Sample Results"
};
var aboutHeader_default = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "Methodology",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach."
};
var aboutGrid_default = {
	allBenchmarksRunOn: "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	applicationDesign: "Application Design",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
	fairComparison: "Fair Comparison",
	measurementMethodology: "Measurement Methodology",
	methodology: "Methodology",
	testEnvironment: "Test Environment",
	theBenchmarkAppHas10: "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default = {
	bundleSizeImpact: "Bundle size impact",
	duringSsrTranslationDataIs: "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "Hydration cost",
	lazyLoadingEffectiveness: "Lazy loading effectiveness",
	localeSwitchSpeed: "Locale switch speed",
	renderingOverhead: "Rendering overhead",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	whatWeMeasure: "What We Measure",
	whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
};
var blogHeader_default = {
	blog: "Blog",
	insightsDeepDivesAnd: "Insights, deep dives, and updates from the i18n benchmarking community.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default = {
	aStepByStepGuide: "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "February 1, 2026",
	february152026: "February 15, 2026",
	february282026: "February 28, 2026",
	howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
	i18nBenchmark2026Results: "i18n Benchmark 2026 Results",
	january202026: "January 20, 2026",
	march152026: "March 15, 2026",
	march82026: "March 8, 2026",
	meta: "Meta",
	migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
	practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	readMore: "Read More →",
	serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
	theStateOfInternationalizationIn: "The State of Internationalization in 2026",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts."
};
var careersHeader_default = {
	careers: "Careers",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "Join our mission to make the web faster and more accessible for everyone, everywhere."
};
var careersBenefits_default = {
	allOurWorkIs: "All our work is open source. Build your public portfolio while making an impact.",
	competitivePay: "Competitive pay",
	impactful: "Impactful",
	openSource: "Open Source",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "Remote-First",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "Why Join Us?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "Work from anywhere. Fully distributed team across 6 time zones.",
	yourWorkDirectlyHelps: "Your work directly helps developers build better, faster internationalized applications."
};
var openPositions_default = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.",
	community: "Community",
	createAndMaintainDocumentation: "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "DevOps Engineer",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "Frontend Developer",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "Senior Performance Engineer",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default = {
	contactUs: "Contact Us",
	getInTouch: "Get in Touch",
	haveIdeasFoundABug: "Have ideas? Found a bug? We'd love to hear from you.",
	haveQuestionsOrWantTo: "Have questions or want to contribute? We'd love to hear from you."
};
var contactForm_default = {
	bugReport: "Bug Report",
	contribution: "Contribution",
	email: "Email",
	emailPlaceholder: "you@example.com",
	message: "Message",
	messagePlaceholder: "Your message...",
	methodologyQuestion: "Methodology Question",
	name: "Name",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "Send Message",
	subject: "Subject",
	topic: "Topic",
	wellGetBackTo: "We'll get back to you within 48 hours.",
	yourName: "Your name"
};
var faqHeader_default = {
	everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark.",
	frequentlyAskedQuestions: "Frequently Asked Questions"
};
var faqList_default = {
	absolutelyWeWelcomeCommunity: "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	allBenchmarksAreRun: "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	areTheResultsStatistically: "Are the results statistically significant?",
	benchmarksRunAutomaticallyVia: "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	canIContributeA: "Can I contribute a new library integration?",
	canISubmitMyOwnBenchmarks: "Can I submit my own benchmarks?",
	doYouOfferConsultingServices: "Do you offer consulting services?",
	howAreBenchmarksConducted: "How are benchmarks conducted?",
	howAreTheBenchmarks: "How are the benchmarks run?",
	howCanIContribute: "How can I contribute?",
	howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
	howOftenAreResults: "How often are results updated?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "Is the data reliable?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "What is i18n Benchmark?",
	whatLibrariesAreCurrently: "What libraries are currently tested?",
	whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
};
var pricingHeader_default = {
	pricing: "Pricing",
	transparentPricingForEvery: "Transparent pricing for every stage of your i18n journey."
};
var pricingTiers_default = {
	freeTier: "Free Tier",
	free: "Free",
	publicBenchmarkDashboard: "Public benchmark dashboard",
	basicLibraryComparisons: "Basic library comparisons",
	communityForumAccess: "Community forum access",
	monthlyResultDigest: "Monthly result digest",
	getStarted: "Get Started",
	proTier: "Pro Tier",
	perMonth: "/month",
	allFreeFeatures: "All Free features",
	customBenchmarkConfigurations: "Custom benchmark configurations",
	privateResultsDashboard: "Private results dashboard",
	apiAccess1000Requests: "API access (1,000 requests/day)",
	slackIntegration: "Slack integration",
	subscribeToPro: "Subscribe to Pro",
	enterpriseTier: "Enterprise Tier",
	custom: "Custom",
	allProFeatures: "All Pro features",
	dedicatedBenchmarkInfrastructure: "Dedicated benchmark infrastructure",
	customLibraryIntegrations: "Custom library integrations",
	slaGuarantees: "SLA guarantees",
	prioritySupport: "Priority support",
	contactSales: "Contact Sales"
};
var productsHeader_default = {
	products: "Products",
	toolsAndServicesTo: "Tools and services to help you optimize your internationalization strategy."
};
var productsGrid_default = {
	benchmarkDashboard: "Benchmark Dashboard",
	interactiveChartsAndTables: "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	bundleAnalyzer: "Bundle Analyzer",
	uploadYourBuildOutput: "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	migrationAssistant: "Migration Assistant",
	automatedCodemodsAndGuides: "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	performanceMonitor: "Performance Monitor",
	continuousPerformanceTrackingFor: "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	learnMore: "Learn More"
};
var settingsHeader_default = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "Manage your account preferences and configuration.",
	settings: "Settings"
};
var profileSection_default = {
	profile: "Profile",
	displayName: "Display Name",
	email: "Email"
};
var preferencesSection_default = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "Dark Mode",
	defaultLanguage: "Default Language",
	emailNotifications: "Email Notifications",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "Preferences",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "Use dark color scheme"
};
var apiAccessSection_default = {
	apiAccess: "API Access",
	apiKey: "API Key",
	useThisKeyTo: "Use this key to access the benchmarking API programmatically.",
	copy: "Copy"
};
var settingsFooter_default = {
	cancel: "Cancel",
	saveChanges: "Save Changes"
};
var teamHeader_default = {
	ourTeam: "Our Team",
	meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
};
var teamGrid_default = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "Manages community contributions, partnerships, and events. Background in open source governance.",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"footer.contact": "Contact",
	"footer.contributing": "Contributing",
	"footer.github": "GitHub",
	"footer.methodology": "Methodology",
	"footer.resources": "Resources",
	"header.blog": "Blog",
	"header.careers": "Careers",
	"header.contact": "Contact",
	"header.faq": "FAQ",
	"header.goToGithub": "Go to GitHub",
	"header.home": "Home",
	"header.methodology": "Methodology",
	"header.mockPages": "Mock Pages",
	"header.pricing": "Pricing",
	"header.products": "Products",
	"header.settings": "Settings",
	"header.team": "Team",
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode."
};
var home_default = {
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results",
	"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"whyItMatters.bundleSize": "Bundle Size",
	"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"whyItMatters.renderingHydration": "Rendering & Hydration",
	"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Dynamic Loading",
	"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"understandingImpact.understandingTheImpact": "Understanding the Impact",
	"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understandingImpact.waterfallRequests": "Waterfall requests:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache invalidation:",
	"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"resultsTable.sampleResults": "Sample Results",
	"resultsTable.bundleSize": "Bundle Size",
	"resultsTable.lookupTime": "Lookup Time",
	"resultsTable.lazyLoading": "Lazy Loading"
};
var about_default = {
	"aboutHeader.methodology": "Methodology",
	"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"aboutGrid.testEnvironment": "Test Environment",
	"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"aboutGrid.applicationDesign": "Application Design",
	"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"aboutGrid.measurementMethodology": "Measurement Methodology",
	"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"aboutGrid.fairComparison": "Fair Comparison",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
	"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"whatWeMeasure.renderingOverhead": "Rendering overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"whatWeMeasure.hydrationCost": "Hydration cost",
	"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure.whatWeMeasure": "What We Measure"
};
var blog_default = {
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community.",
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blogList.march152026": "March 15, 2026",
	"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blogList.march82026": "March 8, 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blogList.february282026": "February 28, 2026",
	"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blogList.february152026": "February 15, 2026",
	"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blogList.february12026": "February 1, 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blogList.january202026": "January 20, 2026",
	"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blogList.readMore": "Read More →"
};
var careers_default = {
	"careersHeader.careers": "Careers",
	"careersHero.fromAnywhere": "from anywhere in the world",
	"careersBenefits.competitivePay": "Competitive pay",
	"careersBenefits.topOfMarket": "Top-of-market compensation",
	"careersBenefits.openSourceTime": "Open source time",
	"careersBenefits.twentyPercentTime": "20% time for OSS",
	"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"openPositions.openPositions": "Open Positions",
	"openPositions.remote": "Remote",
	"openPositions.fullTime": "Full-time",
	"openPositions.engineering": "Engineering",
	"openPositions.applyNow": "Apply Now"
};
var contact_default = {
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours."
};
var faq_default = {
	"faqHeader.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faqHeader.everythingYouNeedTo": "Everything you need to know about the i18n Benchmark project.",
	"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faqList.canIContributeA": "Can I contribute a new library integration?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faqList.howOftenAreResults": "How often are results updated?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
};
var pricing_default = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "forever",
	"pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricingTiers.libraries3": "3 libraries",
	"pricingTiers.communitySupport": "Community support",
	"pricingTiers.publicResults": "Public results",
	"pricingTiers.getStarted": "Get Started",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/month",
	"pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricingTiers.allLibraries": "All libraries",
	"pricingTiers.prioritySupport": "Priority support",
	"pricingTiers.privateResults": "Private results",
	"pricingTiers.ciIntegration": "CI integration",
	"pricingTiers.historicalData": "Historical data",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Custom",
	"pricingTiers.everythingInPro": "Everything in Pro",
	"pricingTiers.onPremiseOption": "On-premise option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricingTiers.customSLAs": "Custom SLAs",
	"pricingTiers.auditLogs": "Audit logs",
	"pricingTiers.trainingSessions": "Training sessions",
	"pricingTiers.contactSales": "Contact Sales",
	"pricingHeader.pricing": "Pricing",
	"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
};
var products_default = {
	"productsHeader.products": "Products",
	"productsHeader.toolsAndServicesTo": "Tools and services to help you optimize your internationalization strategy.",
	"productsGrid.benchmarkDashboard": "Benchmark Dashboard",
	"productsGrid.interactiveChartsAndTables": "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	"productsGrid.bundleAnalyzer": "Bundle Analyzer",
	"productsGrid.uploadYourBuildOutput": "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	"productsGrid.migrationAssistant": "Migration Assistant",
	"productsGrid.automatedCodemodsAndGuides": "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	"productsGrid.performanceMonitor": "Performance Monitor",
	"productsGrid.continuousPerformanceTrackingFor": "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	"productsGrid.learnMore": "Learn More"
};
var settings_default = {
	"settingsHeader.settings": "Settings",
	"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"profileSection.profile": "Profile",
	"profileSection.displayName": "Display Name",
	"profileSection.email": "Email",
	"preferencesSection.preferences": "Preferences",
	"preferencesSection.emailNotifications": "Email Notifications",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferencesSection.darkMode": "Dark Mode",
	"preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"preferencesSection.defaultLanguage": "Default Language",
	"apiAccessSection.apiAccess": "API Access",
	"apiAccessSection.apiKey": "API Key",
	"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"apiAccessSection.copy": "Copy",
	"settingsFooter.cancel": "Cancel",
	"settingsFooter.saveChanges": "Save Changes"
};
var team_default = {
	"teamHeader.ourTeam": "Our Team",
	"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance Engineer",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Data Analyst",
	"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community Manager",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance."
};
var locales = {
	de: {
		route: deRoute,
		header: deHeader,
		footer: deFooter,
		themeToggle: deThemetoggle,
		hero: deHero,
		whyItMatters: deWhyitmatters,
		understandingImpact: deUnderstandingimpact,
		resultsTable: deResultstable,
		aboutHeader: deAboutheader,
		aboutGrid: deAboutgrid,
		whatWeMeasure: deWhatwemeasure,
		blogHeader: deBlogheader,
		blogList: deBloglist,
		careersHeader: deCareersheader,
		careersBenefits: deCareersbenefits,
		openPositions: deOpenpositions,
		contactHeader: deContactheader,
		contactForm: deContactform,
		faqHeader: deFaqheader,
		faqList: deFaqlist,
		pricingHeader: dePricingheader,
		pricingTiers: dePricingtiers,
		productsHeader: deProductsheader,
		productsGrid: deProductsgrid,
		settingsHeader: deSettingsheader,
		profileSection: deProfilesection,
		preferencesSection: dePreferencessection,
		apiAccessSection: deApiaccesssection,
		settingsFooter: deSettingsfooter,
		teamHeader: deTeamheader,
		teamGrid: deTeamgrid,
		common: deCommon,
		...deCommon,
		home: deHome,
		about: deAbout,
		blog: deBlog,
		careers: deCareers,
		contact: deContact,
		faq: deFaq,
		pricing: dePricing,
		products: deProducts,
		settings: deSettings,
		team: deTeam
	},
	en: {
		route: route_default,
		header: header_default,
		footer: footer_default,
		themeToggle: themeToggle_default,
		hero: hero_default,
		whyItMatters: whyItMatters_default,
		understandingImpact: understandingImpact_default,
		resultsTable: resultsTable_default,
		aboutHeader: aboutHeader_default,
		aboutGrid: aboutGrid_default,
		whatWeMeasure: whatWeMeasure_default,
		blogHeader: blogHeader_default,
		blogList: blogList_default,
		careersHeader: careersHeader_default,
		careersBenefits: careersBenefits_default,
		openPositions: openPositions_default,
		contactHeader: contactHeader_default,
		contactForm: contactForm_default,
		faqHeader: faqHeader_default,
		faqList: faqList_default,
		pricingHeader: pricingHeader_default,
		pricingTiers: pricingTiers_default,
		productsHeader: productsHeader_default,
		productsGrid: productsGrid_default,
		settingsHeader: settingsHeader_default,
		profileSection: profileSection_default,
		preferencesSection: preferencesSection_default,
		apiAccessSection: apiAccessSection_default,
		settingsFooter: settingsFooter_default,
		teamHeader: teamHeader_default,
		teamGrid: teamGrid_default,
		common: common_default,
		...common_default,
		home: home_default,
		about: about_default,
		blog: blog_default,
		careers: careers_default,
		contact: contact_default,
		faq: faq_default,
		pricing: pricing_default,
		products: products_default,
		settings: settings_default,
		team: team_default
	},
	es: {
		route: esRoute,
		header: esHeader,
		footer: esFooter,
		themeToggle: esThemetoggle,
		hero: esHero,
		whyItMatters: esWhyitmatters,
		understandingImpact: esUnderstandingimpact,
		resultsTable: esResultstable,
		aboutHeader: esAboutheader,
		aboutGrid: esAboutgrid,
		whatWeMeasure: esWhatwemeasure,
		blogHeader: esBlogheader,
		blogList: esBloglist,
		careersHeader: esCareersheader,
		careersBenefits: esCareersbenefits,
		openPositions: esOpenpositions,
		contactHeader: esContactheader,
		contactForm: esContactform,
		faqHeader: esFaqheader,
		faqList: esFaqlist,
		pricingHeader: esPricingheader,
		pricingTiers: esPricingtiers,
		productsHeader: esProductsheader,
		productsGrid: esProductsgrid,
		settingsHeader: esSettingsheader,
		profileSection: esProfilesection,
		preferencesSection: esPreferencessection,
		apiAccessSection: esApiaccesssection,
		settingsFooter: esSettingsfooter,
		teamHeader: esTeamheader,
		teamGrid: esTeamgrid,
		common: esCommon,
		...esCommon,
		home: esHome,
		about: esAbout,
		blog: esBlog,
		careers: esCareers,
		contact: esContact,
		faq: esFaq,
		pricing: esPricing,
		products: esProducts,
		settings: esSettings,
		team: esTeam
	},
	fr: {
		route: frRoute,
		header: frHeader,
		footer: frFooter,
		themeToggle: frThemetoggle,
		hero: frHero,
		whyItMatters: frWhyitmatters,
		understandingImpact: frUnderstandingimpact,
		resultsTable: frResultstable,
		aboutHeader: frAboutheader,
		aboutGrid: frAboutgrid,
		whatWeMeasure: frWhatwemeasure,
		blogHeader: frBlogheader,
		blogList: frBloglist,
		careersHeader: frCareersheader,
		careersBenefits: frCareersbenefits,
		openPositions: frOpenpositions,
		contactHeader: frContactheader,
		contactForm: frContactform,
		faqHeader: frFaqheader,
		faqList: frFaqlist,
		pricingHeader: frPricingheader,
		pricingTiers: frPricingtiers,
		productsHeader: frProductsheader,
		productsGrid: frProductsgrid,
		settingsHeader: frSettingsheader,
		profileSection: frProfilesection,
		preferencesSection: frPreferencessection,
		apiAccessSection: frApiaccesssection,
		settingsFooter: frSettingsfooter,
		teamHeader: frTeamheader,
		teamGrid: frTeamgrid,
		common: frCommon,
		...frCommon,
		home: frHome,
		about: frAbout,
		blog: frBlog,
		careers: frCareers,
		contact: frContact,
		faq: frFaq,
		pricing: frPricing,
		products: frProducts,
		settings: frSettings,
		team: frTeam
	},
	it: {
		route: itRoute,
		header: itHeader,
		footer: itFooter,
		themeToggle: itThemetoggle,
		hero: itHero,
		whyItMatters: itWhyitmatters,
		understandingImpact: itUnderstandingimpact,
		resultsTable: itResultstable,
		aboutHeader: itAboutheader,
		aboutGrid: itAboutgrid,
		whatWeMeasure: itWhatwemeasure,
		blogHeader: itBlogheader,
		blogList: itBloglist,
		careersHeader: itCareersheader,
		careersBenefits: itCareersbenefits,
		openPositions: itOpenpositions,
		contactHeader: itContactheader,
		contactForm: itContactform,
		faqHeader: itFaqheader,
		faqList: itFaqlist,
		pricingHeader: itPricingheader,
		pricingTiers: itPricingtiers,
		productsHeader: itProductsheader,
		productsGrid: itProductsgrid,
		settingsHeader: itSettingsheader,
		profileSection: itProfilesection,
		preferencesSection: itPreferencessection,
		apiAccessSection: itApiaccesssection,
		settingsFooter: itSettingsfooter,
		teamHeader: itTeamheader,
		teamGrid: itTeamgrid,
		common: itCommon,
		...itCommon,
		home: itHome,
		about: itAbout,
		blog: itBlog,
		careers: itCareers,
		contact: itContact,
		faq: itFaq,
		pricing: itPricing,
		products: itProducts,
		settings: itSettings,
		team: itTeam
	},
	ja: {
		route: jaRoute,
		header: jaHeader,
		footer: jaFooter,
		themeToggle: jaThemetoggle,
		hero: jaHero,
		whyItMatters: jaWhyitmatters,
		understandingImpact: jaUnderstandingimpact,
		resultsTable: jaResultstable,
		aboutHeader: jaAboutheader,
		aboutGrid: jaAboutgrid,
		whatWeMeasure: jaWhatwemeasure,
		blogHeader: jaBlogheader,
		blogList: jaBloglist,
		careersHeader: jaCareersheader,
		careersBenefits: jaCareersbenefits,
		openPositions: jaOpenpositions,
		contactHeader: jaContactheader,
		contactForm: jaContactform,
		faqHeader: jaFaqheader,
		faqList: jaFaqlist,
		pricingHeader: jaPricingheader,
		pricingTiers: jaPricingtiers,
		productsHeader: jaProductsheader,
		productsGrid: jaProductsgrid,
		settingsHeader: jaSettingsheader,
		profileSection: jaProfilesection,
		preferencesSection: jaPreferencessection,
		apiAccessSection: jaApiaccesssection,
		settingsFooter: jaSettingsfooter,
		teamHeader: jaTeamheader,
		teamGrid: jaTeamgrid,
		common: jaCommon,
		...jaCommon,
		home: jaHome,
		about: jaAbout,
		blog: jaBlog,
		careers: jaCareers,
		contact: jaContact,
		faq: jaFaq,
		pricing: jaPricing,
		products: jaProducts,
		settings: jaSettings,
		team: jaTeam
	},
	ko: {
		route: koRoute,
		header: koHeader,
		footer: koFooter,
		themeToggle: koThemetoggle,
		hero: koHero,
		whyItMatters: koWhyitmatters,
		understandingImpact: koUnderstandingimpact,
		resultsTable: koResultstable,
		aboutHeader: koAboutheader,
		aboutGrid: koAboutgrid,
		whatWeMeasure: koWhatwemeasure,
		blogHeader: koBlogheader,
		blogList: koBloglist,
		careersHeader: koCareersheader,
		careersBenefits: koCareersbenefits,
		openPositions: koOpenpositions,
		contactHeader: koContactheader,
		contactForm: koContactform,
		faqHeader: koFaqheader,
		faqList: koFaqlist,
		pricingHeader: koPricingheader,
		pricingTiers: koPricingtiers,
		productsHeader: koProductsheader,
		productsGrid: koProductsgrid,
		settingsHeader: koSettingsheader,
		profileSection: koProfilesection,
		preferencesSection: koPreferencessection,
		apiAccessSection: koApiaccesssection,
		settingsFooter: koSettingsfooter,
		teamHeader: koTeamheader,
		teamGrid: koTeamgrid,
		common: koCommon,
		...koCommon,
		home: koHome,
		about: koAbout,
		blog: koBlog,
		careers: koCareers,
		contact: koContact,
		faq: koFaq,
		pricing: koPricing,
		products: koProducts,
		settings: koSettings,
		team: koTeam
	},
	pt: {
		route: ptRoute,
		header: ptHeader,
		footer: ptFooter,
		themeToggle: ptThemetoggle,
		hero: ptHero,
		whyItMatters: ptWhyitmatters,
		understandingImpact: ptUnderstandingimpact,
		resultsTable: ptResultstable,
		aboutHeader: ptAboutheader,
		aboutGrid: ptAboutgrid,
		whatWeMeasure: ptWhatwemeasure,
		blogHeader: ptBlogheader,
		blogList: ptBloglist,
		careersHeader: ptCareersheader,
		careersBenefits: ptCareersbenefits,
		openPositions: ptOpenpositions,
		contactHeader: ptContactheader,
		contactForm: ptContactform,
		faqHeader: ptFaqheader,
		faqList: ptFaqlist,
		pricingHeader: ptPricingheader,
		pricingTiers: ptPricingtiers,
		productsHeader: ptProductsheader,
		productsGrid: ptProductsgrid,
		settingsHeader: ptSettingsheader,
		profileSection: ptProfilesection,
		preferencesSection: ptPreferencessection,
		apiAccessSection: ptApiaccesssection,
		settingsFooter: ptSettingsfooter,
		teamHeader: ptTeamheader,
		teamGrid: ptTeamgrid,
		common: ptCommon,
		...ptCommon,
		home: ptHome,
		about: ptAbout,
		blog: ptBlog,
		careers: ptCareers,
		contact: ptContact,
		faq: ptFaq,
		pricing: ptPricing,
		products: ptProducts,
		settings: ptSettings,
		team: ptTeam
	},
	ru: {
		route: ruRoute,
		header: ruHeader,
		footer: ruFooter,
		themeToggle: ruThemetoggle,
		hero: ruHero,
		whyItMatters: ruWhyitmatters,
		understandingImpact: ruUnderstandingimpact,
		resultsTable: ruResultstable,
		aboutHeader: ruAboutheader,
		aboutGrid: ruAboutgrid,
		whatWeMeasure: ruWhatwemeasure,
		blogHeader: ruBlogheader,
		blogList: ruBloglist,
		careersHeader: ruCareersheader,
		careersBenefits: ruCareersbenefits,
		openPositions: ruOpenpositions,
		contactHeader: ruContactheader,
		contactForm: ruContactform,
		faqHeader: ruFaqheader,
		faqList: ruFaqlist,
		pricingHeader: ruPricingheader,
		pricingTiers: ruPricingtiers,
		productsHeader: ruProductsheader,
		productsGrid: ruProductsgrid,
		settingsHeader: ruSettingsheader,
		profileSection: ruProfilesection,
		preferencesSection: ruPreferencessection,
		apiAccessSection: ruApiaccesssection,
		settingsFooter: ruSettingsfooter,
		teamHeader: ruTeamheader,
		teamGrid: ruTeamgrid,
		common: ruCommon,
		...ruCommon,
		home: ruHome,
		about: ruAbout,
		blog: ruBlog,
		careers: ruCareers,
		contact: ruContact,
		faq: ruFaq,
		pricing: ruPricing,
		products: ruProducts,
		settings: ruSettings,
		team: ruTeam
	},
	zh: {
		route: zhRoute,
		header: zhHeader,
		footer: zhFooter,
		themeToggle: zhThemetoggle,
		hero: zhHero,
		whyItMatters: zhWhyitmatters,
		understandingImpact: zhUnderstandingimpact,
		resultsTable: zhResultstable,
		aboutHeader: zhAboutheader,
		aboutGrid: zhAboutgrid,
		whatWeMeasure: zhWhatwemeasure,
		blogHeader: zhBlogheader,
		blogList: zhBloglist,
		careersHeader: zhCareersheader,
		careersBenefits: zhCareersbenefits,
		openPositions: zhOpenpositions,
		contactHeader: zhContactheader,
		contactForm: zhContactform,
		faqHeader: zhFaqheader,
		faqList: zhFaqlist,
		pricingHeader: zhPricingheader,
		pricingTiers: zhPricingtiers,
		productsHeader: zhProductsheader,
		productsGrid: zhProductsgrid,
		settingsHeader: zhSettingsheader,
		profileSection: zhProfilesection,
		preferencesSection: zhPreferencessection,
		apiAccessSection: zhApiaccesssection,
		settingsFooter: zhSettingsfooter,
		teamHeader: zhTeamheader,
		teamGrid: zhTeamgrid,
		common: zhCommon,
		...zhCommon,
		home: zhHome,
		about: zhAbout,
		blog: zhBlog,
		careers: zhCareers,
		contact: zhContact,
		faq: zhFaq,
		pricing: zhPricing,
		products: zhProducts,
		settings: zhSettings,
		team: zhTeam
	}
};
function getMessages(locale) {
	return locales[locale] || locales.en;
}
var ALL_LOCALES = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"ja",
	"ko",
	"pt",
	"ru",
	"zh"
];
function TolgeeBase() {
	return Tolgee().use(FormatSimple()).updateDefaults({
		apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
		apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
		staticData: Object.fromEntries(ALL_LOCALES.map((locale) => [locale, () => Promise.resolve(getMessages(locale))]))
	});
}
var tolgee = TolgeeBase().init();
var TolgeeNextProvider = ({ language, staticData, children }) => {
	const router = useRouter();
	useEffect(() => {
		const { unsubscribe: unsubPermanentChange } = tolgee.on("permanentChange", () => {
			router.refresh();
		});
		const { unsubscribe: unsubLanguage } = tolgee.on("language", ({ value }) => {
			document.documentElement.lang = value;
			router.refresh();
		});
		return () => {
			unsubPermanentChange();
			unsubLanguage();
		};
	}, [router]);
	return jsx(TolgeeProvider, {
		tolgee,
		ssr: {
			language,
			staticData
		},
		children
	});
};
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
function AppProviders({ children, locale, staticData }) {
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(TolgeeNextProvider, {
		language: locale,
		staticData,
		children
	});
}
var locale = "en";
var staticData = getMessages(locale);
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale,
		staticData,
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(PreferencesSection, {}) });
}
export { Wrapped as default };
