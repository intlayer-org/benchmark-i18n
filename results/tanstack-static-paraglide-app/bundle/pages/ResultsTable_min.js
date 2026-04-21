import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
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
function d(e) {
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
function f(e) {
	let t = d(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var p = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = te();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ee(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let i = [], c = s;
	typeof window < "u" && window.location?.href && (c = f(window.location.href));
	for (let t of c) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function ee(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function te() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return b(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "Sample Results", w = () => "Exemples de résultats", T = () => "Resultados de muestra", E = () => "Risultati di esempio", D = () => "Resultados de amostra", O = () => "样本结果", k = () => "サンプル結果", A = () => "샘플 결과", j = () => "Примеры результатов", M = C, N = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? M(e) : n === "it" ? E(e) : n === "pt" ? D(e) : n === "zh" ? O(e) : n === "ja" ? k(e) : n === "ko" ? A(e) : j(e);
}), P = () => "Bundle size", F = () => "Taille du bundle", I = () => "Tamaño del bundle", L = () => "Dimensione del bundle", R = () => "Tamanho do bundle", z = () => "包大小", B = () => "バンドルサイズ", V = () => "번들 크기", H = () => "Размер бандла", U = P, W = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? U(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : H(e);
}), G = () => "Lookup time", K = () => "Temps de recherche", q = () => "Tiempo de búsqueda", J = () => "Suchzeit", ne = () => "Tempo di ricerca", Y = () => "Tempo de consulta", X = () => "查找时间", Z = () => "ルックアップ時間", re = () => "조회 시간", ie = () => "Время поиска", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? ne(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Lazy loading", se = () => "Chargement différé", ce = () => "Carga diferida", le = () => "Lazy Loading", ue = () => "Caricamento lazy", de = () => "Carregamento lento", fe = () => "延迟加载", pe = () => "遅延読み込み", me = () => "지연 로딩", he = () => "Ленивая загрузка", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "Library", ve = () => "Bibliothèque", ye = () => "Biblioteca", be = () => "Bibliothek", xe = () => "Libreria", Q = () => "Biblioteca", Se = () => "库", Ce = () => "ライブラリ", we = () => "라이브러리", Te = () => "Библиотека", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Q(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : Te(e);
});
function Ee() {
	return n("section", { children: [t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: N()
	}), t("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: n("table", {
			className: "w-full text-sm",
			children: [t("thead", {
				className: "bg-muted",
				children: n("tr", { children: [
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: $ ? $() : "Library"
					}),
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: W()
					}),
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: ae()
					}),
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: ge()
					})
				] })
			}), t("tbody", { children: [
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
			].map((e) => n("tr", {
				className: "border-t border-border",
				children: [
					t("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: e.lib
					}),
					t("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.size
					}),
					t("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.time
					}),
					t("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.lazy
					})
				]
			}, e.lib)) })]
		})
	})] });
}
y("en", { reload: !1 });
function De({ children: n }) {
	return t(e, { children: n });
}
function Oe() {
	return t(De, { children: t(Ee, {}) });
}
export { Oe as default };
