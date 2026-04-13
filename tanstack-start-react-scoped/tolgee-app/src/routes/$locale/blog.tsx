import { tolgee } from "../../i18n/tolgee";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const BlogHeader = lazy(() => import("../../components/pages/blog/BlogHeader"));
const BlogList = lazy(() => import("../../components/pages/blog/BlogList"));

export const Route = createFileRoute("/$locale/blog")({
  loader: async ({ params }) => {
    await tolgee.loadRecords([
      { language: params.locale, namespace: "blog" },
      { language: params.locale, namespace: "blogHeader" },
      { language: params.locale, namespace: "blogList" },
    ]);
  },
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
