import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
var r = {}, i = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l, u;
function ee(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of c) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return l = t, u = i, i;
}
function d(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var f = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	if (f) {
		let e = f?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	typeof window < "u" && window.location?.href && (e = d(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return b(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], c = s;
	typeof window < "u" && window.location?.href && (c = d(window.location.href));
	for (let t of c) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return y(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
//#endregion
//#region src/paraglide/messages/results_table_sampleresults1.js
var w = () => "Sample Results", T = () => "Beispielergebnisse", E = () => "Exemples de résultats", D = () => "Resultados de muestra", O = () => "サンプル結果", k = () => "样本结果", A = () => "샘플 결과", j = () => "Risultati di esempio", M = () => "Resultados de amostra", N = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? w(e) : n === "de" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "ja" ? O(e) : n === "zh" ? k(e) : n === "ko" ? A(e) : n === "it" ? j(e) : M(e);
}), P = () => "Bundle Size", F = () => "Bundle-Größe", I = () => "Taille du bundle", L = () => "Tamaño del bundle", R = () => "バンドルサイズ", z = () => "包大小", B = () => "번들 크기", V = () => "Dimensione del bundle", H = () => "Tamanho do bundle", te = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? P(e) : n === "de" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "ja" ? R(e) : n === "zh" ? z(e) : n === "ko" ? B(e) : n === "it" ? V(e) : H(e);
}), U = () => "Lookup Time", W = () => "Suchzeit", G = () => "Temps de recherche", K = () => "Tiempo de búsqueda", q = () => "ルックアップ時間", J = () => "查找时间", Y = () => "조회 시간", X = () => "Tempo di ricerca", Z = () => "Tempo de consulta", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? U(e) : n === "de" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "ja" ? q(e) : n === "zh" ? J(e) : n === "ko" ? Y(e) : n === "it" ? X(e) : Z(e);
}), ne = () => "Lazy Loading", re = () => "Lazy Loading", ie = () => "Chargement différé", ae = () => "Carga diferida", oe = () => "遅延読み込み", $ = () => "延迟加载", se = () => "지연 로딩", ce = () => "Caricamento lazy", le = () => "Carregamento lento", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ne(e) : n === "de" ? re(e) : n === "fr" ? ie(e) : n === "es" ? ae(e) : n === "ja" ? oe(e) : n === "zh" ? $(e) : n === "ko" ? se(e) : n === "it" ? ce(e) : le(e);
});
//#endregion
//#region src/components/pages/home/ResultsTable.tsx
function de() {
	return /* @__PURE__ */ n("section", { children: [/* @__PURE__ */ t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: N()
	}), /* @__PURE__ */ t("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: /* @__PURE__ */ n("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ t("thead", {
				className: "bg-muted",
				children: /* @__PURE__ */ n("tr", { children: [
					/* @__PURE__ */ t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Library"
					}),
					/* @__PURE__ */ t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: te()
					}),
					/* @__PURE__ */ t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: Q()
					}),
					/* @__PURE__ */ t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: ue()
					})
				] })
			}), /* @__PURE__ */ t("tbody", { children: [
				{
					lib: "react-i18next",
					size: "42.3 kB",
					time: "0.12ms",
					lazy: "Yes"
				},
				{
					lib: "react-intl",
					size: "38.1 kB",
					time: "0.15ms",
					lazy: "Manual"
				},
				{
					lib: "lingui",
					size: "12.8 kB",
					time: "0.08ms",
					lazy: "Yes"
				},
				{
					lib: "typesafe-i18n",
					size: "5.2 kB",
					time: "0.05ms",
					lazy: "Built-in"
				}
			].map((e) => /* @__PURE__ */ n("tr", {
				className: "border-t border-border",
				children: [
					/* @__PURE__ */ t("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: e.lib
					}),
					/* @__PURE__ */ t("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.size
					}),
					/* @__PURE__ */ t("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.time
					}),
					/* @__PURE__ */ t("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.lazy
					})
				]
			}, e.lib)) })]
		})
	})] });
}
//#endregion
//#region scripts/Wrapper.tsx
v("en", { reload: !1 });
function fe({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/home/ResultsTable.wrapper.tsx
function pe() {
	return /* @__PURE__ */ t(fe, { children: /* @__PURE__ */ t(de, {}) });
}
//#endregion
export { pe as default };
