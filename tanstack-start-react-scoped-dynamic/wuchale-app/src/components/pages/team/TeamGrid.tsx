const members = [
  {
    name: "Sarah Chen",
    role: "Founder & Lead Engineer",
    bio: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
  },
  {
    name: "Marcus Weber",
    role: "Performance Engineer",
    bio: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
  },
  {
    name: "Aisha Patel",
    role: "Developer Advocate",
    bio: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
  },
  {
    name: "Tomás Rodríguez",
    role: "Full-Stack Developer",
    bio: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
  },
  {
    name: "Yuki Tanaka",
    role: "Data Analyst",
    bio: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
  },
  {
    name: "Elena Kowalski",
    role: "Community Manager",
    bio: "Manages community contributions, partnerships, and events. Background in open source governance.",
  },
];

export default function TeamGrid() {
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
