import dynamic from "next/dynamic";

const BlogHeader = dynamic(() => import("../../../components/pages/blog/BlogHeader"));
const BlogList = dynamic(() => import("../../../components/pages/blog/BlogList"));

export default function Blog() {
  return (
    <div className="container py-16">
      <BlogHeader />

      <BlogList />
    </div>
  );
}
