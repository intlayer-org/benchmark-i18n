import { useIntlayer } from 'solid-intlayer';
export default function MockBanner() {
  const content = useIntlayer('mock-banner');

  return (
    <div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
      {content().thisPageContainsMockData}
    </div>
  );
}
