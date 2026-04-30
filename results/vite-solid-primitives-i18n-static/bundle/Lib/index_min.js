import { createSignal as e } from "solid-js";
var t = (e) => e != null && (e = Object.getPrototypeOf(e), e === Array.prototype || e === Object.prototype);
function n(e, r, i) {
	for (let [a, o] of Object.entries(r)) {
		let r = `${i}.${a}`;
		e[r] = o, t(o) && n(e, o, r);
	}
}
function r(e) {
	let r = { ...e };
	for (let [i, a] of Object.entries(e)) t(a) && n(r, a, i);
	return r;
}
var i = (e, t) => {
	if (t) for (let [n, r] of Object.entries(t)) e = e.replace(RegExp(`{{\\s*${n}\\s*}}`, "g"), r);
	return e;
}, a = ((e) => e);
function o(e, t = a) {
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
var s = { en: r({ header: { home: "Home" } }) }, [c] = e("en"), l = o(() => s[c()], i);
function u() {
	return l("header.home"), null;
}
export { u as default };
