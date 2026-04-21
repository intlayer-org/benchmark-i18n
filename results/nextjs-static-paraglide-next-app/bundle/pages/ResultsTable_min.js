import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", u = 3456e4, d = [
	"cookie",
	"globalVariable",
	"baseLocale"
], f = [], p, m;
function h(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (p === t) return m;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of f) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return p = t, m = r, r;
}
function g(e) {
	let t = h(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var _ = void 0, v = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var y, b = !1, x = () => {
	if (_) {
		let e = _?.getStore()?.locale;
		if (e) return e;
	}
	let e = d;
	!v && typeof window < "u" && window.location?.href && (e = g(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return b || (y = t, b = !0, C(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && y !== void 0) n = y;
		else if (E(t) && T.has(t)) {
			let e = T.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = w(n);
		if (e) return e;
	}
}
var S = (e) => {
	e ? window.location.href = e : window.location.reload();
}, C = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = x();
	} catch {}
	let i = [], a = d;
	!v && typeof window < "u" && window.location?.href && (a = g(window.location.href));
	for (let t of a) if (t === "globalVariable") y = e;
	else if (t === "cookie") {
		if (v || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${u}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (E(t) && T.has(t)) {
		let n = T.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!v && n.reload && window.location && e !== r && S(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function w(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = w(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function ne() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return w(e);
}
var T = /* @__PURE__ */ new Map();
function E(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var D = () => "Sample Results", O = () => "Exemples de résultats", k = () => "Resultados de muestra", A = () => "Risultati di esempio", j = () => "Resultados de amostra", M = () => "样本结果", N = () => "サンプル結果", P = () => "샘플 결과", F = () => "Примеры результатов", I = D, L = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? D(e) : n === "fr" ? O(e) : n === "es" ? k(e) : n === "de" ? I(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), R = () => "Bundle size", z = () => "Taille du bundle", B = () => "Tamaño del bundle", V = () => "Dimensione del bundle", H = () => "Tamanho do bundle", U = () => "包大小", W = () => "バンドルサイズ", G = () => "번들 크기", K = () => "Размер бандла", q = R, J = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? R(e) : n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? q(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), Y = () => "Lookup time", X = () => "Temps de recherche", Z = () => "Tiempo de búsqueda", re = () => "Suchzeit", ie = () => "Tempo di ricerca", ae = () => "Tempo de consulta", oe = () => "查找时间", se = () => "ルックアップ時間", ce = () => "조회 시간", le = () => "Время поиска", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Y(e) : n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : le(e);
}), de = () => "Lazy loading", fe = () => "Chargement différé", pe = () => "Carga diferida", me = () => "Lazy Loading", he = () => "Caricamento lazy", ge = () => "Carregamento lento", _e = () => "延迟加载", ve = () => "遅延読み込み", ye = () => "지연 로딩", be = () => "Ленивая загрузка", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? de(e) : n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : be(e);
}), Se = () => "Library", Ce = () => "Bibliothèque", we = () => "Biblioteca", Te = () => "Bibliothek", Ee = () => "Libreria", De = () => "Biblioteca", Oe = () => "库", Q = () => "ライブラリ", ke = () => "라이브러리", Ae = () => "Библиотека", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Se(e) : n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? Q(e) : n === "ko" ? ke(e) : Ae(e);
});
function je() {
	return a("section", { children: [i("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: L()
	}), i("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: a("table", {
			className: "w-full text-sm",
			children: [i("thead", {
				className: "bg-muted",
				children: a("tr", { children: [
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: $ ? $() : "Library"
					}),
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: J()
					}),
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: ue()
					}),
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: xe()
					})
				] })
			}), i("tbody", { children: [
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
			].map((e) => a("tr", {
				className: "border-t border-border",
				children: [
					i("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: e.lib
					}),
					i("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.size
					}),
					i("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.time
					}),
					i("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.lazy
					})
				]
			}, e.lib)) })]
		})
	})] });
}
function Me() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function Ne(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Pe({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Ne("AppRoot", c);
	}, [c]), e(() => {
		C(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Me();
	}, []), i(r, { children: a });
}
function Fe({ children: e }) {
	return i(Pe, { children: e });
}
function Ie() {
	return i(Fe, { children: i(je, {}) });
}
export { Ie as default };
