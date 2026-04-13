import os

locales_dir = '/Users/aymericpineau/Documents/benchmark-bloom/tanstack-start-react-scoped/tolgee-app/src/i18n/locales'
locales = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'ru', 'zh']
namespaces = [
    'route', 'header', 'footer', 'themeToggle', 'hero', 'whyItMatters', 
    'understandingImpact', 'resultsTable', 'aboutHeader', 'aboutGrid', 
    'whatWeMeasure', 'blogHeader', 'blogList', 'careersHeader', 
    'careersBenefits', 'openPositions', 'contactHeader', 'contactForm', 
    'faq-header1', 'faqList', 'pricingHeader', 'pricingTiers', 
    'productsHeader', 'productsGrid', 'settingsHeader', 'profileSection', 
    'preferencesSection', 'apiAccessSection', 'settingsFooter', 
    'teamHeader', 'teamGrid', 'mockBanner',
    'shared', 'home', 'about', 'blog', 'careers', 'contact', 'faq', 
    'pricing', 'products', 'settings', 'team'
]

content = ""

def to_var_name(ns):
    return ns.replace('-', '_').capitalize()

for locale in locales:
    for ns in namespaces:
        var_name = f"{locale}{to_var_name(ns)}"
        content += f'import {var_name} from "./locales/{locale}/{ns}.json";\n'
    content += '\n'

content += 'const locales = {\n'
for locale in locales:
    content += f'  {locale}: {{\n'
    for ns in namespaces:
        var_name = f"{locale}{to_var_name(ns)}"
        if ns == 'faq-header1':
            content += f'    "faq-header1": {var_name},\n'
        else:
            content += f'    {ns}: {var_name},\n'
    content += '  },\n'
content += '} as const;\n\n'

content += """export type LocaleKey = keyof typeof locales;

export function getMessages(locale: string) {
  // Return requested locale or fallback to English if missing
  return locales[locale as LocaleKey] || locales.en;
}
"""

with open('/Users/aymericpineau/Documents/benchmark-bloom/tanstack-start-react-scoped/tolgee-app/src/i18n/getMessages.ts', 'w') as f:
    f.write(content)
