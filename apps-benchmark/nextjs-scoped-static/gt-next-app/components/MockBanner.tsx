import { T } from "gt-next";

const MockBanner = () => (
  <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
    <T>
      ⚠️ This page contains mock data for benchmarking purposes only. It is not
      related to any real business or service.
    </T>
  </div>
);

export default MockBanner;
