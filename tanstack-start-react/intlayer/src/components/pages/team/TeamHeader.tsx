import { useIntlayer } from 'react-intlayer';
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  const content = useIntlayer('team-header');

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">{content.ourTeam}</h1>
      <p className="mb-10 text-muted-foreground">{content.meetThePeopleBehindI18n}</p>
    </>
  );
}
