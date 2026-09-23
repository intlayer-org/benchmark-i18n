import dynamic from "next/dynamic";
import { getMessages } from "@/i18n/getMessages";
import TolgeePageHydrator from "@/components/TolgeePageHydrator";

const BlogHeader = dynamic(() => import("../../../components/pages/blog/BlogHeader"));
const BlogList = dynamic(() => import("../../../components/pages/blog/BlogList"));

export default async function Blog({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale, [
    "blog",
    "blogHeader",
    "blogList",
  ]);

  return (
    <TolgeePageHydrator locale={locale} messages={messages}>
      <div className="container py-16">
        <BlogHeader />

        <BlogList />
      </div>
    </TolgeePageHydrator>
  );
}
