import { useIntlayer } from "react-intlayer";

const MockBanner = () => {
  const content = useIntlayer("app");
  return (
    <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
      {content.mockBanner}
    </div>
  );
};

export default MockBanner;
