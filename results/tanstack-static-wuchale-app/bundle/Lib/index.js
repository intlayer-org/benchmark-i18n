import "react";
import { useParams } from "@tanstack/react-router";
import { Fragment, jsx } from "react/jsx-runtime";
function EmptyComponent() {
	useParams({ strict: false }).locale;
	return jsx(Fragment, {});
}
export { EmptyComponent as default };
