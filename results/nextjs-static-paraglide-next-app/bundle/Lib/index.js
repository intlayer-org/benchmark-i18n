import "react";
import { Fragment, jsx } from "react/jsx-runtime";
globalThis.__paraglide = globalThis.__paraglide ?? {};
globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
function EmptyComponent() {
	return jsx(Fragment, {});
}
export { EmptyComponent as default };
