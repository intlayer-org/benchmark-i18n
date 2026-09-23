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
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = k(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ee(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = k(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, w();
	} else if (t === "baseLocale") continue;
	else if (j(t) && A.has(t)) {
		let n = A.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, g = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function ee(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function ne() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = _(e), te(), C;
}
function re(e) {
	return T(e);
}
function T(e) {
	let t = v(typeof e == "string" ? new URL(e, g()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var E, D;
function O(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (E === t) return D;
	let n = v(new URL(t, "http://example.com")), i = re(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (y(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return E = t, D = o, o;
}
function k(e) {
	let t = O(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "Bundle size", N = () => "Taille du bundle", P = () => "Tamaño del bundle", F = () => "Dimensione del bundle", I = () => "Tamanho do bundle", L = () => "包大小", R = () => "バンドルサイズ", z = () => "번들 크기", B = () => "Размер бандла", V = M, H = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? N(e) : n === "es" ? P(e) : n === "de" ? V(e) : n === "it" ? F(e) : n === "pt" ? I(e) : n === "zh" ? L(e) : n === "ja" ? R(e) : n === "ko" ? z(e) : n === "ru" ? B(e) : M(e);
}), U = () => "Lazy loading", W = () => "Chargement différé", G = () => "Carga diferida", K = () => "Lazy Loading", q = () => "Caricamento lazy", J = () => "Carregamento lento", Y = () => "延迟加载", X = () => "遅延読み込み", ie = () => "지연 로딩", ae = () => "Ленивая загрузка", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? q(e) : n === "pt" ? J(e) : n === "zh" ? Y(e) : n === "ja" ? X(e) : n === "ko" ? ie(e) : n === "ru" ? ae(e) : U(e);
}), se = () => "Library", ce = () => "Bibliothèque", le = () => "Biblioteca", ue = () => "Bibliothek", de = () => "Libreria", fe = () => "Biblioteca", pe = () => "库", me = () => "ライブラリ", he = () => "라이브러리", ge = () => "Библиотека", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : n === "ru" ? ge(e) : se(e);
}), _e = () => "Lookup time", ve = () => "Temps de recherche", ye = () => "Tiempo de búsqueda", be = () => "Suchzeit", xe = () => "Tempo di ricerca", Se = () => "Tempo de consulta", Ce = () => "查找时间", we = () => "ルックアップ時間", Te = () => "조회 시간", Ee = () => "Время поиска", De = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Q = () => "Sample Results", $ = () => "Exemples de résultats", Oe = () => "Resultados de muestra", ke = () => "Risultati di esempio", Ae = () => "Resultados de amostra", je = () => "样本结果", Me = () => "サンプル結果", Ne = () => "샘플 결과", Pe = () => "Примеры результатов", Fe = Q, Ie = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $(e) : n === "es" ? Oe(e) : n === "de" ? Fe(e) : n === "it" ? ke(e) : n === "pt" ? Ae(e) : n === "zh" ? je(e) : n === "ja" ? Me(e) : n === "ko" ? Ne(e) : n === "ru" ? Pe(e) : Q(e);
});
function Le() {
	return n("section", { children: [t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: Ie()
	}), t("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: n("table", {
			className: "w-full text-sm",
			children: [t("thead", {
				className: "bg-muted",
				children: n("tr", { children: [
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: Z ? Z() : "Library"
					}),
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: H()
					}),
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: De()
					}),
					t("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: oe()
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
h("en", { reload: !1 });
function Re({ children: n }) {
	return t(e, { children: n });
}
function ze() {
	return t(Re, { children: t(Le, {}) });
}
export { ze as default };
