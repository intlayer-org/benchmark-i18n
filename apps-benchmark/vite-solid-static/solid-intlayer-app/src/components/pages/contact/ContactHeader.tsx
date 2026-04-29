import { useIntlayer } from 'solid-intlayer';
import MockBanner from '../../MockBanner';

export default function ContactHeader() {
  const content = useIntlayer('contact-header');

  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {content().getInTouch}
      </h1>
      <p class="mb-8 text-muted-foreground">
        {content().haveIdeasFoundABug}{' '}
        <a
          href="mailto:contact@intlayer.org"
          class="text-primary hover:underline"
        >
          contact@intlayer.org
        </a>
        .
      </p>
    </>
  );
}
