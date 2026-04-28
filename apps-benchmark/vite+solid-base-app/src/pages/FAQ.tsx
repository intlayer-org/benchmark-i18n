import { lazy, Suspense } from "solid-js";

const FAQHeader = lazy(() => import("../components/pages/faq/FAQHeader"));
const FAQList = lazy(() => import("../components/pages/faq/FAQList"));

export default function FAQ() {
  return (
    <div class="container py-16">
      <Suspense fallback={<div class="h-48 animate-pulse bg-muted/20" />}>
        <FAQHeader />
      </Suspense>

      <Suspense fallback={<div class="h-96 animate-pulse bg-muted/20" />}>
        <FAQList />
      </Suspense>
    </div>
  );
}
