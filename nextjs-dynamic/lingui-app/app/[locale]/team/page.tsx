import dynamic from "next/dynamic";

const TeamHeader = dynamic(() => import("../../../components/pages/team/TeamHeader"), {
  loading: () => <div className="h-48 animate-pulse bg-muted/20" />,
});
const TeamGrid = dynamic(() => import("../../../components/pages/team/TeamGrid"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});

export default function Team() {
  return (
    <div className="container py-16">
      <TeamHeader />

      <TeamGrid />
    </div>
  );
}
