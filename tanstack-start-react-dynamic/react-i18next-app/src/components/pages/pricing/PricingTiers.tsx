import { useTranslation } from "react-i18next";

export default function PricingTiers() {
  const { t } = useTranslation();

  const tiers = [
    {
      name: t("pricingTiers.freeTier"),
      price: t("pricingTiers.free"),
      period: "",
      features: [
        t("pricingTiers.publicBenchmarkDashboard"),
        t("pricingTiers.basicLibraryComparisons"),
        t("pricingTiers.communityForumAccess"),
        t("pricingTiers.monthlyResultDigest"),
      ],
      buttonText: t("pricingTiers.getStarted"),
    },
    {
      name: t("pricingTiers.proTier"),
      price: "$29",
      period: t("pricingTiers.perMonth"),
      features: [
        t("pricingTiers.allFreeFeatures"),
        t("pricingTiers.customBenchmarkConfigurations"),
        t("pricingTiers.privateResultsDashboard"),
        t("pricingTiers.apiAccess1000Requests"),
        t("pricingTiers.slackIntegration"),
      ],
      buttonText: t("pricingTiers.subscribeToPro"),
      highlighted: true,
    },
    {
      name: t("pricingTiers.enterpriseTier"),
      price: t("pricingTiers.custom"),
      period: "",
      features: [
        t("pricingTiers.allProFeatures"),
        t("pricingTiers.dedicatedBenchmarkInfrastructure"),
        t("pricingTiers.customLibraryIntegrations"),
        t("pricingTiers.slaGuarantees"),
        t("pricingTiers.prioritySupport"),
      ],
      buttonText: t("pricingTiers.contactSales"),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tItem) => (
        <div
          key={tItem.name}
          className={`flex flex-col rounded-lg border p-6 ${
            tItem.highlighted
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border bg-card"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">
            {tItem.name}
          </h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-foreground">
              {tItem.price}
            </span>
            <span className="text-sm text-muted-foreground">
              {tItem.period}
            </span>
          </div>
          <ul className="mb-6 flex-1 space-y-2">
            {tItem.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
              tItem.highlighted
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {tItem.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}
