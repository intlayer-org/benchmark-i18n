export default function ResultsTable() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        Sample Results
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Library
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Bundle Size
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Lookup Time
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Lazy Loading
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium text-foreground">
                react-i18next
              </td>
              <td className="px-4 py-3 text-muted-foreground">42.3 kB</td>
              <td className="px-4 py-3 text-muted-foreground">0.12ms</td>
              <td className="px-4 py-3 text-muted-foreground">Yes</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium text-foreground">
                react-intl
              </td>
              <td className="px-4 py-3 text-muted-foreground">38.1 kB</td>
              <td className="px-4 py-3 text-muted-foreground">0.15ms</td>
              <td className="px-4 py-3 text-muted-foreground">Manual</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium text-foreground">lingui</td>
              <td className="px-4 py-3 text-muted-foreground">12.8 kB</td>
              <td className="px-4 py-3 text-muted-foreground">0.08ms</td>
              <td className="px-4 py-3 text-muted-foreground">Yes</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium text-foreground">
                typesafe-i18n
              </td>
              <td className="px-4 py-3 text-muted-foreground">5.2 kB</td>
              <td className="px-4 py-3 text-muted-foreground">0.05ms</td>
              <td className="px-4 py-3 text-muted-foreground">Built-in</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
