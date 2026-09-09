import { createComponent as e, effect as t, insert as n, template as r } from "solid-js/web";
import { useLocation as i, useNavigate as a, useParams as o } from "@solidjs/router";
import { For as s } from "solid-js";
var c = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"pt",
	"zh",
	"ja",
	"ko",
	"ru"
], l = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, u = r("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), d = r("<option>");
function f() {
	let r = o(), f = a(), p = i(), m = (e) => {
		let t = p.pathname.replace(/^\/[^/]+/, `/${e}`);
		f(`${t}${p.search}${p.hash}`);
	};
	return (() => {
		var i = u(), a = i.firstChild;
		return a.addEventListener("change", (e) => m(e.currentTarget.value)), n(a, e(s, {
			each: c,
			children: (e) => (() => {
				var t = d();
				return t.value = e, n(t, () => l(e)), t;
			})()
		})), t(() => a.value = r.locale ?? "en"), i;
	})();
}
export { f as default };
