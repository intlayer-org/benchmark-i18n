import { useIntlayer } from 'react-intlayer';
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  const content = useIntlayer('products-header');

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">{content.products}</h1>
      <p className="mb-10 text-muted-foreground">{content.toolsAndServicesToStreamline}</p>
    </>
  );
}
