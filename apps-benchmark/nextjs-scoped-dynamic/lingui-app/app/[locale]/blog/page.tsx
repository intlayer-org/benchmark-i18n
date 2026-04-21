import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const BlogHeader = dynamic(() => import("../../../components/pages/blog/BlogHeader"));
const BlogList = dynamic(() => import("../../../components/pages/blog/BlogList"));

export default async function Blog({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["blog"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <BlogHeader />

        <BlogList />
      </div>
    </LinguiPageCatalog>
  );
}
