import { Suspense } from "react";
import BlogHeader from "@/components/pages/blog/BlogHeader";
import BlogList from "@/components/pages/blog/BlogList";
import type { NextPageIntlayer } from "next-intlayer";

const Blog: NextPageIntlayer = () => (
  <div className="container py-16">
    <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
      <BlogHeader />
    </Suspense>

    <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
      <BlogList />
    </Suspense>
  </div>
);

export default Blog;
