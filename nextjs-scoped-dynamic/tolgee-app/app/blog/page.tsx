import dynamic from "next/dynamic";

const BlogHeader = dynamic(() => import("@/components/pages/blog/BlogHeader"), {
  loading: () => <div className="h-48 animate-pulse bg-muted/20" />,
});
const BlogList = dynamic(() => import("@/components/pages/blog/BlogList"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});

export default function Blog() {
  return (
    <div className="container py-16">
      <BlogHeader />

      <BlogList />
    </div>
  );
}
