import { loadLocales } from "wuchale/load-utils/server";
import { locales } from "./config";

import * as main from "#/locales/main.loader.server";

export async function initServerLoaders() {
  await loadLocales(main.key, main.loadCount, main.loadCatalog, locales as unknown as string[]);
}
