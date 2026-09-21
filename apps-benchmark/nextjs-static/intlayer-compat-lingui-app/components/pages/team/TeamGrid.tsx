"use client";

import { useLingui } from "@lingui/react";

export default function TeamGrid() {
  const { i18n } = useLingui();

  const members = [
    {
      name: i18n._({ id: "team.sarahChen", message: "Sarah Chen" }),
      role: i18n._({
        id: "team.founderLeadEngineer",
        message: "Founder & Lead Engineer",
      }),
      bio: i18n._({
        id: "team.sarahBio",
        message:
          "Former Google engineer with 10 years of experience building internationalization systems at scale.",
      }),
    },
    {
      name: i18n._({ id: "team.marcusWeber", message: "Marcus Weber" }),
      role: i18n._({
        id: "team.performanceEngineer",
        message: "Performance Engineer",
      }),
      bio: i18n._({
        id: "team.marcusBio",
        message:
          "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
      }),
    },
    {
      name: i18n._({ id: "team.aishaPatel", message: "Aisha Patel" }),
      role: i18n._({ id: "team.developerAdvocate", message: "Developer Advocate" }),
      bio: i18n._({
        id: "team.aishaBio",
        message:
          "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
      }),
    },
    {
      name: i18n._({ id: "team.tomasRodriguez", message: "Tomás Rodríguez" }),
      role: i18n._({ id: "team.fullStackDeveloper", message: "Full-Stack Developer" }),
      bio: i18n._({
        id: "team.tomasBio",
        message:
          "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
      }),
    },
    {
      name: i18n._({ id: "team.yukiTanaka", message: "Yuki Tanaka" }),
      role: i18n._({ id: "team.dataAnalyst", message: "Data Analyst" }),
      bio: i18n._({
        id: "team.yukiBio",
        message:
          "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
      }),
    },
    {
      name: i18n._({ id: "team.elenaKowalski", message: "Elena Kowalski" }),
      role: i18n._({ id: "team.communityManager", message: "Community Manager" }),
      bio: i18n._({
        id: "team.elenaBio",
        message:
          "Manages community contributions, partnerships, and events. Background in open source governance.",
      }),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {members.map((m) => (
        <div
          key={m.name}
          className="rounded-lg border border-border bg-card p-6 text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
            {m.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <h3 className="text-base font-semibold text-foreground">{m.name}</h3>
          <p className="mb-2 text-xs font-medium text-primary">{m.role}</p>
          <p className="text-sm text-muted-foreground">{m.bio}</p>
        </div>
      ))}
    </div>
  );
}
