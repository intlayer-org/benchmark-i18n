import dynamic from "next/dynamic";

const FAQHeader = dynamic(() => import("../../../components/pages/faq/FAQHeader"), {
  loading: () => <div className="h-48 animate-pulse bg-muted/20" />,
});
const FAQList = dynamic(() => import("../../../components/pages/faq/FAQList"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});

export default function FAQ() {
  return (
    <div className="container py-16">
      <FAQHeader />

      <FAQList />
    </div>
  );
}
