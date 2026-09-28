import { FormattedMessage } from "react-intl";

const MockBanner = () => (
  <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
    <FormattedMessage id="mockBanner" />
  </div>
);

export default MockBanner;
