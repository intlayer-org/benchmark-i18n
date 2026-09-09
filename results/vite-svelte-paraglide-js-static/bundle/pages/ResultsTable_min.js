import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
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
	!c && typeof window < "u" && window.location?.href && (e = k(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
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
	!c && typeof window < "u" && window.location?.href && (u = k(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, S();
	} else if (t === "baseLocale") continue;
	else if (j(t) && A.has(t)) {
		let n = A.get(t);
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
function y(e, t) {
	return e.exec(t.href);
}
var ee = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), te = RegExp(`(?:^|;\\s*)${ee}=([^;]*)`), b = Symbol(), x = b;
function S() {
	x = b;
}
function C() {
	typeof queueMicrotask == "function" ? queueMicrotask(S) : Promise.resolve().then(S);
}
function w() {
	if (typeof document > "u") return;
	if (x !== b) return x;
	let e = document.cookie.match(te)?.[1];
	return x = g(e), C(), x;
}
function T(e) {
	return ne(e);
}
function ne(e) {
	let t = v(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var E, D;
function O(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (E === t) return D;
	let r = v(new URL(t, "http://example.com")), i = T(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (y(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return E = t, D = o, o;
}
function k(e) {
	let t = O(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "Built-in", N = () => "Intégré", P = () => "Integrado", F = () => "Integriert", I = () => "Integrato", L = () => "Integrado", R = () => "内置", z = () => "内蔵", B = () => "Built-in", V = () => "Встроено", H = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? N(e) : n === "es" ? P(e) : n === "de" ? F(e) : n === "it" ? I(e) : n === "pt" ? L(e) : n === "zh" ? R(e) : n === "ja" ? z(e) : n === "ko" ? B(e) : n === "ru" ? V(e) : M(e);
}), U = () => "Bundle Size", W = () => "Taille du bundle", G = () => "Tamaño del bundle", K = () => "Bundle-Größe", q = () => "Dimensione del bundle", J = () => "Tamanho do Bundle", Y = () => "包大小", X = () => "バンドルサイズ", Z = () => "Bundle Size", re = () => "Размер бандла", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? q(e) : n === "pt" ? J(e) : n === "zh" ? Y(e) : n === "ja" ? X(e) : n === "ko" ? Z(e) : n === "ru" ? re(e) : U(e);
}), ae = () => "Lazy Loading", oe = () => "Chargement paresseux", se = () => "Carga diferida", ce = () => "Lazy Loading", le = () => "Caricamento lazy", ue = () => "Carregamento Lento", de = () => "延迟加载", fe = () => "遅延読み込み", pe = () => "Lazy Loading", me = () => "Ленивая загрузка", he = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : n === "ru" ? me(e) : ae(e);
}), ge = () => "Library", _e = () => "Bibliothèque", ve = () => "Biblioteca", ye = () => "Bibliothek", be = () => "Libreria", xe = () => "Biblioteca", Se = () => "库", Ce = () => "ライブラリ", we = () => "Library", Te = () => "Библиотека", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : n === "ru" ? Te(e) : ge(e);
}), De = () => "Lookup Time", Oe = () => "Temps de recherche", ke = () => "Tiempo de búsqueda", Ae = () => "Lookup-Zeit", je = () => "Tempo di ricerca", Me = () => "Tempo de Busca", Ne = () => "查找时间", Pe = () => "ルックアップ時間", Fe = () => "Lookup Time", Ie = () => "Время поиска", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : n === "ru" ? Ie(e) : De(e);
}), Re = () => "Manual", ze = () => "Manuel", Be = () => "Manual", Ve = () => "Manuell", He = () => "Manuale", Ue = () => "Manual", We = () => "手动", Ge = () => "手動", Ke = () => "Manual", qe = () => "Вручную", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : n === "ru" ? qe(e) : Re(e);
}), Ye = () => "Sample Results", Xe = () => "Exemple de résultats", Ze = () => "Resultados de muestra", Qe = () => "Beispielergebnisse", $e = () => "Risultati di esempio", et = () => "Resultados de exemplo", tt = () => "示例结果", nt = () => "サンプル結果", Q = () => "Sample Results", rt = () => "Примеры результатов", it = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? Q(e) : n === "ru" ? rt(e) : Ye(e);
}), at = () => "Yes", ot = () => "Oui", st = () => "Sí", ct = () => "Ja", lt = () => "Sì", ut = () => "Sim", dt = () => "是", ft = () => "はい", pt = () => "Yes", mt = () => "Да", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ot(e) : n === "es" ? st(e) : n === "de" ? ct(e) : n === "it" ? lt(e) : n === "pt" ? ut(e) : n === "zh" ? dt(e) : n === "ja" ? ft(e) : n === "ko" ? pt(e) : n === "ru" ? mt(e) : at(e);
});
function ht(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var gt = e.from_html("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td></tr>"), _t = e.from_html("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=\"bg-muted\"><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th></tr></thead><tbody></tbody></table></div></section>");
function vt(t, n) {
	e.push(n, !1), ht("ResultsTable");
	let r = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: $()
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: Je()
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: $()
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: H()
		}
	];
	e.init();
	var i = _t(), a = e.child(i), o = e.only_child(a, !0), s = e.sibling(a, 2), c = e.child(s), l = e.child(c), u = e.child(l), d = e.child(u), f = e.only_child(d, !0), p = e.sibling(d), m = e.only_child(p, !0), h = e.sibling(p), g = e.only_child(h, !0), _ = e.sibling(h), v = e.only_child(_, !0);
	e.reset(u), e.reset(l);
	var y = e.sibling(l);
	e.each(y, 5, () => r, e.index, (t, n) => {
		var r = gt(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i), s = e.only_child(o, !0), c = e.sibling(o), l = e.only_child(c, !0), u = e.sibling(c), d = e.only_child(u, !0);
		e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).lib), e.set_text(s, e.get(n).size), e.set_text(l, e.get(n).time), e.set_text(d, e.get(n).lazy);
		}), e.append(t, r);
	}), e.reset(y), e.reset(c), e.reset(s), e.reset(i), e.template_effect((t, n, r, i, a) => {
		e.set_text(o, t), e.set_text(f, n), e.set_text(m, r), e.set_text(g, i), e.set_text(v, a);
	}, [
		() => it(),
		() => Ee(),
		() => ie(),
		() => Le(),
		() => he()
	]), e.append(t, i), e.pop();
}
export { vt as default };
