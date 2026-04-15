import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  const { i18n } = useLingui();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {i18n._({ id: "team-header.ourTeam", message: "Our Team" })}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {i18n._({ id: "team-header.meetThePeopleBehindI18n", message: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools." })}
      </p>
    </>
  );
}
