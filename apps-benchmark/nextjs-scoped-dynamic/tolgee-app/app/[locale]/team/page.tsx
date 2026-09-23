import dynamic from "next/dynamic";
import { getMessages } from "@/i18n/getMessages";
import TolgeePageHydrator from "@/components/TolgeePageHydrator";

const TeamHeader = dynamic(() => import("../../../components/pages/team/TeamHeader"));
const TeamGrid = dynamic(() => import("../../../components/pages/team/TeamGrid"));

export default async function Team({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale, [
    "team",
    "teamHeader",
    "teamGrid",
  ]);

  return (
    <TolgeePageHydrator locale={locale} messages={messages}>
      <div className="container py-16">
        <TeamHeader />

        <TeamGrid />
      </div>
    </TolgeePageHydrator>
  );
}
