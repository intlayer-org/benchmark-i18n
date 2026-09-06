import dynamic from "next/dynamic";

const TeamHeader = dynamic(() => import("../../../components/pages/team/TeamHeader"));
const TeamGrid = dynamic(() => import("../../../components/pages/team/TeamGrid"));

export default function Team() {
  return (
    <div className="container py-16">
      <TeamHeader />

      <TeamGrid />
    </div>
  );
}
