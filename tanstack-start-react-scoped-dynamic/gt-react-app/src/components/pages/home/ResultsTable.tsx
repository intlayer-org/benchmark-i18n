import { T } from "gt-react";

export default function ResultsTable() {
  const results = [
    {
      lib: "react-i18next",
      size: "42.3 kB",
      time: "0.12ms",
      lazy: <T>Yes</T>,
    },
    {
      lib: "react-intl",
      size: "38.1 kB",
      time: "0.15ms",
      lazy: <T>Manual</T>,
    },
    { lib: "lingui", size: "12.8 kB", time: "0.08ms", lazy: <T>Yes</T> },
    {
      lib: "typesafe-i18n",
      size: "5.2 kB",
      time: "0.05ms",
      lazy: <T>Built-in</T>,
    },
  ];

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        <T>Sample Results</T>
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                <T>Library</T>
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                <T>Bundle Size</T>
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                <T>Lookup Time</T>
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                <T>Lazy Loading</T>
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.lib} className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">
                  {r.lib}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{r.size}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.time}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.lazy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
