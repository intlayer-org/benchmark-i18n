import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const BlogHeader = lazy(() => import("../components/pages/blog/BlogHeader"));
const BlogList = lazy(() => import("../components/pages/blog/BlogList"));

export const Route = createFileRoute("/blog")({
  component: Blog,
});

function Blog() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <BlogHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
