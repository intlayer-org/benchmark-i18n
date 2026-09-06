import dynamic from "next/dynamic";

const FAQHeader = dynamic(() => import("../../../components/pages/faq/FAQHeader"));
const FAQList = dynamic(() => import("../../../components/pages/faq/FAQList"));

export default function FAQ() {
  return (
    <div className="container py-16">
      <FAQHeader />

      <FAQList />
    </div>
  );
}
