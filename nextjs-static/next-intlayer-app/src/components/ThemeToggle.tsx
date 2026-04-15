import { useIntlayer } from "next-intlayer/server";

export default function ThemeToggle() {
  const content = useIntlayer("theme-toggle");

  return (
    <div className="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground">
      {content.themeAuto.value}
    </div>
  );
}
