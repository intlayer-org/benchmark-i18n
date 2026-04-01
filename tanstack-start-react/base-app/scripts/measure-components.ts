import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import pkg from "../package.json" with { type: "json" };
import Bun from "bun";

const COMPONENTS_DIRS = [
  path.resolve("./src/components"),
  path.resolve("./src/components/pages"),
];
const RESULTS_DIR = path.resolve(`../results/${pkg.name}`);

interface ComponentStats {
  name: string;
  category: string;
  sizeBytes: number;
  minifiedBytes: number;
  gzipBytes: number;
}

async function measureComponents() {
  console.log(`\nMeasuring component sizes...`);

  const glob = new Bun.Glob("**/*.tsx");
  const allComponents: ComponentStats[] = [];

  for (const dir of COMPONENTS_DIRS) {
    if (!fs.existsSync(dir)) continue;

    for await (const file of glob.scan({ cwd: dir })) {
      const fullPath = path.join(dir, file);
      const content = fs.readFileSync(fullPath, "utf-8");

      const category =
        path.dirname(file) === "."
          ? "Shared"
          : path.dirname(file).split(path.sep)[0];
      const name = path.basename(file);

      // Raw size
      const sizeBytes = Buffer.byteLength(content);

      // Minified size using Bun's built-in bundler (with external dependencies excluded)
      const buildResult = await Bun.build({
        entrypoints: [fullPath],
        minify: true,
        external: ["*"],
      });

      let finalMinBytes = sizeBytes;
      let finalGzipBytes = sizeBytes;

      if (buildResult.success) {
        const minifiedOutput = await buildResult.outputs[0].arrayBuffer();
        finalMinBytes = minifiedOutput.byteLength;
        finalGzipBytes = zlib.gzipSync(Buffer.from(minifiedOutput)).length;
      }

      allComponents.push({
        name,
        category,
        sizeBytes,
        minifiedBytes: finalMinBytes,
        gzipBytes: finalGzipBytes,
      });
    }
  }

  // Sort by minified size descending
  allComponents.sort((a, b) => b.minifiedBytes - a.minifiedBytes);

  // Print Detailed Table
  console.log(`\n--- INDIVIDUAL COMPONENT SIZES ---`);
  const tableData = allComponents.map((c) => ({
    Component: c.name,
    Category: c.category,
    Raw: `${(c.sizeBytes / 1024).toFixed(2)} KB`,
    Minified: `${(c.minifiedBytes / 1024).toFixed(2)} KB`,
    Gzipped: `${(c.gzipBytes / 1024).toFixed(2)} KB`,
  }));
  console.table(tableData);

  // Save to file
  if (!fs.existsSync(RESULTS_DIR)) {
    fs.mkdirSync(RESULTS_DIR, { recursive: true });
  }

  const outputPath = path.join(RESULTS_DIR, "components-size.json");
  fs.writeFileSync(
    outputPath,
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        packageName: pkg.name,
        summary: {
          totalComponents: allComponents.length,
          totalRawBytes: allComponents.reduce((a, b) => a + b.sizeBytes, 0),
          totalMinifiedBytes: allComponents.reduce(
            (a, b) => a + b.minifiedBytes,
            0,
          ),
          totalGzipBytes: allComponents.reduce((a, b) => a + b.gzipBytes, 0),
        },
        components: allComponents,
      },
      null,
      2,
    ),
  );

  console.log(`\nResults saved to: ${outputPath}\n`);
}

measureComponents().catch(console.error);
