import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";

const BlogHeader = lazy(() => import("../../components/pages/blog/BlogHeader"));
const BlogList = lazy(() => import("../../components/pages/blog/BlogList"));

export const Route = createFileRoute("/$locale/blog")({
  loader: async ({ params, context }) => {
    const { i18n } = context;
    const resources = await loadNamespaces(
      params.locale ?? defaultLocale,
      ["blog"],
      i18n,
    );
    return { resources };
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
