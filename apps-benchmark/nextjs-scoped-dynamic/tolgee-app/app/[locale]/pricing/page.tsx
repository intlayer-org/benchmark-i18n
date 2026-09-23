import dynamic from "next/dynamic";
import { getMessages } from "@/i18n/getMessages";
import TolgeePageHydrator from "@/components/TolgeePageHydrator";

const PricingHeader = dynamic(() => import("../../../components/pages/pricing/PricingHeader"));
const PricingTiers = dynamic(() => import("../../../components/pages/pricing/PricingTiers"));

export default async function Pricing({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale, [
    "pricing",
    "pricingHeader",
    "pricingTiers",
  ]);

  return (
    <TolgeePageHydrator locale={locale} messages={messages}>
      <div className="container py-16">
        <PricingHeader />

        <PricingTiers />
      </div>
    </TolgeePageHydrator>
  );
}
