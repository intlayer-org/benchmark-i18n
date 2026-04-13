import fs from 'fs';
import path from 'path';

const localesDir = '/Users/aymericpineau/Documents/benchmark-bloom/tanstack-start-react-scoped/tolgee-app/src/i18n/locales';
const locales = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'ru', 'zh'];
const namespaces = [
  'route', 'header', 'footer', 'themeToggle', 'hero', 'whyItMatters', 
  'understandingImpact', 'resultsTable', 'aboutHeader', 'aboutGrid', 
  'whatWeMeasure', 'blogHeader', 'blogList', 'careersHeader', 
  'careersBenefits', 'openPositions', 'contactHeader', 'contactForm', 
  'faq-header1', 'faqList', 'pricingHeader', 'pricingTiers', 
  'productsHeader', 'productsGrid', 'settingsHeader', 'profileSection', 
  'preferencesSection', 'apiAccessSection', 'settingsFooter', 
  'teamHeader', 'teamGrid', 'mockBanner',
  // New ones
  'shared', 'home', 'about', 'blog', 'careers', 'contact', 'faq', 
  'pricing', 'products', 'settings', 'team'
];

let content = '';

// Helper to sanitize namespace name for variable
const toVarName = (ns) => ns.replace(/-/g, '_');

// Imports
locales.forEach(locale => {
  namespaces.forEach(ns => {
    const varName = `${locale}${toVarName(ns.charAt(0).toUpperCase() + ns.slice(1))}`;
    content += `import ${varName} from "./locales/${locale}/${ns}.json";\n`;
  });
  content += '\n';
});

content += 'const locales = {\n';
locales.forEach(locale => {
  content += `  ${locale}: {\n`;
  namespaces.forEach(ns => {
    const varName = `${locale}${toVarName(ns.charAt(0).toUpperCase() + ns.slice(1))}`;
    if (ns === 'faq-header1') {
      content += `    "faq-header1": ${varName},\n`;
    } else {
      content += `    ${ns}: ${varName},\n`;
    }
  });
  content += '  },\n';
});
content += '} as const;\n\n';

content += `export type LocaleKey = keyof typeof locales;

export function getMessages(locale: string) {
  // Return requested locale or fallback to English if missing
  return locales[locale as LocaleKey] || locales.en;
}
`;

fs.writeFileSync('/Users/aymericpineau/Documents/benchmark-bloom/tanstack-start-react-scoped/tolgee-app/src/i18n/getMessages.ts', content);
