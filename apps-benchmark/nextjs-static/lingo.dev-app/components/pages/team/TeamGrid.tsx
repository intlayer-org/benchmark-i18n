export default function TeamGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border border-border bg-card p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
          SC
        </div>
        <h3 className="text-base font-semibold text-foreground">Sarah Chen</h3>
        <p className="mb-2 text-xs font-medium text-primary">
          Founder & Lead Engineer
        </p>
        <p className="text-sm text-muted-foreground">
          Former Google engineer with 10 years of experience building
          internationalization systems at scale.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
          MW
        </div>
        <h3 className="text-base font-semibold text-foreground">
          Marcus Weber
        </h3>
        <p className="mb-2 text-xs font-medium text-primary">
          Performance Engineer
        </p>
        <p className="text-sm text-muted-foreground">
          Specializes in JavaScript performance optimization and benchmarking
          methodology. Previously at Vercel.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
          AP
        </div>
        <h3 className="text-base font-semibold text-foreground">Aisha Patel</h3>
        <p className="mb-2 text-xs font-medium text-primary">
          Developer Advocate
        </p>
        <p className="text-sm text-muted-foreground">
          Passionate about developer experience and education. Speaker at React
          Conf, JSConf, and i18nNext.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
          TR
        </div>
        <h3 className="text-base font-semibold text-foreground">
          Tomás Rodríguez
        </h3>
        <p className="mb-2 text-xs font-medium text-primary">
          Full-Stack Developer
        </p>
        <p className="text-sm text-muted-foreground">
          Maintains the benchmarking infrastructure and CI/CD pipeline. Open
          source contributor to Lingui.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
          YT
        </div>
        <h3 className="text-base font-semibold text-foreground">Yuki Tanaka</h3>
        <p className="mb-2 text-xs font-medium text-primary">Data Analyst</p>
        <p className="text-sm text-muted-foreground">
          Ensures statistical rigor in all benchmark results. PhD in Applied
          Statistics from MIT.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
          EK
        </div>
        <h3 className="text-base font-semibold text-foreground">
          Elena Kowalski
        </h3>
        <p className="mb-2 text-xs font-medium text-primary">
          Community Manager
        </p>
        <p className="text-sm text-muted-foreground">
          Manages community contributions, partnerships, and events. Background
          in open source governance.
        </p>
      </div>
    </div>
  );
}
