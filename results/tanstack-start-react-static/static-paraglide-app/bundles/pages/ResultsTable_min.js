import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
var r = {}, i = [
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
var w = () => "Sample Results", T = () => "Exemples de résultats", E = () => "Resultados de muestra", D = () => "Beispielergebnisse", O = () => "Risultati di esempio", k = () => "Resultados de amostra", A = () => "样本结果", j = () => "サンプル結果", M = () => "샘플 결과", N = () => "Примеры результатов", P = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Bundle Size", I = () => "Taille du bundle", L = () => "Tamaño del bundle", R = () => "Bundle-Größe", z = () => "Dimensione del bundle", B = () => "Tamanho do bundle", V = () => "包大小", H = () => "バンドルサイズ", te = () => "번들 크기", U = () => "Размер бандла", W = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? te(e) : U(e);
}), G = () => "Lookup Time", K = () => "Temps de recherche", q = () => "Tiempo de búsqueda", J = () => "Suchzeit", Y = () => "Tempo di ricerca", X = () => "Tempo de consulta", Z = () => "查找时间", Q = () => "ルックアップ時間", ne = () => "조회 시간", re = () => "Время поиска", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : re(e);
}), ae = () => "Lazy Loading", oe = () => "Chargement différé", se = () => "Carga diferida", ce = () => "Lazy Loading", le = () => "Caricamento lazy", ue = () => "Carregamento lento", de = () => "延迟加载", fe = () => "遅延読み込み", pe = () => "지연 로딩", $ = () => "Ленивая загрузка", me = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : $(e);
});
//#endregion
//#region src/components/pages/home/ResultsTable.tsx
function he() {
	return /* @__PURE__ */ n("section", { children: [/* @__PURE__ */ t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: P()
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
						children: W()
					}),
					/* @__PURE__ */ t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: ie()
					}),
					/* @__PURE__ */ t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: me()
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
function ge({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/home/ResultsTable.wrapper.tsx
function _e() {
	return /* @__PURE__ */ t(ge, { children: /* @__PURE__ */ t(he, {}) });
}
//#endregion
export { _e as default };
