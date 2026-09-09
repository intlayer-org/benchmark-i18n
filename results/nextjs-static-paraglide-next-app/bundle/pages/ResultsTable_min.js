import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsxDEV as i } from "react/jsx-dev-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", l = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = re();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = A(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${l}`;
		document.cookie = t, E();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function b(e) {
	return e;
}
function x(e, t) {
	return e.exec(t.href);
}
var S = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), C = RegExp(`(?:^|;\\s*)${S}=([^;]*)`), w = Symbol(), T = w;
function E() {
	T = w;
}
function ne() {
	typeof queueMicrotask == "function" ? queueMicrotask(E) : Promise.resolve().then(E);
}
function re() {
	if (typeof document > "u") return;
	if (T !== w) return T;
	let e = document.cookie.match(C)?.[1];
	return T = v(e), ne(), T;
}
function ie(e) {
	return ae(e);
}
function ae(e) {
	let t = b(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && v(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), b(t);
}
var D, O;
function k(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let n = b(new URL(t, "http://example.com")), r = ie(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (x(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return D = t, O = a, a;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "Bundle size", P = () => "Taille du bundle", F = () => "Tamaño del bundle", I = () => "Dimensione del bundle", L = () => "Tamanho do bundle", R = () => "包大小", z = () => "バンドルサイズ", B = () => "번들 크기", V = () => "Размер бандла", H = N, U = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? H(e) : n === "it" ? I(e) : n === "pt" ? L(e) : n === "zh" ? R(e) : n === "ja" ? z(e) : n === "ko" ? B(e) : n === "ru" ? V(e) : N(e);
}), W = () => "Lazy loading", G = () => "Chargement différé", K = () => "Carga diferida", q = () => "Lazy Loading", J = () => "Caricamento lazy", oe = () => "Carregamento lento", se = () => "延迟加载", ce = () => "遅延読み込み", le = () => "지연 로딩", ue = () => "Ленивая загрузка", de = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? oe(e) : n === "zh" ? se(e) : n === "ja" ? ce(e) : n === "ko" ? le(e) : n === "ru" ? ue(e) : W(e);
}), fe = () => "Library", pe = () => "Bibliothèque", me = () => "Biblioteca", he = () => "Bibliothek", ge = () => "Libreria", _e = () => "Biblioteca", ve = () => "库", ye = () => "ライブラリ", be = () => "라이브러리", xe = () => "Библиотека", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? pe(e) : n === "es" ? me(e) : n === "de" ? he(e) : n === "it" ? ge(e) : n === "pt" ? _e(e) : n === "zh" ? ve(e) : n === "ja" ? ye(e) : n === "ko" ? be(e) : n === "ru" ? xe(e) : fe(e);
}), Se = () => "Lookup time", Ce = () => "Temps de recherche", we = () => "Tiempo de búsqueda", Te = () => "Suchzeit", Ee = () => "Tempo di ricerca", De = () => "Tempo de consulta", Oe = () => "查找时间", ke = () => "ルックアップ時間", Ae = () => "조회 시간", je = () => "Время поиска", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : n === "ru" ? je(e) : Se(e);
}), X = () => "Sample Results", Ne = () => "Exemples de résultats", Pe = () => "Resultados de muestra", Fe = () => "Risultati di esempio", Ie = () => "Resultados de amostra", Le = () => "样本结果", Re = () => "サンプル結果", ze = () => "샘플 결과", Be = () => "Примеры результатов", Ve = X, He = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Ve(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : X(e);
}), Z = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/home/ResultsTable.tsx";
function Q() {
	return i("section", { children: [i("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: He()
	}, void 0, !1, {
		fileName: Z,
		lineNumber: 30,
		columnNumber: 7
	}, this), i("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: i("table", {
			className: "w-full text-sm",
			children: [i("thead", {
				className: "bg-muted",
				children: i("tr", { children: [
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: Y ? Y() : "Library"
					}, void 0, !1, {
						fileName: Z,
						lineNumber: 37,
						columnNumber: 15
					}, this),
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: U()
					}, void 0, !1, {
						fileName: Z,
						lineNumber: 40,
						columnNumber: 15
					}, this),
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: Me()
					}, void 0, !1, {
						fileName: Z,
						lineNumber: 43,
						columnNumber: 15
					}, this),
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: de()
					}, void 0, !1, {
						fileName: Z,
						lineNumber: 46,
						columnNumber: 15
					}, this)
				] }, void 0, !0, {
					fileName: Z,
					lineNumber: 36,
					columnNumber: 13
				}, this)
			}, void 0, !1, {
				fileName: Z,
				lineNumber: 35,
				columnNumber: 11
			}, this), i("tbody", { children: [
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
			].map((e) => i("tr", {
				className: "border-t border-border",
				children: [
					i("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: e.lib
					}, void 0, !1, {
						fileName: Z,
						lineNumber: 54,
						columnNumber: 17
					}, this),
					i("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.size
					}, void 0, !1, {
						fileName: Z,
						lineNumber: 57,
						columnNumber: 17
					}, this),
					i("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.time
					}, void 0, !1, {
						fileName: Z,
						lineNumber: 58,
						columnNumber: 17
					}, this),
					i("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.lazy
					}, void 0, !1, {
						fileName: Z,
						lineNumber: 59,
						columnNumber: 17
					}, this)
				]
			}, e.lib, !0, {
				fileName: Z,
				lineNumber: 53,
				columnNumber: 15
			}, this)) }, void 0, !1, {
				fileName: Z,
				lineNumber: 51,
				columnNumber: 11
			}, this)]
		}, void 0, !0, {
			fileName: Z,
			lineNumber: 34,
			columnNumber: 9
		}, this)
	}, void 0, !1, {
		fileName: Z,
		lineNumber: 33,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: Z,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
function Ue() {
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
function We(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Ge = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function Ke({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		We("AppRoot", c);
	}, [c]), e(() => {
		_(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Ue();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: Ge,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var qe = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Je({ children: e }) {
	return i(Ke, { children: e }, void 0, !1, {
		fileName: qe,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/home/ResultsTable.wrapper.tsx";
function Ye() {
	return i(Je, { children: i(Q, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Ye as default };
