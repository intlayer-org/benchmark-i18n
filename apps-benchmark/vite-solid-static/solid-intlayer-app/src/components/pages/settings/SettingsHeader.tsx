import { useIntlayer } from 'solid-intlayer';
import MockBanner from '../../MockBanner';

export default function SettingsHeader() {
  const content = useIntlayer('settings-header');

  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {content().settings}
      </h1>
      <p class="mb-8 text-muted-foreground">
        {content().manageYourAccountPreferencesAnd}
      </p>
    </>
  );
}
