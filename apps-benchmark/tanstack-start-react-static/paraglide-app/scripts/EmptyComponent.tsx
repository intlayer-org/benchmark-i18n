import React from "react";
import { getLocale, experimentalStaticLocale } from "../paraglide/runtime";

const en_example =
  /** @type {(inputs: About_Grid_Choosingani18nlibraryis4Inputs) => LocalizedString} */ () => {
    return /** @type {LocalizedString} */ `Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.`;
  };

const example =
  /** @type {((inputs?: About_Grid_Whythisexists2Inputs, options?: { locale?: "en" | "fr" | "es" | "de" | "it" | "pt" | "zh" | "ja" | "ko" | "ru" }) => LocalizedString) & import('../runtime.js').MessageMetadata<About_Grid_Whythisexists2Inputs, { locale?: "en" | "fr" | "es" | "de" | "it" | "pt" | "zh" | "ja" | "ko" | "ru" }, {}>} */ (
    inputs = {},
    options = {},
  ) => {
    const locale =
      experimentalStaticLocale ?? (options as any).locale ?? getLocale();
    if (locale === "en") return en_example();
  };

export default function EmptyComponent() {
  void example;

  return <></>;
}
