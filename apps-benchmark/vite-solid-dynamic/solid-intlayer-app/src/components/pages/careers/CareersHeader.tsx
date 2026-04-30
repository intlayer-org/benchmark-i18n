import { useIntlayer } from 'solid-intlayer';
import MockBanner from '../../MockBanner';

export default function CareersHeader() {
  const content = useIntlayer('careers-header');

  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {content().careers}
      </h1>
      <p class="mb-4 text-muted-foreground">
        {content().joinOurMissionToImprove}
      </p>
    </>
  );
}
