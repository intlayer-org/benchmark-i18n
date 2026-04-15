import { IntlProvider } from "react-intl";
import { getMessages } from "../../i18n/getMessages";
import { Route as LocaleRoute } from "./route";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const BlogHeader = lazy(() => import("../../components/pages/blog/BlogHeader"));
const BlogList = lazy(() => import("../../components/pages/blog/BlogList"));

export const Route = createFileRoute("/$locale/blog")({
  loader: async ({ params }) => {
    const messages = await getMessages(params.locale || "en", ["blog"]);
    return { messages };
  },
  component: Blog,
});

function Blog() {
  
  const rootData = LocaleRoute.useLoaderData();
  const pageData = Route.useLoaderData();
  const mergedMessages = { ...rootData.messages, ...pageData.messages };

  return (
    <IntlProvider messages={mergedMessages} locale={rootData.locale}>
      <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <BlogHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <BlogList />
      </Suspense>
    </div>
    </IntlProvider>
  );
}
