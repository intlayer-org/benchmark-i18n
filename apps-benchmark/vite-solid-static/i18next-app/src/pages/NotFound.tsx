import { A, useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";
import { isLocale } from "../i18n/config";
import { trans } from "../i18n";

export default function NotFound() {
  const location = useLocation();

  const homeHref = createMemo(() => {
    const first = location.pathname.split("/").filter(Boolean)[0];
    const loc = first && isLocale(first) ? first : "en";
    return `/${loc}`;
  });

  return (
    <div class="flex min-h-[60vh] items-center justify-center bg-muted/30">
      <div class="text-center">
        <h1 class="mb-4 text-4xl font-bold">{trans("notFound.title")}</h1>
        <p class="mb-4 text-xl text-muted-foreground">{trans("notFound.description")}</p>
        <A
          href={homeHref()}
          class="text-primary underline hover:text-primary/90"
        >
          {trans("notFound.returnHome")}
        </A>
      </div>
    </div>
  );
}
