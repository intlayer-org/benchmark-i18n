"use client";

import { useScopedI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  const scopedT = useScopedI18n("careers-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {scopedT("title")}
      </h1>
      <p className="mb-4 text-muted-foreground">
        {scopedT("joinOurMissionToImprove")}
      </p>
    </>
  );
}
