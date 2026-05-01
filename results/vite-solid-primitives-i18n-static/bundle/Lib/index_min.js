import { createComponent as e, memo as t } from "solid-js/web";
import { createSignal as n } from "solid-js";
var r = (e) => e != null && (e = Object.getPrototypeOf(e), e === Array.prototype || e === Object.prototype);
function i(e, t, n) {
	for (let [a, o] of Object.entries(t)) {
		let t = `${n}.${a}`;
		e[t] = o, r(o) && i(e, o, t);
	}
}
function a(e) {
	let t = { ...e };
	for (let [n, a] of Object.entries(e)) r(a) && i(t, a, n);
	return t;
}
var o = (e, t) => {
	if (t) for (let [n, r] of Object.entries(t)) e = e.replace(RegExp(`{{\\s*${n}\\s*}}`, "g"), r);
	return e;
}, s = ((e) => e);
function c(e, t = s) {
	return (n, ...r) => {
		n[0] === "." && (n = n.slice(1));
		let i = e()?.[n];
		switch (typeof i) {
			case "function": return i(...r);
			case "string": return t(i, r[0]);
			default: return i;
		}
	};
}
var l = { en: a({ header: { home: "Home" } }) }, [u] = n("en"), d = c(() => l[u()], o);
function f() {
	return d("header.home"), null;
}
var p = a({ header: { home: "Home" } }), [m] = n("en"), h = c(() => p, o);
function g(e) {
	return h("header.home"), t(() => e.children);
}
function _() {
	return e(g, { get children() {
		return e(f, {});
	} });
}
export { _ as default };
