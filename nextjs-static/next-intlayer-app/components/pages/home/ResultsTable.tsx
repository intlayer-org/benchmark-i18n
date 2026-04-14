import { useIntlayer } from "next-intlayer";
export default function ResultsTable() {
  const content = useIntlayer("results-table");

  const results = [
    {
      lib: "react-i18next",
      size: content.kilobytes({ val: "42.3" }),
      time: content.milliseconds({ val: "0.12" }),
      lazy: content.yes.value,
    },
    {
      lib: "react-intl",
      size: content.kilobytes({ val: "38.1" }),
      time: content.milliseconds({ val: "0.15" }),
      lazy: content.manual.value,
    },
    {
      lib: "lingui",
      size: content.kilobytes({ val: "12.8" }),
      time: content.milliseconds({ val: "0.08" }),
      lazy: content.yes.value,
    },
    {
      lib: "typesafe-i18n",
      size: content.kilobytes({ val: "5.2" }),
      time: content.milliseconds({ val: "0.05" }),
      lazy: content.builtIn.value,
    },
  ];

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {content.sampleResults}
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                {content.library}
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                {content.bundleSize}
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                {content.lookupTime}
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                {content.lazyLoading}
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
