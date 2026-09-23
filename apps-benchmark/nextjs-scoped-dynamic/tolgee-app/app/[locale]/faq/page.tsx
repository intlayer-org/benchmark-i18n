import dynamic from "next/dynamic";
import { getMessages } from "@/i18n/getMessages";
import TolgeePageHydrator from "@/components/TolgeePageHydrator";

const FAQHeader = dynamic(() => import("../../../components/pages/faq/FAQHeader"));
const FAQList = dynamic(() => import("../../../components/pages/faq/FAQList"));

export default async function FAQ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale, [
    "faq",
    "faqHeader",
    "faqList",
  ]);

  return (
    <TolgeePageHydrator locale={locale} messages={messages}>
      <div className="container py-16">
        <FAQHeader />

        <FAQList />
      </div>
    </TolgeePageHydrator>
  );
}
