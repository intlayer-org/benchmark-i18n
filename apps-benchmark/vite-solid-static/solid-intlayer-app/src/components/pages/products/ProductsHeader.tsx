import { useIntlayer } from 'solid-intlayer';
import MockBanner from '../../MockBanner';

export default function ProductsHeader() {
  const content = useIntlayer('products-header');

  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {content().products}
      </h1>
      <p class="mb-10 text-muted-foreground">
        {content().toolsAndServicesToStreamline}
      </p>
    </>
  );
}
