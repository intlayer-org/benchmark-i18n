import dynamic from "next/dynamic";
import { getMessages } from "@/i18n/getMessages";
import TolgeePageHydrator from "@/components/TolgeePageHydrator";

const CareersHeader = dynamic(() => import("../../../components/pages/careers/CareersHeader"));
const CareersBenefits = dynamic(() => import("../../../components/pages/careers/CareersBenefits"));
const OpenPositions = dynamic(() => import("../../../components/pages/careers/OpenPositions"));

export default async function Careers({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale, [
    "careers",
    "careersHeader",
    "careersBenefits",
    "openPositions",
  ]);

  return (
    <TolgeePageHydrator locale={locale} messages={messages}>
      <div className="container py-16">
        <CareersHeader />

        <CareersBenefits />

        <OpenPositions />
      </div>
    </TolgeePageHydrator>
  );
}
