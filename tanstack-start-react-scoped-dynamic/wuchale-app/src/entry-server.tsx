import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";
import { runWithLocale } from "wuchale/load-utils/server";

const handler = createStartHandler(defaultStreamHandler);

export default (req: Request) => {
  const url = new URL(req.url);
  const locale = url.pathname.split("/")[1] || "en";
  return runWithLocale(locale, () => handler(req));
};
