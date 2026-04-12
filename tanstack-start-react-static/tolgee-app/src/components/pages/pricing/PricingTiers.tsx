import { T, useTranslate } from "@tolgee/react";

export default function PricingTiers() {
  const { t } = useTranslate();

  const tiers = [
    {
      name: t("pricingTiers.freeTier", "Free Tier"),
      price: t("pricingTiers.free", "Free"),
      period: "",
      features: [
        t("pricingTiers.publicBenchmarkDashboard", "Public benchmark dashboard"),
        t("pricingTiers.basicLibraryComparisons", "Basic library comparisons"),
        t("pricingTiers.communityForumAccess", "Community forum access"),
        t("pricingTiers.monthlyResultDigest", "Monthly result digest"),
      ],
      cta: t("pricingTiers.getStarted", "Get Started"),
    },
    {
      name: t("pricingTiers.proTier", "Pro Tier"),
      price: "$29",
      period: t("pricingTiers.perMonth", "/month"),
      features: [
        t("pricingTiers.allFreeFeatures", "All Free features"),
        t(
          "pricingTiers.customBenchmarkConfigurations",
          "Custom benchmark configurations"
        ),
        t("pricingTiers.privateResultsDashboard", "Private results dashboard"),
        t("pricingTiers.apiAccess1000Requests", "API access (1,000 requests/day)"),
        t("pricingTiers.slackIntegration", "Slack integration"),
      ],
      highlighted: true,
      cta: t("pricingTiers.subscribeToPro", "Subscribe to Pro"),
    },
    {
      name: t("pricingTiers.enterpriseTier", "Enterprise Tier"),
      price: t("pricingTiers.custom", "Custom"),
      period: "",
      features: [
        t("pricingTiers.allProFeatures", "All Pro features"),
        t(
          "pricingTiers.dedicatedBenchmarkInfrastructure",
          "Dedicated benchmark infrastructure"
        ),
        t(
          "pricingTiers.customLibraryIntegrations",
          "Custom library integrations"
        ),
        t("pricingTiers.slaGuarantees", "SLA guarantees"),
        t("pricingTiers.prioritySupport", "Priority support"),
      ],
      cta: t("pricingTiers.contactSales", "Contact Sales"),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`flex flex-col rounded-lg border p-6 ${
            tier.highlighted
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border bg-card"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-foreground">
              {tier.price}
            </span>
            <span className="text-sm text-muted-foreground">{tier.period}</span>
          </div>
          <ul className="mb-6 flex-1 space-y-2">
            {tier.features.map((f) => (
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
              tier.highlighted
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {tier.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
