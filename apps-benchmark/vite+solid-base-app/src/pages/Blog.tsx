import { lazy, Suspense } from "solid-js";

const BlogHeader = lazy(() => import("../components/pages/blog/BlogHeader"));
const BlogList = lazy(() => import("../components/pages/blog/BlogList"));

export default function Blog() {
  return (
    <div class="container py-16">
      <Suspense fallback={<div class="h-48 animate-pulse bg-muted/20" />}>
        <BlogHeader />
      </Suspense>

      <Suspense fallback={<div class="h-96 animate-pulse bg-muted/20" />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
