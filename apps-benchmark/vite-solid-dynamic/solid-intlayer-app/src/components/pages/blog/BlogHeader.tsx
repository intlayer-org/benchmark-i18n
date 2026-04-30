import { useIntlayer } from 'solid-intlayer';
import MockBanner from '../../MockBanner';

export default function BlogHeader() {
  const content = useIntlayer('blog-header');

  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">{content().blog}</h1>
      <p class="mb-10 text-muted-foreground">
        {content().insightsTutorialsAndAnalysisFrom}
      </p>
    </>
  );
}
