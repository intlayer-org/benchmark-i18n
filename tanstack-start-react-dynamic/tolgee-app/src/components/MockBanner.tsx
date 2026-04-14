import { T } from "../i18n/tolgee";

const MockBanner = () => (
  <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
    <T
      keyName="mockBanner"
      defaultValue="⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
    />
  </div>
);

export default MockBanner;
