import { Suspense } from "react";
import TeamHeader from "@/components/pages/team/TeamHeader";
import TeamGrid from "@/components/pages/team/TeamGrid";
import type { NextPageIntlayer } from "next-intlayer";

const Team: NextPageIntlayer = () => (
  <div className="container py-16">
    <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
      <TeamHeader />
    </Suspense>

    <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
      <TeamGrid />
    </Suspense>
  </div>
);

export default Team;
