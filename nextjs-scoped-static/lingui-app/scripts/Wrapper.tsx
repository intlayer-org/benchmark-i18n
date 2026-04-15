import React from "react";
import AppProviders from "../components/AppProviders";
import { messages as enAbout } from "../locales/en/about.mjs";
import { messages as enBlog } from "../locales/en/blog.mjs";
import { messages as enCareers } from "../locales/en/careers.mjs";
import { messages as enContact } from "../locales/en/contact.mjs";
import { messages as enFaq } from "../locales/en/faq.mjs";
import { messages as enHome } from "../locales/en/home.mjs";
import { messages as enPricing } from "../locales/en/pricing.mjs";
import { messages as enProducts } from "../locales/en/products.mjs";
import { messages as enRoute } from "../locales/en/route.mjs";
import { messages as enSettings } from "../locales/en/settings.mjs";
import { messages as enShared } from "../locales/en/shared.mjs";
import { messages as enTeam } from "../locales/en/team.mjs";

const enMessages = { ...enAbout, ...enBlog, ...enCareers, ...enContact, ...enFaq, ...enHome, ...enPricing, ...enProducts, ...enRoute, ...enSettings, ...enShared, ...enTeam };

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders locale="en" messages={enMessages}>
      {children}
    </AppProviders>
  );
}
