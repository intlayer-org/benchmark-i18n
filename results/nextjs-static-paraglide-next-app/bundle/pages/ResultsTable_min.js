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
], f = [], p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	let e = d;
	!p && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = re();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
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
		r = g();
	} catch {}
	let i = [], a = d;
	!p && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${u}`;
		document.cookie = t, D();
	} else if (t === "baseLocale") continue;
	else if (F(t) && P.has(t)) {
		let n = P.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!p && n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function x(e) {
	return e;
}
function S(e, t) {
	return e.exec(t.href);
}
var C = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), w = RegExp(`(?:^|;\\s*)${C}=([^;]*)`), T = Symbol(), E = T;
function D() {
	E = T;
}
function ne() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function re() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(w)?.[1];
	return E = y(e), ne(), E;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = x(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), x(t);
}
var A, j;
function M(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = x(new URL(t, "http://example.com")), r = O(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of f) if (S(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return A = t, j = a, a;
}
function N(e) {
	let t = M(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "Bundle size", L = () => "Taille du bundle", R = () => "Tamaño del bundle", z = () => "Dimensione del bundle", B = () => "Tamanho do bundle", V = () => "包大小", H = () => "バンドルサイズ", U = () => "번들 크기", W = () => "Размер бандла", G = I, K = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? G(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : I(e);
}), q = () => "Lazy loading", J = () => "Chargement différé", Y = () => "Carga diferida", X = () => "Lazy Loading", ie = () => "Caricamento lazy", ae = () => "Carregamento lento", oe = () => "延迟加载", se = () => "遅延読み込み", ce = () => "지연 로딩", le = () => "Ленивая загрузка", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : n === "ru" ? le(e) : q(e);
}), de = () => "Library", fe = () => "Bibliothèque", pe = () => "Biblioteca", me = () => "Bibliothek", he = () => "Libreria", ge = () => "Biblioteca", _e = () => "库", ve = () => "ライブラリ", ye = () => "라이브러리", be = () => "Библиотека", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : n === "ru" ? be(e) : de(e);
}), xe = () => "Lookup time", Se = () => "Temps de recherche", Ce = () => "Tiempo de búsqueda", we = () => "Suchzeit", Te = () => "Tempo di ricerca", Ee = () => "Tempo de consulta", De = () => "查找时间", Oe = () => "ルックアップ時間", ke = () => "조회 시간", Ae = () => "Время поиска", je = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : n === "ru" ? Ae(e) : xe(e);
}), Q = () => "Sample Results", Me = () => "Exemples de résultats", Ne = () => "Resultados de muestra", Pe = () => "Risultati di esempio", Fe = () => "Resultados de amostra", Ie = () => "样本结果", Le = () => "サンプル結果", $ = () => "샘플 결과", Re = () => "Примеры результатов", ze = Q, Be = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? ze(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? $(e) : n === "ru" ? Re(e) : Q(e);
});
function Ve() {
	return a("section", { children: [i("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: Be()
	}), i("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: a("table", {
			className: "w-full text-sm",
			children: [i("thead", {
				className: "bg-muted",
				children: a("tr", { children: [
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: Z ? Z() : "Library"
					}),
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: K()
					}),
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: je()
					}),
					i("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: ue()
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
function He() {
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
function Ue(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function We({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Ue("AppRoot", c);
	}, [c]), e(() => {
		v(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		He();
	}, []), i(r, { children: a });
}
function Ge({ children: e }) {
	return i(We, { children: e });
}
function Ke() {
	return i(Ge, { children: i(Ve, {}) });
}
export { Ke as default };
