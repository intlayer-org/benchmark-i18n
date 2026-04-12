import { type Dictionary, t } from 'intlayer';

const apiAccessSectionContent = {
  key: 'api-access-section',
  content: {
    apiAccess: t({
      en: "API Access"
    }),

    apiKey: t({
      en: "API Key"
    }),

    useThisKeyToAccess: t({
      en: "Use this key to access the benchmarking API programmatically."
    })
  },
} satisfies Dictionary;

export default apiAccessSectionContent;
