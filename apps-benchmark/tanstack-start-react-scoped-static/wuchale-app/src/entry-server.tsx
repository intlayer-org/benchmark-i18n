import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";

// Catalogs are bundled (`loading.direct`); the root route sets the locale.
export default createStartHandler(defaultStreamHandler);
