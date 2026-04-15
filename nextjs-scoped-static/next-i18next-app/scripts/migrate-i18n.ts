import { readFileSync, writeFileSync } from "fs";

const mapping: Record<string, string> = {
  "components/pages/pricing/PricingTiers.tsx": "pricing",
  "components/pages/pricing/PricingHeader.tsx": "pricing",
  "components/pages/team/TeamGrid.tsx": "team",
  "components/pages/team/TeamHeader.tsx": "team",
  "components/pages/careers/OpenPositions.tsx": "careers",
  "components/pages/settings/PreferencesSection.tsx": "settings",
  "components/pages/careers/CareersHeader.tsx": "careers",
  "components/pages/settings/SettingsHeader.tsx": "settings",
  "components/pages/careers/CareersBenefits.tsx": "careers",
  "components/pages/settings/ApiAccessSection.tsx": "settings",
  "components/pages/blog/BlogList.tsx": "blog",
  "components/pages/settings/SettingsFooter.tsx": "settings",
  "components/pages/blog/BlogHeader.tsx": "blog",
  "components/pages/settings/ProfileSection.tsx": "settings",
  "components/MockBanner.tsx": "shared",
  "components/pages/about/AboutGrid.tsx": "about",
  "components/Header.tsx": "shared",
  "components/pages/about/AboutHeader.tsx": "about",
  "components/pages/about/WhatWeMeasure.tsx": "about",
  "components/ThemeToggle.tsx": "shared",
  "components/pages/faq/FAQHeader.tsx": "faq",
  "components/Footer.tsx": "shared",
  "components/pages/faq/FAQList.tsx": "faq",
  "components/pages/products/ProductsHeader.tsx": "products",
  "components/pages/products/ProductsGrid.tsx": "products",
  "components/pages/contact/ContactHeader.tsx": "contact",
  "components/pages/contact/ContactForm.tsx": "contact",
  "components/pages/home/UnderstandingImpact.tsx": "home",
  "components/pages/home/ResultsTable.tsx": "home",
  "components/pages/home/WhyItMatters.tsx": "home",
};

for (const [file, ns] of Object.entries(mapping)) {
  let src = readFileSync(file, "utf8");
  src = src.replace(new RegExp(`useTranslation\\("${ns}"\\)`, "g"), "useTranslation()");
  src = src.replace(/(\bt\()(["'])([^"']+)(\2\))/g, (_m, p1, q, key, p4) => {
    if (key.includes(":")) return `${p1}${q}${key.replace(":", ".")}${p4}`;
    return `${p1}${q}${ns}.${key}${p4}`;
  });
  writeFileSync(file, src);
  console.log("updated", file);
}
