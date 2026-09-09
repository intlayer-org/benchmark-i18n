import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = D(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (k(t) && O.has(t)) {
			let e = O.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return _(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = D(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, S();
	} else if (t === "baseLocale") continue;
	else if (k(t) && O.has(t)) {
		let n = O.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function v(e) {
	return e;
}
function ee(e, t) {
	return e.exec(t.href);
}
var te = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), y = RegExp(`(?:^|;\\s*)${te}=([^;]*)`), b = Symbol(), x = b;
function S() {
	x = b;
}
function C() {
	typeof queueMicrotask == "function" ? queueMicrotask(S) : Promise.resolve().then(S);
}
function ne() {
	if (typeof document > "u") return;
	if (x !== b) return x;
	let e = document.cookie.match(y)?.[1];
	return x = g(e), C(), x;
}
function re(e) {
	return ie(e);
}
function ie(e) {
	let t = v(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var w, T;
function E(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (w === t) return T;
	let r = v(new URL(t, "http://example.com")), i = re(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (ee(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return w = t, T = o, o;
}
function D(e) {
	let t = E(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var O = /* @__PURE__ */ new Map();
function k(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var A = () => "Bundle size", j = () => "Lazy loading", M = () => "Library", N = () => "Lookup time", P = () => "Sample Results", F = () => "Taille du bundle", I = () => "Chargement différé", L = () => "Bibliothèque", R = () => "Temps de recherche", z = () => "Exemples de résultats", B = () => "Tamaño del bundle", V = () => "Carga diferida", H = () => "Biblioteca", U = () => "Tiempo de búsqueda", W = () => "Resultados de muestra", G = () => "Lazy Loading", K = () => "Bibliothek", q = () => "Suchzeit", J = () => "Dimensione del bundle", Y = () => "Caricamento lazy", ae = () => "Libreria", oe = () => "Tempo di ricerca", se = () => "Risultati di esempio", ce = () => "Tamanho do bundle", le = () => "Carregamento lento", ue = () => "Biblioteca", de = () => "Tempo de consulta", fe = () => "Resultados de amostra", pe = () => "包大小", me = () => "延迟加载", he = () => "库", ge = () => "查找时间", _e = () => "样本结果", ve = () => "バンドルサイズ", ye = () => "遅延読み込み", be = () => "ライブラリ", xe = () => "ルックアップ時間", Se = () => "サンプル結果", Ce = () => "번들 크기", we = () => "지연 로딩", Te = () => "라이브러리", Ee = () => "조회 시간", De = () => "샘플 결과", Oe = () => "Размер бандла", ke = () => "Ленивая загрузка", Ae = () => "Библиотека", X = () => "Время поиска", je = () => "Примеры результатов", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? F(e) : n === "es" ? B(e) : n === "de" ? A(e) : n === "it" ? J(e) : n === "pt" ? ce(e) : n === "zh" ? pe(e) : n === "ja" ? ve(e) : n === "ko" ? Ce(e) : n === "ru" ? Oe(e) : A(e);
}), Ne = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? I(e) : n === "es" ? V(e) : n === "de" ? G(e) : n === "it" ? Y(e) : n === "pt" ? le(e) : n === "zh" ? me(e) : n === "ja" ? ye(e) : n === "ko" ? we(e) : n === "ru" ? ke(e) : j(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? L(e) : n === "es" ? H(e) : n === "de" ? K(e) : n === "it" ? ae(e) : n === "pt" ? ue(e) : n === "zh" ? he(e) : n === "ja" ? be(e) : n === "ko" ? Te(e) : n === "ru" ? Ae(e) : M(e);
}), Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? R(e) : n === "es" ? U(e) : n === "de" ? q(e) : n === "it" ? oe(e) : n === "pt" ? de(e) : n === "zh" ? ge(e) : n === "ja" ? xe(e) : n === "ko" ? Ee(e) : n === "ru" ? X(e) : N(e);
}), Fe = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? z(e) : n === "es" ? W(e) : n === "de" ? P(e) : n === "it" ? se(e) : n === "pt" ? fe(e) : n === "zh" ? _e(e) : n === "ja" ? Se(e) : n === "ko" ? De(e) : n === "ru" ? je(e) : P(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/ResultsTable.tsx";
function Ie() {
	return t("section", { children: [t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: Fe()
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 28,
		columnNumber: 7
	}, this), t("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: t("table", {
			className: "w-full text-sm",
			children: [t("thead", {
				className: "bg-muted",
				children: t("tr", { children: [
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: Z ? Z() : "Library"
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 35,
						columnNumber: 15
					}, this),
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: Me()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 38,
						columnNumber: 15
					}, this),
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: Pe()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 41,
						columnNumber: 15
					}, this),
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: Ne()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 44,
						columnNumber: 15
					}, this)
				] }, void 0, !0, {
					fileName: Q,
					lineNumber: 34,
					columnNumber: 13
				}, this)
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 33,
				columnNumber: 11
			}, this), t("tbody", { children: [
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
			].map((e) => t("tr", {
				className: "border-t border-border",
				children: [
					t("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: e.lib
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 52,
						columnNumber: 17
					}, this),
					t("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.size
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 55,
						columnNumber: 17
					}, this),
					t("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.time
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 56,
						columnNumber: 17
					}, this),
					t("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.lazy
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 57,
						columnNumber: 17
					}, this)
				]
			}, e.lib, !0, {
				fileName: Q,
				lineNumber: 51,
				columnNumber: 15
			}, this)) }, void 0, !1, {
				fileName: Q,
				lineNumber: 49,
				columnNumber: 11
			}, this)]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 32,
			columnNumber: 9
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 31,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: Q,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
var Le = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function Re({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: Le,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/ResultsTable.wrapper.tsx";
function ze() {
	return t(Re, { children: t(Ie, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { ze as default };
