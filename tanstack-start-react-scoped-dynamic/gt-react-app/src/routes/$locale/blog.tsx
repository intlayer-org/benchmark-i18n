import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

const BlogHeader = lazy(() => import("../../components/pages/blog/BlogHeader"));
const BlogList = lazy(() => import("../../components/pages/blog/BlogList"));

export const Route = createFileRoute("/$locale/blog")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["blog"]);
    return { translations };
  },
  component: Blog,
});

function Blog() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <BlogHeader />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <BlogList />
        </Suspense>
      </div>
    </GTProvider>
  );
}
