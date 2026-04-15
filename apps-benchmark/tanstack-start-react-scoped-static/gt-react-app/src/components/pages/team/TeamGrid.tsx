import { T } from "gt-react";

export default function TeamGrid() {
  const members = [
    {
      name: <T>Sarah Chen</T>,
      role: <T>Founder & Lead Engineer</T>,
      bio: (
        <T>
          Former Google engineer with 10 years of experience building
          internationalization systems at scale.
        </T>
      ),
    },
    {
      name: <T>Marcus Weber</T>,
      role: <T>Performance Engineer</T>,
      bio: (
        <T>
          Specializes in JavaScript performance optimization and benchmarking
          methodology. Previously at Vercel.
        </T>
      ),
    },
    {
      name: <T>Aisha Patel</T>,
      role: <T>Developer Advocate</T>,
      bio: (
        <T>
          Passionate about developer experience and education. Speaker at React
          Conf, JSConf, and i18nNext.
        </T>
      ),
    },
    {
      name: <T>Tomás Rodríguez</T>,
      role: <T>Full-Stack Developer</T>,
      bio: (
        <T>
          Maintains the benchmarking infrastructure and CI/CD pipeline. Open
          source contributor to Lingui.
        </T>
      ),
    },
    {
      name: <T>Yuki Tanaka</T>,
      role: <T>Data Analyst</T>,
      bio: (
        <T>
          Ensures statistical rigor in all benchmark results. PhD in Applied
          Statistics from MIT.
        </T>
      ),
    },
    {
      name: <T>Elena Kowalski</T>,
      role: <T>Community Manager</T>,
      bio: (
        <T>
          Manages community contributions, partnerships, and events. Background in
          open source governance.
        </T>
      ),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => (
        <div
          key={i}
          className="rounded-lg border border-border bg-card p-6 text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
            {m.name.props.children
              .split(" ")
              .map((n: string) => n[0])
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
