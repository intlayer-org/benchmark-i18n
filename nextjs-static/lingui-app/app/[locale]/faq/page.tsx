import { lazy, Suspense } from "react";

const FAQHeader = lazy(() => import("../../../components/pages/faq/FAQHeader"));
const FAQList = lazy(() => import("../../../components/pages/faq/FAQList"));

export default function FAQ() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <FAQHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <FAQList />
      </Suspense>
    </div>
  );
}
