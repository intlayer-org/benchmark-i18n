import { useIntlayer } from 'solid-intlayer';
import { usePerformanceMeasure } from '../../../hooks/usePerformanceMeasure';

export default function AboutHeader() {
  const content = useIntlayer('about-header');

  usePerformanceMeasure('AboutHeader');
  return (
    <>
      <h1 class="mb-4 text-3xl font-bold text-foreground">
        {content().aboutThisBenchmark}
      </h1>
      <p class="mb-8 max-w-3xl text-muted-foreground">
        {content().thisIsAnOpenSource}
      </p>
    </>
  );
}
