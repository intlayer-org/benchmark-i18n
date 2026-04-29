import { useIntlayer } from 'solid-intlayer';
export default function AboutGrid() {
  const content = useIntlayer('about-grid');

  return (
    <div class="grid gap-8 md:grid-cols-2">
      <div class="rounded-lg border border-border bg-card p-6">
        <h2 class="mb-3 text-xl font-semibold text-foreground">
          {content().whyThisExists}
        </h2>
        <p class="text-sm text-muted-foreground">
          {content().choosingAnI18nLibraryIs}
        </p>
      </div>
      <div class="rounded-lg border border-border bg-card p-6">
        <h2 class="mb-3 text-xl font-semibold text-foreground">
          {content().methodology}
        </h2>
        <p class="text-sm text-muted-foreground">
          {content().theSame10PageApp}
        </p>
      </div>
    </div>
  );
}
